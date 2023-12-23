import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import Webinar from './pages/Webinar'
import Equity from './pages/Equity'
import Business from './pages/Business'
// import components 
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Copyright from './components/Copyright'
// import aos  (animate on scoll)
import Aos from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  // aos initialization
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,

    })
  })

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='/main-event' element={<Webinar />}/>
        <Route path='/equity-research-competition' element={<Equity />}/>
        <Route path='/business-case-competition' element={<Business />}/>
      </Routes>
      <Footer />
      <Copyright />
    </Router>
  )
}

export default App