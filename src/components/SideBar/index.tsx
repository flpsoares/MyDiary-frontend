import { Container } from './style'

const SideBar: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
      <button type="button">Log out</button>
    </Container>
  )
}

export default SideBar
