import { useState, useEffect } from 'react'

import AlertError from '../events/AlertEvents'

export function useAlertError() {
  const [message, setMessage] = useState<string>()

  useEffect(() => {
    AlertError.on('currentError', setMessage)
    return () => {
      AlertError.off('currentError', setMessage)
    }
  }, [])

  return {message}
}