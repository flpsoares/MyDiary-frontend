import { Container, Header, InputArea } from './style'

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { MutableRefObject, useState } from 'react'

interface CustomInputProps {
  label: string
  forgotPassword?: boolean
  isPassword?: boolean
  inputRef?: MutableRefObject<HTMLInputElement>
}

const CustomInput: React.FC<CustomInputProps> = ({ label, forgotPassword, isPassword, inputRef }) => {
  const [visiblePassword, setVisiblePassword] = useState(false)

  const toggleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword)
  }

  return (
    <Container>
      <Header>
        <span>{label}</span>
        {forgotPassword && <button type="button">Forgot password?</button>}
      </Header>
      {
        isPassword 
          ? 
          <InputArea>
            <input ref={inputRef} type={visiblePassword ? 'text' : 'password'}/>
            <button type="button" onClick={toggleVisiblePassword}>
              {
                visiblePassword 
                  ? <AiOutlineEye />
                  : <AiOutlineEyeInvisible />
              }
            </button>
          </InputArea>
          :
            <InputArea>
              <input ref={inputRef} type="text"/>
            </InputArea>
      }
    </Container>
  )
}

export default CustomInput