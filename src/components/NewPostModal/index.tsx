import {
  Container,
  Box,
  Header,
  CloseButton,
  Profile,
  Content,
  SubmitButton,
  SubmitArea
} from './style'

import { MdClose } from 'react-icons/md'
import Image from 'next/image'
import { useContext } from 'react'
import { PostContext } from '../../contexts/PostContext'

const NewPostModal: React.FC = () => {
  const { closeModalPost } = useContext(PostContext)

  return (
    <Container>
      <Box>
        <Header>Create Post</Header>
        <CloseButton onClick={closeModalPost} type="button">
          <MdClose size={22} />
        </CloseButton>
        <Profile>
          <Image src="/assets/profile.jpg" alt="profile" width={50} height={50} />
          <span>Username</span>
        </Profile>
        <Content placeholder="Type what you're thinking" />
        <SubmitArea>
          <SubmitButton>Post</SubmitButton>
        </SubmitArea>
      </Box>
    </Container>
  )
}

export default NewPostModal
