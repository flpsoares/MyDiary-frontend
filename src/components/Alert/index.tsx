import { CloseButton, Container, Title } from './style'

import AlertError from '../../events/AlertEvents'

import { MdClose } from 'react-icons/md'

interface AlertProps {
  message: string
}

const Alert: React.FC<AlertProps> = ({ message }) => {
  const closeAlert = () => {
    AlertError.emit('currentLoginError', undefined)
    AlertError.emit('currentRegisterError', undefined)
  }

  return (
    <Container>
      <Title>{message}</Title>
      <CloseButton onClick={closeAlert}>
        <MdClose />
      </CloseButton>
    </Container>
  )
}

export default Alert
