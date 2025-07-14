import React from 'react'

import './App.css'
import AppRouter from './router'
import Home from './pages/Home'

function App() {

  return (
    
    <>
      <AppRouter/>
      <div>
        <Navabar/>
      <Home/>
      </div>
    </>
  )
}

export default App
