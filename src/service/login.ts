import { Config } from '@/config'
import { Amplify } from 'aws-amplify'
import { signIn, signOut } from 'aws-amplify/auth'

export async function login(email: string, password: string) {
  const ampConfig = { Auth: { Cognito: Config.Cognito } }
  Amplify.configure(ampConfig)
  await signIn({ username: email, password: password })
}

export async function logout() {
  const ampConfig = { Auth: { Cognito: Config.Cognito } }
  Amplify.configure(ampConfig)
  await signOut()
}
