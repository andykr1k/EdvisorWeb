import * as React from 'react'
import { motion } from "framer-motion"
import { Routes, Route } from 'react-router-dom'
import { Header, Footer, ContactPage, HomePage, ProfilePage, SignInPage, AboutPage, UserHome, FAQ} from './components'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './config/firebase';
import './App.css'

function App() {
  const [user, loading, error] = useAuthState(auth);


  return (
    <div className="App">
        <Header />
        <Routes>
          {user ? 
          <Route path="/" element={<UserHome />} />
          :
          <Route path="/" element={<HomePage />} />
          }
          <Route path="/contact" element={<ContactPage />} />
          {user ? 
          <Route path="/profile" element={<ProfilePage />} />
          :
          <Route path="/profile" element={<SignInPage />} />
          }
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App
