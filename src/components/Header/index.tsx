import { Container } from './style'

import Image from 'next/image'

export const Header: React.FC = () => {
  return (
    <Container>
      <span>Username</span>
      <button type="button">
        <Image src="/assets/profile.jpg" alt="profile" width={50} height={50} />
      </button>
    </Container>
  )
}

export default Header
