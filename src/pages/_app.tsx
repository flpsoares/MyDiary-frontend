import GlobalStyle from '../styles/global'

import { RegisterModalProvider } from '../contexts/RegisterModalContext'
import { AlertContextProvider } from '../contexts/AlertContex'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RegisterModalProvider>
        <AlertContextProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </AlertContextProvider>
      </RegisterModalProvider>
    </>
  )
}

export default MyApp
