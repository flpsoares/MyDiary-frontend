import { Container } from './style'

interface CustomInputProps {
  label: string
  isPassword?: boolean
}

export const CustomInput: React.FC<CustomInputProps> = ({ label, isPassword }) => {

  return (
    <Container>
      <div>
        <span>{label}</span>
        {isPassword && <button>Forgot password?</button>}
      </div>
      <input type="text"/>
    </Container>
  )
}

export default CustomInput