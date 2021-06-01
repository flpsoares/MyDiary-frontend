import { Container } from './style'

import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'

const SideBar: React.FC = () => {
  const { logOut } = useContext(AuthContext)

  return (
    <Container>
      <ul>
        <Link href="/home">
          <li>Home</li>
        </Link>
        <Link href="/profile">
          <li>Profile</li>
        </Link>
        <Link href="/settings">
          <li>Settings</li>
        </Link>
      </ul>
      <button type="button" onClick={logOut}>
        Log out
      </button>
    </Container>
  )
}

export default SideBar
