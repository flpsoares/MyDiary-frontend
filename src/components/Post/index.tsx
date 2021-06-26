import { Container, Header, Content } from './style'

import Image from 'next/image'
import Router from 'next/router'

interface PostProps {
  post: App.Post
}

const Post: React.FC<PostProps> = ({ post }) => {
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
        <span onClick={goToProfile}>{post.user.username}</span>
      </Header>
      <Content>
        <span>{post.content}</span>
        {post.image && <img src={post.image.url} alt={post.image.filename} />}
      </Content>
    </Container>
  )
}

export default Post
