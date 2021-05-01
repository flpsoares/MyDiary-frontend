import { useContext, useRef } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { RegisterModalContext } from '../../contexts/RegisterModalContext'

import CustomInput from '../CustomInput'
import { Container, Box, Title, AuthButton, CloseButton } from './style'

import api from '../../services/api'

export const RegisterModal: React.FC = () => {
  const { closeModal } = useContext(RegisterModalContext)

  const usernameRef = useRef<HTMLInputElement>()
  const passwordRef = useRef<HTMLInputElement>()
  const confirmPasswordRef = useRef<HTMLInputElement>()
  const emailRef = useRef<HTMLInputElement>()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(passwordRef.current.value != confirmPasswordRef.current.value) {
      return alert('Passwords are different')
    }

    await api.post('user', {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value
    })

  }

  return (
    <Container>
      <Box>
        <CloseButton onClick={closeModal}>
          <RiCloseLine />
        </CloseButton>
        <Title>Create account on MyDiary</Title>
        <div>
          <CustomInput inputRef={usernameRef} label="Username" />
          <CustomInput inputRef={passwordRef} label="Password" isPassword />
          <CustomInput inputRef={confirmPasswordRef} label="Confirm password" isPassword />
          <CustomInput inputRef={emailRef} label="Email" />
        </div>
        <AuthButton onClick={handleSubmit}>Sign Up</AuthButton>
      </Box>
    </Container>
  )
}

export default RegisterModal