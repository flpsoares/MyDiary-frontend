import GlobalStyle from '../styles/global'

import { AuthProvider } from '../contexts/AuthContext'

import { RegisterModalProvider } from '../contexts/RegisterModalContext'
import { AlertContextProvider } from '../contexts/AlertContex'
import { PostContextProvider } from '../contexts/PostContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <RegisterModalProvider>
          <AlertContextProvider>
            <PostContextProvider>
              <GlobalStyle />
              <Component {...pageProps} />
            </PostContextProvider>
          </AlertContextProvider>
        </RegisterModalProvider>
      </AuthProvider>
    </>
  )
}

export default MyApp
