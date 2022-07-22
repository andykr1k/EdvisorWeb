import * as React from 'react'
import { motion } from "framer-motion"
import { Header, Footer, ContactPage, HomePage, ProfilePage, SignInPage} from './components'

import './App.css'

function App() {

  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
