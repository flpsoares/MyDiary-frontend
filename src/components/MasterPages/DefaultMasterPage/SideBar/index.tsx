import { Container } from './style'

import Link from 'next/link'
import AuthResource from '../../../../services/resources/AuthResource'

const SideBar: React.FC = () => {
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
      <button type="button" onClick={() => AuthResource.logOut()}>
        Log out
      </button>
    </Container>
  )
}

export default SideBar
