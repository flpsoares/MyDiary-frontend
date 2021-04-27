import { useContext } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { RegisterModalContext } from '../../contexts/RegisterModalContext'

import CustomInput from '../CustomInput'
import { Container, Box, Title, AuthButton, CloseButton } from './style'

export const RegisterModal: React.FC = () => {
  const { closeModal } = useContext(RegisterModalContext)

  return (
    <Container>
      <Box>
        <CloseButton onClick={closeModal}>
          <RiCloseLine />
        </CloseButton>
        <Title>Create account on MyDiary</Title>
        <div>
          <CustomInput label="Username" />
          <CustomInput label="Password" isPassword forgotPassword />
          <CustomInput label="Confirm password" isPassword />
          <CustomInput label="Email" />
        </div>
        <AuthButton>Sign Up</AuthButton>
      </Box>
    </Container>
  )
}

export default RegisterModal