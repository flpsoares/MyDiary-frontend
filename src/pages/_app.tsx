import GlobalStyle from '../styles/global'

import { RegisterModalProvider } from '../contexts/RegisterModalContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RegisterModalProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </RegisterModalProvider>
    </>
  )
}

export default MyApp
