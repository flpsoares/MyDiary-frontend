import { Container } from '../styles/settings'
import DefaultMasterPage from '../components/MasterPages/DefaultMasterPage'
import { GetServerSideProps } from 'next'
import AuthResource from '../services/resources/AuthResource'

const Settings: React.FC = () => {
  return <DefaultMasterPage title="Settings">Settings</DefaultMasterPage>
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

export default Settings
