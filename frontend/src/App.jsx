import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Home from './pages/Doctors'
import Home from './pages/Login'
import Home from './pages/About'
import Home from './pages/Contact'
import Home from './pages/MyAppointments'
import Home from './pages/MyFrofile'
import Home from './pages/Appointment'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />          <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App