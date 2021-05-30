import { useState, createContext, ReactNode } from 'react'

interface RouteContexData {
  isHome: boolean
  isProfile: boolean
  isSettings: boolean
  showHome: () => void
  showProfile: () => void
  showSettings: () => void
}

interface RouteContextProps {
  children: ReactNode
}

export const RouteContext = createContext({} as RouteContexData)

export function RouteContextProvider({ children }: RouteContextProps) {
  const [isHome, setIsHome] = useState(false)
  const [isProfile, setIsProfile] = useState(false)
  const [isSettings, setIsSettings] = useState(false)

  const showHome = () => {
    setIsHome(true)
    setIsProfile(false)
    setIsSettings(false)
  }
  const showProfile = () => {
    setIsProfile(true)
    setIsHome(false)
    setIsSettings(false)
  }
  const showSettings = () => {
    setIsSettings(true)
    setIsHome(false)
    setIsProfile(false)
  }

  return (
    <RouteContext.Provider
      value={{ isHome, isProfile, isSettings, showHome, showProfile, showSettings }}
    >
      {children}
    </RouteContext.Provider>
  )
}
