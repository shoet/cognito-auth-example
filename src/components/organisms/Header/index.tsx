import { useAuthContext } from '@/context/AuthContext'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const LogoutButton = styled.span`
  border-bottom: 1px solid blue;
  cursor: pointer;
  color: blue;
`

const ProfileArea = (props: { user: User; logout: () => void }) => {
  const { user, logout } = props
  return (
    <>
      <span style={{ marginRight: '10px' }}>こんにちは、{user.email}さん</span>
      <LogoutButton onClick={logout}>ログアウト</LogoutButton>
    </>
  )
}

export const Header = () => {
  const { user, logout } = useAuthContext()
  return (
    <Container>
      <h3>AppTitle</h3>
      <div>{user && <ProfileArea user={user} logout={logout} />}</div>
    </Container>
  )
}
