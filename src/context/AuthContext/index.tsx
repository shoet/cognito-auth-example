import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'

type AuthContextData = {
  user?: User
  login: (email: string, password: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextData>({
  login: () => {},
  logout: () => {},
})

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = (props: PropsWithChildren) => {
  const { children } = props
  const [user, setUser] = useState<User>()

  const loginFunc = (email: string, password: string) => {
    console.log(email)
    console.log(password)
    const testUser: User = {
      email: 'test@example.com',
    }
    setUser(testUser)
  }

  const logoutFunc = () => {
    setUser(undefined)
  }

  const data: AuthContextData = {
    user,
    login: loginFunc,
    logout: logoutFunc,
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export const AuthGuard = () => {
  const { user } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (user === undefined) {
      navigate('/login')
    }
  })
}
