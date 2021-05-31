import { createContext, ReactNode } from 'react'
import AlertEvents from '../events/AlertEvents'
import api from '../services/api'
import axios, { AxiosError } from 'axios'

interface AuthContextData {
  isAuthenticated: boolean
  signUp: ({ username, password, email }: User) => Promise<void>
}

interface AuthContextProviderProps {
  children: ReactNode
}

interface User {
  username: string
  password: string
  email: string
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthContextProviderProps) {
  const isAuthenticated = false

  async function signUp({ username, password, email }: User) {
    await api
      .post('user', {
        username,
        password,
        email
      })
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

  return (
    <AuthContext.Provider value={{ isAuthenticated, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}
