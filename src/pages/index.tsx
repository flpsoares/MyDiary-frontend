import Head from 'next/head'
import Content from '../components/Content'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import { Container } from '../styles/index'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>MyDiary | Home</title>
      </Head>
      <Header />
      <SideBar />
      <Content />
    </Container>
  )
}
