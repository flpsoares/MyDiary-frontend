import {
  Container,
  Header,
  HeaderProfile,
  ImageProfile,
  Content
} from '../styles/profile'

import { useRouter } from 'next/router'

import DefaultMasterPage from '../components/MasterPages/DefaultMasterPage'
import { GetServerSideProps } from 'next'

import ReactTooltip from 'react-tooltip'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { AiFillEdit } from 'react-icons/ai'
import AuthResource from '../services/resources/AuthResource'
import { useAuth } from '../hooks/useAuth'
import { useCollection } from '../hooks/useCollection'

import Post from '../components/Post'
import PostApi from '../services/api/PostApi'
import PostsCollection from '../services/collections/PostsCollection'

const Profile: React.FC = () => {
  const { auth } = useAuth()

  const [isHover, setIsHover] = useState(false)

  const { items } = useCollection(PostsCollection)

  const router = useRouter()

  useEffect(() => {
    PostApi.list()
  }, [])

  return (
    <DefaultMasterPage title="Profile">
      <Container>
        <Header>
          <HeaderProfile>
            <div>
              <ImageProfile>
                <Image
                  onMouseEnter={() => setIsHover(true)}
                  onMouseOut={() => setIsHover(false)}
                  src={auth?.image ? auth.image.url : '/assets/profile.jpg'}
                  width={140}
                  height={140}
                />
                {isHover && <span>Edit photo</span>}
              </ImageProfile>
              <div>
                <span>{auth?.username}</span>
                <span>{auth?.email}</span>
              </div>
            </div>
            <button data-tip="Editar">
              <AiFillEdit size={36} />
              <ReactTooltip
                textColor="white"
                backgroundColor="gray"
                effect="solid"
              />
            </button>
          </HeaderProfile>
        </Header>
        <Content>{router?.query.slug}</Content>
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

export default Profile
