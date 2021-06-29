import { useEffect } from 'react'
import Main from '../../../pages'
import AuthResource from '../../../services/resources/AuthResource'

interface DefaultMasterPageProps {
  title: string
}

export const DefaultMasterPage: React.FC<DefaultMasterPageProps> = ({
  title,
  children
}) => {
  useEffect(() => {
    AuthResource.loginByLocalToken()
  }, [])
  return <Main title={title} children={children} />
}

export default DefaultMasterPage
