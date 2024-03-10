import { Header } from '@/components/organisms/Header'
import { PropsWithChildren } from 'react'

export const Layout = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <>
      <Header />
      {children}
    </>
  )
}
