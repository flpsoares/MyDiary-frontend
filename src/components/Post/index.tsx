import { Container, Header, Content, Delete } from './style'

import Image from 'next/image'
import Router from 'next/router'
import { api } from '../../services/api'
import UserApi from '../../services/api/UserApi'

interface PostProps {
  user: App.User
}

const Post: React.FC<PostProps> = ({ user }) => {
  const goToProfile = () => {
    Router.push('/profile')
  }

  const deleteUser = () => {
    UserApi.delete(user)
  }

  return (
    <Container>
      <Header>
        {/* <Image
          onClick={goToProfile}
          src="/assets/profile.jpg"
          alt="profile"
          width={50}
          height={50}
        /> */}
        <span onClick={goToProfile}>{user.username}</span>
      </Header>
      <Content>
        <span></span>
      </Content>
      <Delete onClick={deleteUser}>x</Delete>
    </Container>
  )
}

export default Post
