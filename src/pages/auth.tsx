import Head from 'next/head'

import { Container, Title, Box, AuthButton, Question } from '../styles/AuthStyled'

import CustomInput from '../components/CustomInput'
import RegisterModal from '../components/RegisterModal'
import { RegisterModalContext } from '../contexts/RegisterModalContext'
import { useContext } from 'react'

export const Auth: React.FC = () => {
  const { openModal, isOpen } = useContext(RegisterModalContext)

  return (
    <Container>
      <Head>
        <title>MyDiary | Login</title>
      </Head>
      {isOpen  && <RegisterModal />}
      <Title>Sign In</Title>
      <Box>
        <CustomInput label="Username" />
        <CustomInput label="Password" />
        <AuthButton>Sign In</AuthButton>
        <Question>
          <span>New on MyDiary?</span>
          <button onClick={openModal}>Create account</button>
        </Question>
      </Box>
    </Container>
  )
}

export default Auth