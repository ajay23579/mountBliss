import React from 'react'

import './App.css'
import AppRouter from './router'
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    
    <>
      <AppRouter/>
      <div>
        <Navabar/>
      <Home/>
      <About/>
      </div>
    </>
  )
}

export default App
