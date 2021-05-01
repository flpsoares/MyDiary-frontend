import { useState, createContext, ReactNode } from 'react'  

interface AlertContextData {
  alertIsOpen: boolean
  openAlert: () => void
  closeAlert: () => void
}

interface AlertContextProviderProps {
  children: ReactNode
}

export const AlertContext = createContext({} as AlertContextData)

export function AlertContextProvider({children}: AlertContextProviderProps) {
  const [alertIsOpen, setAlertIsOpen] = useState(true)

  const openAlert = () => {
    setAlertIsOpen(true)
  }

  const closeAlert = () => {
    setAlertIsOpen(false)
  }

  return (
    <AlertContext.Provider value={{alertIsOpen, openAlert, closeAlert }}>
      {children}
    </AlertContext.Provider>
  )
}