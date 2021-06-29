import { useAlertError } from '../hooks/useAlertError'
import { useContext, useRef, useState } from 'react'
import { Container, Title, Box, AuthButton, Question } from '../styles/AuthStyled'

import ReactLoading from 'react-loading'

import Head from 'next/head'

import CustomInput from '../components/CustomInput'
import RegisterModal from '../components/RegisterModal'
import Alert from '../components/Alert'

import { ModalContext } from '../contexts/ModalContext'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { AnimatePresence } from 'framer-motion'
import ChooseAvatarModal from '../components/ChooseAvatarModal'
import UserApi from '../services/api/UserApi'

import Route from 'next/router'
import AuthResource from '../services/resources/AuthResource'

export const Auth: React.FC = () => {
  const { loginErrorMessage } = useAlertError()

  const { openRegisterModal, modalRegisterIsOpen, modalChooseIsOpen } =
    useContext(ModalContext)

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

    AuthResource.logIn(data)
      .then((res) => {
        if (!modalChooseIsOpen) {
          Route.push('/home')
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <Container>
      <Head>
        <title>MyDiary | Login</title>
      </Head>
      <AnimatePresence>{modalRegisterIsOpen && <RegisterModal />}</AnimatePresence>
      <AnimatePresence>{modalChooseIsOpen && <ChooseAvatarModal />}</AnimatePresence>
      <Title>Sign In</Title>
      <Box>
        {loginErrorMessage && <Alert message={loginErrorMessage} />}
        <form onSubmit={handleSubmit}>
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
            <button type="button" onClick={openRegisterModal}>
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
  return {
    props: {}
  }
}

export default Auth
