import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rooms from './pages/Rooms.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Rooms />
    </div>
    
    </>
  )
}

export default App
