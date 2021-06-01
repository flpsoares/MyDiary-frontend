import { Container, Header } from './style'

import Image from 'next/image'

const Post: React.FC = () => {
  return (
    <Container>
      <Header>
        <Image src="/assets/profile.jpg" alt="profile" width={50} height={50} />
        <span>Username</span>
      </Header>
    </Container>
  )
}

export default Post
