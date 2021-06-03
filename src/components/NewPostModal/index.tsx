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
import { useContext, useRef } from 'react'
import { PostContext } from '../../contexts/PostContext'
import { AuthContext } from '../../contexts/AuthContext'
import PostApi from '../../services/api/PostApi'

const NewPostModal: React.FC = () => {
  const { closeModalPost } = useContext(PostContext)
  const { user } = useContext(AuthContext)

  const contentRef = useRef<HTMLTextAreaElement>()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (contentRef.current.value.length > 0) {
      PostApi.create({ content: contentRef.current.value }).then(() => {
        closeModalPost()
      })
    }
  }

  return (
    <Container>
      <Box initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
        <Header>Create Post</Header>
        <CloseButton onClick={closeModalPost} type="button">
          <MdClose size={22} />
        </CloseButton>
        <Profile>
          <Image src="/assets/profile.jpg" alt="profile" width={50} height={50} />
          <span>{user.username}</span>
        </Profile>
        <Content ref={contentRef} placeholder="Type what you're thinking" />
        <SubmitArea>
          <SubmitButton onClick={handleSubmit}>Post</SubmitButton>
        </SubmitArea>
      </Box>
    </Container>
  )
}

export default NewPostModal
