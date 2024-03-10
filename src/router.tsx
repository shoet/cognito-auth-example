import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import App from './App'
import { AuthPage } from './components/pages/AuthPage'
import { HomePage } from './components/pages/HomePage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="login" element={<AuthPage />} />
      <Route path="home" element={<HomePage />} />
    </Route>
  )
)

export const Routes = () => <RouterProvider router={router} />
