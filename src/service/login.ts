import { Config } from '@/config'
import { Amplify } from 'aws-amplify'
import { signIn, signOut } from 'aws-amplify/auth'

export async function login(email: string, password: string) {
  const ampConfig = {
    Auth: {
      Cognito: {
        userPoolId: Config.AWS_USER_POOL_ID,
        userPoolClientId: Config.AWS_POOL_APP_CLIENT_ID,
        identityPoolId: Config.AWS_ID_POOL_ID,
      },
    },
  }
  console.log(ampConfig)
  Amplify.configure(ampConfig)
  await signIn({ username: email, password: password })
}
