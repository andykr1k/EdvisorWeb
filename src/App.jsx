import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import { 
  Header, 
  Footer, 
  ContactPage, 
  HomePage, 
  ProfilePage, 
  SignInPage, 
  AboutPage, 
  UserHome, 
  FAQ, 
  AddPage, 
  CoursePage, 
  SettingsModal,
  TOSPage,
  PrivacyPage,
  AccessPage,
  ReturnPage,
  TeamPage
} from './components'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './config/firebase';
import GridLoader from 'react-spinners/GridLoader'

function App() {
  const [user, loading, error] = useAuthState(auth);
  const [load, setLoad] = React.useState(false);

  React.useEffect(()=>{
    setLoad(true);
    setTimeout(()=>{
      setLoad(false);
    }, 1250);
  }, []);

  return (
    <div className="App">
    { load ? (
      <div className='grid place-items-center h-screen'>
        <GridLoader size={35} color={'#8AA3F3'} loading={load} />
      </div>
    ) : (
      <div>
        <div className='sticky top-0 z-50'>
          <Header />
        </div>
          <Routes>
            {user ? 
            <Route path="/" element={<UserHome />} />
            :
            <Route path="/" element={<HomePage />} />
            }
            {user ? 
            <Route path="/profile" element={<ProfilePage />} />
            :
            <Route path="/profile" element={<SignInPage />} />
            }
            {user ? 
            <Route path="/courses" element={<CoursePage />} />
            :
            <Route path="/courses" element={<HomePage />} />
            }
            {user ? 
              <Route path="/settings" element={<SettingsModal />} />
            :
            <Route path="/settings" element={<HomePage />} />
            }
            <Route path="/tos" element={<TOSPage />} />
            <Route path="/access" element={<AccessPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/return" element={<ReturnPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
          <div className='bottom-0 z-50'>
          <Footer />
        </div>
        </div>
      )
    }
      </div>
  )
}


export default App
