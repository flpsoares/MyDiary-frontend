import { useState, useEffect } from 'react'

import AlertError from '../events/AlertEvents'

export function useAlertError() {
  const [loginErrorMessage, setLoginErrorMessage] = useState<string>()
  const [registerErrorMessage, setRegisterErrorMessage] = useState<string>()

  useEffect(() => {
    AlertError.on('currentLoginError', setLoginErrorMessage)
    AlertError.on('currentRegisterError', setRegisterErrorMessage)
    return () => {
      AlertError.off('currentLoginError', setLoginErrorMessage)
      AlertError.off('currentRegisterError', setRegisterErrorMessage)
    }
  }, [])

  return { loginErrorMessage, registerErrorMessage }
}
