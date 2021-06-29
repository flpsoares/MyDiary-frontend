import { useState, useEffect } from 'react'

import AlertError from '../events/AlertEvents'

export function useAlertError() {
  const [loginErrorMessage, setLoginErrorMessage] = useState<string>()
  const [registerErrorMessage, setRegisterErrorMessage] = useState<string>()

  useEffect(() => {
    AlertError.on('currentLoginError', (message) => setLoginErrorMessage(message))
    AlertError.on('currentRegisterError', (message) =>
      setRegisterErrorMessage(message)
    )
    return () => {
      AlertError.off('currentLoginError', (message) => setLoginErrorMessage(message))
      AlertError.off('currentRegisterError', (message) =>
        setRegisterErrorMessage(message)
      )
    }
  }, [])

  return { loginErrorMessage, registerErrorMessage }
}
