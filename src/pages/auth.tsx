import { useContext, useRef } from 'react'
import { Container, Title, Box, AuthButton, Question } from '../styles/AuthStyled'

import Head from 'next/head'


import CustomInput from '../components/CustomInput'
import RegisterModal from '../components/RegisterModal'
import Alert from '../components/Alert'

import api from '../services/api'

import { RegisterModalContext } from '../contexts/RegisterModalContext'
import { AlertContext } from '../contexts/AlertContex'

export const Auth: React.FC = () => {
  const { alertIsOpen, openAlert } = useContext(AlertContext)

  const { openModal, isOpen } = useContext(RegisterModalContext)

  const usernameRef = useRef<HTMLInputElement>()
  const passwordRef = useRef<HTMLInputElement>()

  function handleSubmit(e) {
    e.preventDefault()

    // api.post('auth', {
    //   username: usernameRef.current.value,
    //   password: passwordRef.current.value
    // })

  }

  return (
    <Container>
      <Head>
        <title>MyDiary | Login</title>
      </Head>
      { alertIsOpen && <Alert /> }
      { isOpen  && <RegisterModal /> }
      <Title>Sign In</Title>
      <Box>
        {/* <form method="post"> */}
          <CustomInput inputRef={usernameRef} label="Username" />
          <CustomInput inputRef={passwordRef} label="Password" isPassword forgotPassword />
          <AuthButton onClick={openAlert}>Sign In</AuthButton>
          <Question>
            <span>New on MyDiary?</span>
            <button type="button" onClick={openModal}>Create account</button>
          </Question>
        {/* </form> */}
      </Box>
    </Container>
  )
}

export default Auth