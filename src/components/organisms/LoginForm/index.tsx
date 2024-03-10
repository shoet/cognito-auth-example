import { useAuthContext } from '@/context/AuthContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const TextField = styled.input`
  display: block;
  type: text;
  border-radius: 5px;
  outline: none;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Spacer = styled.div<{ height?: number }>`
  height: ${({ height }) => height || 10}px;
`

export const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useAuthContext()

  const navigate = useNavigate()

  const handleOnClick = () => {
    login(username, password)
    navigate('/home')
  }

  return (
    <Container>
      <TextField
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Spacer />
      <TextField
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Spacer height={30} />
      <button onClick={handleOnClick}>ログイン</button>
    </Container>
  )
}
