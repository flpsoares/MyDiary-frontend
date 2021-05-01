import Head from 'next/head'

import { Container, Title, Box, AuthButton, Question } from '../styles/AuthStyled'

import CustomInput from '../components/CustomInput'
import RegisterModal from '../components/RegisterModal'
import { RegisterModalContext } from '../contexts/RegisterModalContext'
import { useContext, useRef } from 'react'
import api from '../services/api'

export const Auth: React.FC = () => {
  const { openModal, isOpen } = useContext(RegisterModalContext)

  const usernameRef = useRef<HTMLInputElement>()
  const passwordRef = useRef<HTMLInputElement>()

  function handleSubmit(e) {
    e.preventDefault()

    api.post('auth', {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    })
  }

  return (
    <Container>
      <Head>
        <title>MyDiary | Login</title>
      </Head>
      {isOpen  && <RegisterModal />}
      <Title>Sign In</Title>
      <Box>
        <form method="post">
          <CustomInput inputRef={usernameRef} label="Username" />
          <CustomInput inputRef={passwordRef} label="Password" isPassword forgotPassword />
          <AuthButton onClick={handleSubmit}>Sign In</AuthButton>
          <Question>
            <span>New on MyDiary?</span>
            <button type="button" onClick={openModal}>Create account</button>
          </Question>
        </form>
      </Box>
    </Container>
  )
}

export default Auth