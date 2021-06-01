import { useContext, useRef } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { RegisterModalContext } from '../../contexts/RegisterModalContext'

import CustomInput from '../CustomInput'
import { Container, Box, Title, AuthButton, CloseButton } from './style'

import { useAlertError } from '../../hooks/useAlertError'

import Alert from '../../components/Alert'
import AlertEvents from '../../events/AlertEvents'
import { AuthContext } from '../../contexts/AuthContext'

export const RegisterModal: React.FC = () => {
  const { closeModal } = useContext(RegisterModalContext)
  const { signUp } = useContext(AuthContext)

  const { registerErrorMessage } = useAlertError()

  const usernameRef = useRef<HTMLInputElement>()
  const passwordRef = useRef<HTMLInputElement>()
  const confirmPasswordRef = useRef<HTMLInputElement>()
  const emailRef = useRef<HTMLInputElement>()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return AlertEvents.emit('currentRegisterError', 'The passwords are different')
    }

    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value
    }

    signUp(data)
  }

  return (
    <Container>
      <Box>
        <CloseButton onClick={closeModal}>
          <RiCloseLine />
        </CloseButton>
        <Title>Create account on MyDiary</Title>
        {registerErrorMessage && <Alert message={registerErrorMessage} />}
        <div>
          <CustomInput inputRef={usernameRef} label="Username" />
          <CustomInput inputRef={passwordRef} label="Password" isPassword />
          <CustomInput
            inputRef={confirmPasswordRef}
            label="Confirm password"
            isPassword
          />
          <CustomInput inputRef={emailRef} label="Email" />
        </div>
        <AuthButton onClick={handleSubmit}>Sign Up</AuthButton>
      </Box>
    </Container>
  )
}

export default RegisterModal
