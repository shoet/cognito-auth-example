import { AuthGuard } from '@/context/AuthContext'

export const HomePage = () => {
  AuthGuard()
  return (
    <>
      <div>HomePage</div>
    </>
  )
}
