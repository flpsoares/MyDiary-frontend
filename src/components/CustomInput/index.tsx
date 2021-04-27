import { Container, Header, InputArea } from './style'

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useState } from 'react'

interface CustomInputProps {
  label: string
  forgotPassword?: boolean
  isPassword?: boolean
  icon?: boolean
}

const CustomInput: React.FC<CustomInputProps> = ({ label, forgotPassword, isPassword, icon }) => {
  const [visiblePassword, setVisiblePassword] = useState(false)

  const toggleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword)
  }

  return (
    <Container>
      <Header>
        <span>{label}</span>
        {forgotPassword && <button>Forgot password?</button>}
      </Header>
      {
        isPassword 
          ? 
          <InputArea>
            <input type={visiblePassword ? 'text' : 'password'}/>
            <button onClick={toggleVisiblePassword}>
              {
                visiblePassword 
                  ? <AiOutlineEye />
                  : <AiOutlineEyeInvisible />
              }
            </button>
          </InputArea>
          :
            <InputArea>
              <input type="text"/>
            </InputArea>
      }
    </Container>
  )
}

export default CustomInput