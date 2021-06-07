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
  SendFile,
  ImageArea
} from './style'

import { MdClose } from 'react-icons/md'
import { BsImage } from 'react-icons/bs'
import ReactTooltip from 'react-tooltip'

import Image from 'next/image'
import { ChangeEvent, useContext, useRef, useState } from 'react'
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

  const fileRef = useRef<HTMLInputElement>()

  const [srcImage, setSrcImage] = useState('')

  const verifyFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const [file] = Array.from(fileRef.current.files)
      setSrcImage(URL.createObjectURL(file))
    }
  }

  const deleteFile = () => {
    fileRef.current.value = ''
    setSrcImage(undefined)
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
            <label data-tip="Foto" htmlFor="file">
              <BsImage size={30} />
            </label>
            <ReactTooltip textColor="white" backgroundColor="gray" effect="solid" />
            {/* {srcImage && (
              <MdClose
                style={{ cursor: 'pointer' }}
                onClick={deleteFile}
                size={22}
              />
            )} */}
            <input onChange={verifyFile} ref={fileRef} id="file" type="file" />
          </SendFile>
        </SubHeader>
        <Content
          ref={contentRef}
          placeholder={`Type what you're thinking, ${user.username}`}
        />
        {!!srcImage && (
          <ImageArea>
            <img style={{ padding: '20px' }} src={srcImage} width={200} />
            <CloseButton onClick={deleteFile} top="20px" right="20px" type="button">
              <MdClose size={22} />
            </CloseButton>
          </ImageArea>
        )}
        <SubmitArea>
          <SubmitButton onClick={handleSubmit}>Post</SubmitButton>
        </SubmitArea>
        <CloseButton onClick={closeModalPost} top="12px" right="12px" type="button">
          <MdClose size={22} />
        </CloseButton>
      </Box>
    </Container>
  )
}

export default NewPostModal
