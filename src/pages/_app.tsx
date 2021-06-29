import GlobalStyle from '../styles/global'

import { AuthProvider } from '../contexts/AuthContext'
import { ModalProvider } from '../contexts/ModalContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <ModalProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ModalProvider>
      </AuthProvider>
    </>
  )
}

export default MyApp
