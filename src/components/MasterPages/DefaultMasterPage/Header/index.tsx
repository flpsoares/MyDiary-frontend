import { Container } from './style'

import Image from 'next/image'
import { useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'
import Router from 'next/router'

export const Header: React.FC = () => {
  const { user } = useContext(AuthContext)

  const goToProfile = () => {
    Router.push('/profile')
  }

  return (
    <Container>
      <span>{user?.username}</span>
      <Image
        onClick={goToProfile}
        src={user?.image ? user.image.url : '/assets/profile.jpg'}
        // src="/assets/profile.jpg"
        alt="profile"
        width={50}
        height={50}
      />
    </Container>
  )
}
export default Header
