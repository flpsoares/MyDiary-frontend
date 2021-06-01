import { Container } from '../styles/profile'

import DefaultMasterPage from '../components/MasterPages/DefaultMasterPage'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

const Profile: React.FC = () => {
  return <DefaultMasterPage title="Profile">Profile</DefaultMasterPage>
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
