import { Container } from './style'

import Link from 'next/link'
import UserApi from '../../../../services/api/UserApi'

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
      <button type="button" onClick={UserApi.logOut}>
        Log out
      </button>
    </Container>
  )
}

export default SideBar
