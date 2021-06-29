import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'
import { parseCookies } from 'nookies'

import { api } from '../services/api'

import UserApi from '../services/api/UserApi'

type User = Partial<App.User>

interface AuthContextData {
  isAuthenticated: boolean
  user: User
  setUser: (User: User) => void
}

interface AuthContextProviderProps {
  children: ReactNode
}
export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>(null)

  const isAuthenticated = useMemo(() => !!user, [user])

  useEffect(() => {
    const { 'mydiary-token': token } = parseCookies()

    if (token) {
      api.defaults.headers.Authorization = token
      UserApi.getUser().then((user) => setUser(user))
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
