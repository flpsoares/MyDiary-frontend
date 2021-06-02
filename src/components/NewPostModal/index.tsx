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

const NewPostModal: React.FC = () => {
  return (
    <Container>
      <Box>
        <Header>Create Post</Header>
        <CloseButton type="button">
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
