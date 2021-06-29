import { useState, useEffect } from 'react'

import UserRegisteredNow from '../events/UserRegisteredNow'

export function useUserRegisteredNow() {
  const [registeredNow, setRegisteredNow] = useState(false)

  useEffect(() => {
    UserRegisteredNow.on('registeredNow', setRegisteredNow)
    return () => {
      UserRegisteredNow.off('registeredNow', setRegisteredNow)
    }
  }, [])

  return { registeredNow, setRegisteredNow }
}
