import GlobalStyle from '../styles/global'

import { AuthProvider } from '../contexts/AuthContext'

import { RegisterModalProvider } from '../contexts/RegisterModalContext'
import { PostContextProvider } from '../contexts/PostContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <RegisterModalProvider>
          <PostContextProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </PostContextProvider>
        </RegisterModalProvider>
      </AuthProvider>
    </>
  )
}

export default MyApp
