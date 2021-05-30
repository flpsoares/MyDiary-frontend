import { Container } from './style'

import Link from 'next/link'

const SideBar: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
      <button type="button">Log out</button>
    </Container>
  )
}

export default SideBar
