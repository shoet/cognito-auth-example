import { PropsWithChildren, createContext, useContext, useState } from 'react'

type AuthContextData = {
  user?: User
  login: () => void
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

  const loginFunc = () => {
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
