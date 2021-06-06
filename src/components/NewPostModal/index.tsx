import {
  Container,
  Box,
  Header,
  CloseButton,
  Profile,
  Content,
  SubmitButton,
  SubmitArea,
  SubHeader,
  SendFile
} from './style'

import { MdClose } from 'react-icons/md'
import { BsImage } from 'react-icons/bs'
import ReactTooltip from 'react-tooltip'

import Image from 'next/image'
import { useContext, useEffect, useRef, useState } from 'react'
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

  const [hasFile, setHasFile] = useState(false)

  const verifyFile = () => {
    // @ts-ignore
    if (document.getElementById('file').files.length > 0) {
      setHasFile(true)
    } else {
      setHasFile(false)
    }
  }

  const deleteFile = () => {
    // @ts-ignore
    document.getElementById('file').value = ''
    setHasFile(false)
  }

  return (
    <Container>
      <Box initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
        <Header>Create Post</Header>
        <SubHeader>
          <Profile>
            <Image src="/assets/profile.jpg" alt="profile" width={50} height={50} />
            <span>{user.username}</span>
          </Profile>
          <SendFile>
            <label onClick={verifyFile} data-tip="Foto" htmlFor="file">
              <BsImage size={30} />
            </label>
            <ReactTooltip textColor="white" backgroundColor="gray" effect="solid" />
            {hasFile && (
              <MdClose
                style={{ cursor: 'pointer' }}
                onClick={deleteFile}
                size={22}
              />
            )}
            <input onChange={verifyFile} type="file" id="file" />
          </SendFile>
        </SubHeader>
        <Content ref={contentRef} placeholder="Type what you're thinking" />
        <SubmitArea>
          <SubmitButton onClick={handleSubmit}>Post</SubmitButton>
        </SubmitArea>
        <CloseButton onClick={closeModalPost} type="button">
          <MdClose size={22} />
        </CloseButton>
      </Box>
    </Container>
  )
}

export default NewPostModal
