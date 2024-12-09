import './App.css'
import Header from './components/Header/Header'
import { LoginPage } from './components/Pages/Login/LoginPage'
import { SignUpPage } from './components/Pages/SignUP/SignUpPage'
import Footer from './components/Footer/Footer'

import { User } from 'lucide-react'
function App() {


  return (
    <>
      <Header></Header>
<LoginPage></LoginPage>
      <Footer></Footer>
    </>
  )
}

export default App