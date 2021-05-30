import { Container } from './style'

import Link from 'next/link'

const SideBar: React.FC = () => {
  return (
    <Container>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/profile">
          <li>Profile</li>
        </Link>
        <Link href="/settings">
          <li>Settings</li>
        </Link>
      </ul>
      <button type="button">Log out</button>
    </Container>
  )
}

export default SideBar
