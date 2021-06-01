import Head from 'next/head'

import Header from '../components/MasterPages/DefaultMasterPage/Header'
import SideBar from '../components/MasterPages/DefaultMasterPage/SideBar'
import Content from '../components/MasterPages/DefaultMasterPage/Content'

import { Container } from '../styles/main'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

interface MainProps {
  title: string
}

export const Main: React.FC<MainProps> = ({ title, children }) => {
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

export default Main
