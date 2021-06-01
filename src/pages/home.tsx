import { Container } from '../styles/home'

import DefaultMasterPage from '../components/MasterPages/DefaultMasterPage'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

const Home: React.FC = () => {
  return <DefaultMasterPage title="Home">Home</DefaultMasterPage>
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
