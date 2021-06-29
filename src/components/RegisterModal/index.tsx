import { useContext, useRef, useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { RegisterModalContext } from '../../contexts/RegisterModalContext'

import CustomInput from '../CustomInput'
import { Container, Box, Title, AuthButton, CloseButton } from './style'

import { useAlertError } from '../../hooks/useAlertError'

import ReactLoading from 'react-loading'

import Alert from '../../components/Alert'
import AlertEvents from '../../events/AlertEvents'
import { AuthContext } from '../../contexts/AuthContext'

export const RegisterModal: React.FC = () => {
  const { closeModal } = useContext(RegisterModalContext)
  const { signUp } = useContext(AuthContext)

  const { registerErrorMessage } = useAlertError()

  const [isLoading, setIsLoading] = useState(false)

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

    setIsLoading(true)
    signUp(data).finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <Container>
      <Box
        onSubmit={handleSubmit}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
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
        <AuthButton type="submit">Sign Up</AuthButton>
      </Box>
      {isLoading && <ReactLoading />}
    </Container>
  )
}

export default RegisterModal
