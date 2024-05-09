import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'


import Home from './components/pages/Home/Home'
import Card from './components/pages/Card/Card'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'






function App() {
 const[showLogin,setShowLogin]=useState(false)

  return (
    <>
       {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Card />} />
          
        </Routes>
         
        
       
        
       

      </div>
      <Footer/>

    </>
  )
}

export default App
