import { Container, Box, Title, ProfileImage, ChooseButtonArea } from './style'

import { ChangeEvent, useRef, useState } from 'react'

import { BsImage } from 'react-icons/bs'

import Route from 'next/router'
import UserApi from '../../services/api/UserApi'

const ChooseAvatarModal: React.FC = () => {
  const fileRef = useRef<HTMLInputElement>()
  const [srcImage, setSrcImage] = useState('')

  const deleteFile = () => {
    fileRef.current.value = ''
    setSrcImage(undefined)
  }

  const verifyFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const [file] = Array.from(fileRef.current.files)
      if (file !== undefined) {
        return setSrcImage(URL.createObjectURL(file))
      }
      deleteFile()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const image = fileRef.current.files[0]
    const filename = fileRef.current.files[0].name

    UserApi.setAvatar(image, filename).then(() => Route.push('/home'))
  }

  const moveToHome = () => {
    Route.push('/home')
  }

  return (
    <Container>
      <Box initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
        <Title>Want to choose a profile picture now?</Title>
        <ProfileImage>
          <label data-tip="Foto" htmlFor="file">
            {!srcImage ? (
              <BsImage size={50} />
            ) : (
              <img src={srcImage} width={140} height={140} />
            )}
          </label>
          <input
            onChange={verifyFile}
            ref={fileRef}
            id="file"
            name="file"
            type="file"
            accept="image/png, image/jpg"
          />
        </ProfileImage>
        <ChooseButtonArea>
          <button
            onClick={handleSubmit}
            disabled={!srcImage}
            children="Yes, this photo was amazing"
          />
          <button onClick={moveToHome} children="No, I will choose a photo later" />
        </ChooseButtonArea>
      </Box>
    </Container>
  )
}

export default ChooseAvatarModal
