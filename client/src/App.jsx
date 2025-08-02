import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Doctors from './pages/Doctors'
import PRdv from './pages/PRdv'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medecins" element={<Doctors />} />
        <Route path="/rdv" element={<PRdv />} />


      </Routes>
    </Router>
  )
}


export default App