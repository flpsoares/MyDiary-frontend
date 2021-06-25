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
import { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react'
import { PostContext } from '../../contexts/PostContext'
import { AuthContext } from '../../contexts/AuthContext'
import PostApi from '../../services/api/PostApi'

const NewPostModal: React.FC = () => {
  const { closeModalPost } = useContext(PostContext)
  const { user } = useContext(AuthContext)

  const contentRef = useRef<HTMLTextAreaElement>()
  const fileRef = useRef<HTMLInputElement>()

  const [srcImage, setSrcImage] = useState('')

  const verifyFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const [file] = Array.from(fileRef.current.files)
      setSrcImage(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (contentRef.current.value.length > 0 && fileRef.current.value.length > 0) {
      const filename = fileRef.current.files[0].name
      const image = fileRef.current.files[0]

      PostApi.createWithImage({
        content: contentRef.current.value,
        image: image,
        filename: filename
      }).then(() => {
        closeModalPost()
      })
    }

    if (contentRef.current.value.length > 0 && fileRef.current.value.length === 0) {
      PostApi.create({ content: contentRef.current.value }).then(() => {
        closeModalPost()
      })
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
            <input
              onChange={verifyFile}
              ref={fileRef}
              id="file"
              name="file"
              type="file"
              accept="image/png, image/jpg"
            />
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
          <SubmitButton type="submit" onClick={handleSubmit}>
            Post
          </SubmitButton>
        </SubmitArea>
        <CloseButton onClick={closeModalPost} top="12px" right="12px" type="button">
          <MdClose size={22} />
        </CloseButton>
      </Box>
    </Container>
  )
}

export default NewPostModal
