import { Container, Header, HeaderProfile, ImageProfile } from '../styles/profile'

import DefaultMasterPage from '../components/MasterPages/DefaultMasterPage'
import { GetServerSideProps } from 'next'

import ReactTooltip from 'react-tooltip'

import { useContext, useState } from 'react'
import Image from 'next/image'

import { AiFillEdit } from 'react-icons/ai'
import AuthResource from '../services/resources/AuthResource'
import { useAuth } from '../hooks/useAuth'

const Profile: React.FC = () => {
  const { auth } = useAuth()

  const [isHover, setIsHover] = useState(false)

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
