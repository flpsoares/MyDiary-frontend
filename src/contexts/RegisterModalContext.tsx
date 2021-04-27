import { useState, createContext, ReactNode } from 'react'

interface RegisterModalContextData {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

interface RegisterModalProviderProps {
  children: ReactNode
}

export const RegisterModalContext = createContext({} as RegisterModalContextData)

export function RegisterModalProvider({children}: RegisterModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <RegisterModalContext.Provider value={{isOpen, openModal, closeModal}}>
      {children}
    </RegisterModalContext.Provider>
  )
}