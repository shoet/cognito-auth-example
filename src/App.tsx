import './App.css'
import { Outlet } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import { Layout } from './components/templates/Layout'

function App() {
  return (
    <AuthContextProvider>
      <Layout>
        <Outlet />
      </Layout>
    </AuthContextProvider>
  )
}

export default App
