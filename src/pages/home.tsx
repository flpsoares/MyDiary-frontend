import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import DefaultMasterPage from '../components/MasterPages/DefaultMasterPage'

import { Container, NewPostButton, PostArea } from '../styles/home'
import Post from '../components/Post'

import { HiPlus } from 'react-icons/hi'

const Home: React.FC = () => {
  return (
    <DefaultMasterPage title="Home">
      <Container>
        <NewPostButton>
          <HiPlus size={20} />
          <span>New Post</span>
        </NewPostButton>
        <PostArea>
          <Post />
        </PostArea>
      </Container>
    </DefaultMasterPage>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'mydiary-token': token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default Home
