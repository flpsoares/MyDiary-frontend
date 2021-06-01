import { createContext, ReactNode, useEffect, useState } from 'react'
import AlertEvents from '../events/AlertEvents'
import { api } from '../services/api'
import axios, { AxiosError } from 'axios'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'

interface AuthContextData {
  isAuthenticated: boolean
  user: User
  signUp: ({ username, password, email }: User) => Promise<void>
  signIn: ({ username, password }: User) => Promise<void>
  logOut: () => void
}

interface AuthContextProviderProps {
  children: ReactNode
}

interface User {
  username: string
  password: string
  email?: string
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user

  useEffect(() => {
    const { 'mydiary-token': token } = parseCookies()

    if (token) {
      api.defaults.headers.Authorization = token
      setProfile()
    }
  }, [])

  async function signUp({ username, password, email }: User) {
    await api
      .post('user', {
        username,
        password,
        email
      })
      // .then(() => Router.push('/home'))
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

    const data = {
      username: username,
      password: password
    }

    signIn(data)
    Router.push('/home')
  }

  async function setProfile() {
    return api
      .get('auth/getuser')
      .then((res) => res.data)
      .then((user) => setUser(user))
  }

  async function signIn({ username, password }: User) {
    const user = {
      username,
      password
    }

    await api
      .post('auth', {
        username,
        password
      })
      .then((res) => {
        api.defaults.headers.Authorization = `Bearer ${res.data.token}`
      })
      .then(() => {
        setUser(user)
        Router.push('/home')

        setCookie(undefined, 'mydiary-token', api.defaults.headers.Authorization, {
          maxAge: 60 * 60 * 1 // 1 hour
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

  async function logOut() {
    destroyCookie(undefined, 'mydiary-token')
    Router.push('/auth')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signUp, signIn, user, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}
