import GlobalStyle from '../styles/global'

import { AuthProvider } from '../contexts/AuthContext'

import { RegisterModalProvider } from '../contexts/RegisterModalContext'
import { AlertContextProvider } from '../contexts/AlertContex'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <RegisterModalProvider>
          <AlertContextProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </AlertContextProvider>
        </RegisterModalProvider>
      </AuthProvider>
    </>
  )
}

export default MyApp
