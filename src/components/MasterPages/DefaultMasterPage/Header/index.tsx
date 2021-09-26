import { Container, Image } from './style'

import Router from 'next/router'
import { useAuth } from '../../../../hooks/useAuth'

export const Header: React.FC = () => {
  const { auth } = useAuth()

  const goToProfile = () => {
    Router.push('/profile')
  }

  return (
    <Container>
      <span>{auth?.username}</span>
      <Image
        onClick={goToProfile}
        src={auth?.image ? auth.image.url : '/assets/profile.jpg'}
        alt="profile"
        width={50}
        height={50}
      />
    </Container>
  )
}
export default Header
