export const Config = {
  Cognito: {
    userPoolId: import.meta.env.VITE_USER_POOL_ID,
    userPoolClientId: import.meta.env.VITE_POOL_APP_CLIENT_ID,
    identityPoolId: import.meta.env.VITE_ID_POOL_ID,
  },
}
