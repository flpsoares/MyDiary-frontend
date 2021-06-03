import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import DefaultMasterPage from '../components/MasterPages/DefaultMasterPage'

import { Container, NewPostButton, PostArea } from '../styles/home'
import Post from '../components/Post'

import { HiPlus } from 'react-icons/hi'
import { useContext, useEffect, useState } from 'react'
import { PostContext } from '../contexts/PostContext'
import UserApi from '../services/api/UserApi'
import UsersCollection from '../services/collections/UsersCollection'
import { useCollection } from '../hooks/useCollection'

const Home: React.FC = () => {
  const { openModalPost } = useContext(PostContext)

  // const [users, setUsers] = useState<App.User[]>([])
  const { items } = useCollection(UsersCollection)

  useEffect(() => {
    UserApi.list()
  }, [])

  return (
    <DefaultMasterPage title="Home">
      <Container>
        <NewPostButton onClick={openModalPost}>
          <HiPlus size={20} />
          <span>New Post</span>
        </NewPostButton>
        <PostArea>
          {items.map((user) => {
            return <Post key={user.id} user={user} />
          })}
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
