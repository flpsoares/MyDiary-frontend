import Main from '../../../pages'

interface DefaultMasterPageProps {
  title: string
}

export const DefaultMasterPage: React.FC<DefaultMasterPageProps> = ({
  title,
  children
}) => {
  return <Main title={title} children={children} />
}

export default DefaultMasterPage
