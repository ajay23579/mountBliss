

// import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './Navbar/Sidebar'
import Logo from './Navbar/Logo'
import RNav from './Navbar/RNav'
import LoginNav from './Navbar/LoginNav'


const Navbar = () => {

  
  return (
   <>
   <header id='navbar' className='fixed top-0 w-full bg-transparent z-40'>
    <div className="nav-glass px-6">
      <div className="container mx-auto flex item-center justify-center items-center relative py-5 md:py6">
        <Sidebar/>
        <Logo height={10}/>
        <RNav/>
        <LoginNav/>
      </div>
    </div>
   </header>
   </>
  )
}

export default Navbar