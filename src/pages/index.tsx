import Head from 'next/head'

import Header from '../components/MasterPages/DefaultMasterPage/Header'
import SideBar from '../components/MasterPages/DefaultMasterPage/SideBar'
import Content from '../components/MasterPages/DefaultMasterPage/Content'

import { Container } from '../styles/main'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { useContext, useEffect } from 'react'
import Router from 'next/router'
import NewPostModal from '../components/NewPostModal'
import { ModalContext } from '../contexts/ModalContext'
import { AnimatePresence } from 'framer-motion'

interface MainProps {
  title: string
}

export const Main: React.FC<MainProps> = ({ title, children }) => {
  useEffect(() => {
    if (!children) {
      Router.push('/home')
    }
  }, [])

  const { modalPostIsOpen } = useContext(ModalContext)

  return (
    <Container>
      <Head>
        <title>MyDiary | {title}</title>
      </Head>
      <AnimatePresence>{modalPostIsOpen && <NewPostModal />}</AnimatePresence>
      <Header />
      <SideBar />
      <Content children={children} />
    </Container>
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

export default Main
