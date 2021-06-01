import Head from 'next/head'
import Content from './Content'
import Header from './Header'
import SideBar from './SideBar'

import { Container } from './style'

interface DefaultMasterPageProps {
  title: string
}

export const DefaultMasterPage: React.FC<DefaultMasterPageProps> = ({
  title,
  children
}) => {
  return (
    <Container>
      <Head>
        <title>MyDiary | {title}</title>
      </Head>
      <Header />
      <SideBar />
      <Content children={children} />
    </Container>
  )
}

export default DefaultMasterPage
