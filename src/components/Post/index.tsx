import { Container, Header, Content, Image } from './style'

import Route from 'next/router'
import { useGetProfile } from '../../hooks/useGetProfile'
import GetProfileEvents from '../../events/GetProfileEvents'

interface PostProps {
  post: App.Post
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { user } = useGetProfile()

  const getProfile = async () => {
    GetProfileEvents.emit('getUserProfile', post.user.username)
    Route.push(`/${user}`)
  }

  return (
    <Container>
      <Header>
        <Image
          onClick={getProfile}
          src={post.user.image ? post.user.image.url : '/assets/profile.jpg'}
          alt="profile"
        />
        <span onClick={getProfile}>{post.user.username}</span>
      </Header>
      <Content>
        <span>{post.content}</span>
        {post.image && <img src={post.image.url} alt={post.image.filename} />}
      </Content>
    </Container>
  )
}

export default Post
