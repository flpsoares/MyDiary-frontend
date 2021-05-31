import { useState, createContext, ReactNode } from 'react'
import AlertEvents from '../events/AlertEvents'

interface RegisterModalContextData {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

interface RegisterModalProviderProps {
  children: ReactNode
}

export const RegisterModalContext = createContext({} as RegisterModalContextData)

export function RegisterModalProvider({ children }: RegisterModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    AlertEvents.emit('currentRegisterError', undefined)
  }

  return (
    <RegisterModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </RegisterModalContext.Provider>
  )
}
