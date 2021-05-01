import { CloseButton, Container, Title } from './style'

import { MdClose } from 'react-icons/md'
import { useContext } from 'react'
import { AlertContext } from '../../contexts/AlertContex'

const Alert: React.FC = () => {
  const { closeAlert } = useContext(AlertContext)

  return (
    <Container>
      <Title>Erro</Title>
      <CloseButton onClick={closeAlert}>
        <MdClose />
      </CloseButton>
    </Container>
  )
}

export default Alert