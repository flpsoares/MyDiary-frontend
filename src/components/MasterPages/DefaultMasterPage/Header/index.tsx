import { Container } from './style'

import Image from 'next/image'
import { useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'

export const Header: React.FC = () => {
  const { user } = useContext(AuthContext)

  return (
    <Container>
      <span>{user ? user.username : 'Username'}</span>
      <button type="button">
        <Image src="/assets/profile.jpg" alt="profile" width={50} height={50} />
      </button>
    </Container>
  )
}

export default Header
