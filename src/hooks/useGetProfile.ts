import { useEffect, useState } from 'react'
import GetProfileEvents from '../events/GetProfileEvents'

export function useGetProfile() {
  const [user, setUser] = useState('')

  useEffect(() => {
    GetProfileEvents.on('getUserProfile', setUser)
    return () => {
      GetProfileEvents.off('getUserProfile', setUser)
    }
  }, [])

  return { user }
}
