import { useState, useEffect, useMemo } from 'react'
import AuthResource from '../services/resources/AuthResource'

export function useAuth() {
  const [lastUpdate, setLastUpdate] = useState(0)

  const auth = useMemo(() => {
    return AuthResource.profile || undefined
  }, [lastUpdate])

  const isAuthenticated = useMemo(() => {
    return !!auth
  }, [auth])

  const onProfile = () => {
    setLastUpdate(Date.now())
  }

  useEffect(() => {
    AuthResource.on('profile', onProfile)
    return () => {
      AuthResource.off('profile', onProfile)
    }
  }, [])

  return { auth, isAuthenticated }
}
