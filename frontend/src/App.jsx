import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/Pages/HomePage/HomePage';
import Team from './components/Pages/Team/Team';
import Contact from './components/Pages/Contact/Contact';
import LoginPage from './components/Pages/Login/LoginPage';
import SignUpPage from './components/Pages/SignUP/SignUpPage';
import BookingMain from './components/Pages/BookingPage/BookingMain';
import UserProfile from "./components/Pages/UserProfile/UserProfile";
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext'
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <AuthProvider>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/profile/:id" element={<UserProfile />} />
            <Route path="/book/:id" element={<BookingMain />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
      </ThemeProvider>
  );
}

export default App;
