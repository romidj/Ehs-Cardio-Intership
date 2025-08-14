import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Doctors from './pages/Doctors'
import PRdv from './pages/PRdv'
import Login from './pages/admin/Login'
import Todayrdv from './pages/admin/Todayrdv'
import Waitingrdv from './pages/admin/Waitingrdv'
import Dashboard from './pages/admin/Dashboard'
import Dossier from './pages/dossier'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medecins" element={<Doctors />} />
        <Route path="/rdv" element={<PRdv />} />
        <Route path="/dossier" element={<Dossier />} />




        <Route path="/login" element={<Login />} />
        <Route path="/rdv_today" element={<Todayrdv />} />
        <Route path="/rdv_en_attente" element={<Waitingrdv />} />
        <Route path="/dashboard" element={<Dashboard />} />



      </Routes>
    </Router>
  )
}


export default App