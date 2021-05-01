import { CloseButton, Container, Title } from './style'

import { MdClose } from 'react-icons/md'

const Alert: React.FC = () => {
  return (
    <Container>
      <Title>Erro</Title>
      <CloseButton><MdClose /></CloseButton>
    </Container>
  )
}

export default Alert