// import { useState } from 'react'
import './App.css'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
function App() {
 

  return (
    <div className='top-div'>
   <Navbar />
    <main className='main-content'>

     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/favourites" element={<Favourites />} />
     </Routes>
    </main>
    </div>
  )
}

export default App
