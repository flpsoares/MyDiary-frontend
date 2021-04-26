import Head from 'next/head'

import { Container, Title, Box, AuthButton, Question } from '../styles/AuthStyled'

import { CustomInput } from '../components/CustomInput'

export const Auth: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>MyDiary | Login</title>
      </Head>
      <Title>Sign In</Title>
      <Box>
        <CustomInput label="Username" />
        <CustomInput label="Password" isPassword />
        <AuthButton>Sign In</AuthButton>
        <Question>
          <span>New on MyDiary?</span>
          <a href="">Create account</a>
        </Question>
      </Box>
    </Container>
  )
}

export default Auth