import { useContext, useRef, useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { ModalContext } from '../../contexts/ModalContext'

import CustomInput from '../CustomInput'
import { Container, Box, Title, AuthButton, CloseButton } from './style'

import { useAlertError } from '../../hooks/useAlertError'

import ReactLoading from 'react-loading'

import Alert from '../../components/Alert'
import AlertEvents from '../../events/AlertEvents'
import UserApi from '../../services/api/UserApi'
import AuthResource from '../../services/resources/AuthResource'
import axios, { AxiosError } from 'axios'

export const RegisterModal: React.FC = () => {
  const { closeRegisterModal, openChooseModal } = useContext(ModalContext)

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
    UserApi.create(data)
      .then(() => {
        AuthResource.logIn(data)
        openChooseModal()
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          AlertEvents.emit(
            'currentRegisterError',
            err.response.data.errors[0].message
          )
        } else {
          AlertEvents.emit('currentRegisterError', 'Internal Error')
        }
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <Container>
      <Box
        onSubmit={handleSubmit}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <CloseButton onClick={closeRegisterModal}>
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
