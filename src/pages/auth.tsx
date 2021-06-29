import { useAlertError } from '../hooks/useAlertError'
import { useContext, useRef, useState } from 'react'
import { Container, Title, Box, AuthButton, Question } from '../styles/AuthStyled'

import ReactLoading from 'react-loading'

import Head from 'next/head'

import CustomInput from '../components/CustomInput'
import RegisterModal from '../components/RegisterModal'
import Alert from '../components/Alert'

import { RegisterModalContext } from '../contexts/RegisterModalContext'
import { AuthContext } from '../contexts/AuthContext'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { AnimatePresence } from 'framer-motion'

export const Auth: React.FC = () => {
  const { loginErrorMessage } = useAlertError()

  const { openModal, isOpen } = useContext(RegisterModalContext)
  const { signIn } = useContext(AuthContext)

  const [isLoading, setIsLoading] = useState(false)

  const usernameRef = useRef<HTMLInputElement>()
  const passwordRef = useRef<HTMLInputElement>()

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    }

    signIn(data).finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <Container>
      <Head>
        <title>MyDiary | Login</title>
      </Head>
      <AnimatePresence>{isOpen && <RegisterModal />}</AnimatePresence>
      <Title>Sign In</Title>
      <Box>
        {loginErrorMessage && <Alert message={loginErrorMessage} />}
        <form onSubmit={handleSubmit} method="post">
          <CustomInput inputRef={usernameRef} label="Username" />
          <CustomInput
            inputRef={passwordRef}
            label="Password"
            isPassword
            forgotPassword
          />
          <AuthButton type="submit">Sign In</AuthButton>
          <Question>
            <span>New on MyDiary?</span>
            <button type="button" onClick={openModal}>
              Create account
            </button>
          </Question>
        </form>
      </Box>
      {isLoading && <ReactLoading />}
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'mydiary-token': token } = parseCookies(ctx)

  if (token) {
    return {
      redirect: {
        destination: '/home',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default Auth
