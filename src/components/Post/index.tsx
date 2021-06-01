import { Container, Header, Content } from './style'

import Image from 'next/image'
import Router from 'next/router'

const Post: React.FC = () => {
  const goToProfile = () => {
    Router.push('/profile')
  }

  return (
    <Container>
      <Header>
        <Image
          onClick={goToProfile}
          src="/assets/profile.jpg"
          alt="profile"
          width={50}
          height={50}
        />
        <span onClick={goToProfile}>Username</span>
      </Header>
      <Content>
        <span></span>
      </Content>
    </Container>
  )
}

export default Post
