import { api } from '../api'
import { setCookie, destroyCookie } from 'nookies'
import axios, { AxiosError } from 'axios'
import AlertEvents from '../../events/AlertEvents'

import Route from 'next/router'

class UserApi {
  public async create({ username, password, email }: Partial<App.User>) {
    return api
      .post<App.User>('user', {
        username,
        password,
        email
      })
      .then((res) => res.data)
  }

  public async auth({ username, password }: Partial<App.User>) {
    return api
      .post('auth', {
        username,
        password
      })
      .then((res) => {
        api.defaults.headers.Authorization = `Bearer ${res.data.token}`
      })
      .then(() => {
        setCookie(undefined, 'mydiary-token', api.defaults.headers.Authorization, {
          maxAge: 60 * 60 * 24 // 1 day
        })
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

  public async setAvatar(image: File, filename: string) {
    const formData = new FormData()

    formData.append('image', image)
    formData.append('filename', filename)

    return api
      .put('user', formData)
      .then((res) => res.data)
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          AlertEvents.emit(
            'currentRegisterError',
            err.response.data.errors[0].message
          )
        } else {
          AlertEvents.emit('currentRegisterError', 'Internal Error')
        }
      })
  }

  public async getUser() {
    return api.get('auth/getuser').then((res) => res.data)
  }
}

export default new UserApi()
