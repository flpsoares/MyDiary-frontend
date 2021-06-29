import GlobalStyle from '../styles/global'

import { AuthProvider } from '../contexts/AuthContext'
import { ModalProvider } from '../contexts/ModalContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ModalProvider>
        <AuthProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </AuthProvider>
      </ModalProvider>
    </>
  )
}

export default MyApp
