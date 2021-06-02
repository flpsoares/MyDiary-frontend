import { createContext, ReactNode, useState } from 'react'

interface PostContextData {
  modalPostIsOpen: boolean
  openModalPost: () => void
  closeModalPost: () => void
}

interface PostContextProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextData)

export function PostContextProvider({ children }: PostContextProviderProps) {
  const [modalPostIsOpen, setModalPostIsOpen] = useState(false)

  const openModalPost = () => {
    setModalPostIsOpen(true)
  }

  const closeModalPost = () => {
    setModalPostIsOpen(false)
  }

  return (
    <PostContext.Provider value={{ modalPostIsOpen, openModalPost, closeModalPost }}>
      {children}
    </PostContext.Provider>
  )
}
