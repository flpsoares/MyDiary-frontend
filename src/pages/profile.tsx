import { Container, Header, HeaderProfile } from '../styles/profile'

import DefaultMasterPage from '../components/MasterPages/DefaultMasterPage'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import ReactTooltip from 'react-tooltip'

import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Image from 'next/image'

import { AiFillEdit } from 'react-icons/ai'

const Profile: React.FC = () => {
  const { user } = useContext(AuthContext)

  return (
    <DefaultMasterPage title="Profile">
      <Container>
        <Header>
          <HeaderProfile>
            <div>
              <Image src="/assets/profile.jpg" width={140} height={140} />
              <div>
                <span>{user?.username}</span>
                <span>{user?.email}</span>
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

export default Profile
