import * as React from 'react'
import { motion } from "framer-motion"
import { Routes, Route } from 'react-router-dom'
import { Header, Footer, ContactPage, HomePage, ProfilePage, SignInPage, AboutPage, UserHome, FAQ} from './components'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './config/firebase';
import './App.css'
import GridLoader from 'react-spinners/GridLoader'
function App() {
  const [user, loading, error] = useAuthState(auth);
  const [ load, setLoad] = React.useState(false);

  React.useEffect(()=>{
    setLoad(true);
    setTimeout(()=>{
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
    { load ? (
      <div className='flex justify-center items-center h-screen'>
        <GridLoader size={30} color={'#8AA3F3'} loading={load} />
      </div>
    ) : (
      <div>
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
      </div>
  )
}

export default App
