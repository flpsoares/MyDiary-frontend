import { Container } from '../styles/settings'
import DefaultMasterPage from '../components/MasterPages/DefaultMasterPage'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

const Settings: React.FC = () => {
  return <DefaultMasterPage title="Settings">Settings</DefaultMasterPage>
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

export default Settings
