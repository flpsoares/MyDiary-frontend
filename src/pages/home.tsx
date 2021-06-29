import { GetServerSideProps } from 'next'

import DefaultMasterPage from '../components/MasterPages/DefaultMasterPage'

import { Container, NewPostButton, PostArea } from '../styles/home'
import Post from '../components/Post'

import { HiPlus } from 'react-icons/hi'
import { useContext, useEffect } from 'react'
import { ModalContext } from '../contexts/ModalContext'
import PostApi from '../services/api/PostApi'
import PostsCollection from '../services/collections/PostsCollection'
import { useCollection } from '../hooks/useCollection'
import AuthResource from '../services/resources/AuthResource'

const Home: React.FC = () => {
  const { openPostModal } = useContext(ModalContext)

  const { items } = useCollection(PostsCollection)

  useEffect(() => {
    PostApi.list()
  }, [])

  return (
    <DefaultMasterPage title="Home">
      <Container>
        <NewPostButton onClick={openPostModal}>
          <HiPlus size={20} />
          <span>New Post</span>
        </NewPostButton>
        <PostArea>
          {items.map((post) => {
            return <Post key={post.id} post={post} />
          })}
        </PostArea>
      </Container>
    </DefaultMasterPage>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const redirect = await AuthResource.redirectIfNotAuthenticated(ctx)

  if (redirect) {
    return { redirect }
  }

  return {
    props: {}
  }
}

export default Home
