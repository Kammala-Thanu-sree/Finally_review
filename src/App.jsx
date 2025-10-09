
import React, { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Admin from './Admin'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'
import Dashboard from './Dashboard'
import Appointments from './Appointments'
import Wellness from './Wellness'
import Records from './Records'
import Login from './Login'
import Admindas from './Admindas'






export default function App() {
  const [count, setCount] = useState(0)

  return (
<div style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student" element={<Student />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/records" element={<Records />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admindas" element={<Admindas />} />
      
      
    </Routes>
    <Footer />
    </div>
  );
}


