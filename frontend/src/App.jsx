import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/Pages/HomePage/HomePage'
import Team from './components/Pages/Team/Team'
import Contact from './components/Pages/Contact/Contact'
import LoginPage  from './components/Pages/Login/LoginPage'
import SignUpPage  from './components/Pages/SignUP/SignUpPage'
import UserProfile from './components/Pages/UserProfile/UserProfile'
import BookingMain from './components/Pages/BookingPage/BookingMain'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
         <Route path="/" element={<HomePage/>} />
         <Route path="/team" element={<Team/>} />
         <Route path="/contact" element={<Contact></Contact>} />
         <Route path="/auth/login" element={<LoginPage/>} />
         <Route path="/auth/signup" element={<SignUpPage/>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </>
  )
}

export default App