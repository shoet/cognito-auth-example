import { login } from '@/service/login'
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
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextData>({
  login: async () => {},
  logout: async () => {},
})

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = (props: PropsWithChildren) => {
  const { children } = props
  const [user, setUser] = useState<User>()

  const loginFunc = async (email: string, password: string) => {
    console.log(email)
    console.log(password)
    const testUser: User = {
      email: 'test@example.com',
    }
    try {
      await login(email, password)
      setUser(testUser)
    } catch (err) {
      console.log('### auth error')
      console.log(err)
    }
  }

  const logoutFunc = async () => {
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
