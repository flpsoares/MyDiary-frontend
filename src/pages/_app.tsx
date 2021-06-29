import GlobalStyle from '../styles/global'

import { ModalProvider } from '../contexts/ModalContext'

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ModalProvider>
  )
}

export default MyApp
