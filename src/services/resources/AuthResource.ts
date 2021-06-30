import axios, { AxiosError } from 'axios'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { TypedEmitter } from 'tiny-typed-emitter'
import AlertEvents from '../../events/AlertEvents'
import { api } from '../api'
import UserApi from '../api/UserApi'

import Route from 'next/router'

import { GetServerSidePropsContext, Redirect } from 'next'
import { ParsedUrlQuery } from 'node:querystring'

export interface Credentials {
  username: string
  password: string
}

export interface Token {
  type: 'bearer'
  token: string
}

class AuthResource extends TypedEmitter<{
  profile: () => void
  token: () => void
}> {
  private _profile: App.User

  public get profile() {
    return this._profile
  }

  public set profile(profile) {
    this._profile = profile
    this.emit('profile')
  }

  private _token: Token

  public get token() {
    return this._token
  }

  public set token(token) {
    this._token = token
    const tokenStr = `${token.token}`.replace(/bearer/g, '').replace(/\s/g, '')
    const nextTokenStr = `${token.type} ${tokenStr}`
    api.defaults.headers.Authorization = nextTokenStr
    setCookie(undefined, 'mydiary-token', nextTokenStr, {
      maxAge: 60 * 60 * 24 // 1 day
    })
    this.emit('token')
  }

  public async logIn(data: Credentials) {
    return UserApi.auth(data)
      .then((token) => {
        this.token = token
        return this.getProfile()
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          AlertEvents.emit('currentLoginError', err.response.data.errors[0].message)
        } else {
          AlertEvents.emit('currentLoginError', 'Internal Error')
        }
      })
  }

  public async logOut() {
    destroyCookie(undefined, 'mydiary-token')
    Route.push('/auth')
  }

  public async getLocalToken(ctx?: GetServerSidePropsContext<ParsedUrlQuery>) {
    const { 'mydiary-token': token } = parseCookies(ctx)

    return token
  }

  public async loginByLocalToken(ctx?: GetServerSidePropsContext<ParsedUrlQuery>) {
    const token = await this.getLocalToken(ctx)

    this.token = { type: 'bearer', token }

    if (!ctx) {
      await this.getProfile()
    }
  }

  public async redirectIfNotAuthenticated(
    ctx: GetServerSidePropsContext<ParsedUrlQuery>
  ): Promise<Redirect | void> {
    const token = await this.getLocalToken(ctx)
    if (token) return
    return {
      destination: '/auth',
      permanent: false
    }
  }

  public async getProfile() {
    const user = await UserApi.getUser()
    this.profile = user
    return user
  }
}

export default new AuthResource()
