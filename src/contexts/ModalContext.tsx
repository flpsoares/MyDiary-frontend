import { useState, createContext, ReactNode } from 'react'
import AlertEvents from '../events/AlertEvents'

interface ModalContextData {
  modalRegisterIsOpen: boolean
  openRegisterModal: () => void
  closeRegisterModal: () => void

  modalPostIsOpen: boolean
  openPostModal: () => void
  closePostModal: () => void

  modalChooseIsOpen: boolean
  openChooseModal: () => void
  closeChooseModal: () => void
}

interface ModalProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextData)

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalRegisterIsOpen, setModalRegisterIsOpen] = useState(false)
  const [modalPostIsOpen, setModalPostIsOpen] = useState(false)
  const [modalChooseIsOpen, setModalChooseIsOpen] = useState(false)

  // Register
  const openRegisterModal = () => {
    setModalRegisterIsOpen(true)
  }

  const closeRegisterModal = () => {
    setModalRegisterIsOpen(false)
    AlertEvents.emit('currentRegisterError', undefined)
  }

  // Post
  const openPostModal = () => {
    setModalPostIsOpen(true)
  }

  const closePostModal = () => {
    setModalPostIsOpen(false)
  }

  // Choose
  const openChooseModal = () => {
    setModalChooseIsOpen(true)
  }

  const closeChooseModal = () => {
    setModalChooseIsOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{
        modalRegisterIsOpen,
        openRegisterModal,
        closeRegisterModal,
        modalPostIsOpen,
        openPostModal,
        closePostModal,
        modalChooseIsOpen,
        openChooseModal,
        closeChooseModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
