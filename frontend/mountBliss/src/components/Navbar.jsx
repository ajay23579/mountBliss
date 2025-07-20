

// import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './Navbar/Sidebar'
import Logo from './Navbar/Logo'
import RNav from './Navbar/RNav'
import LoginNav from './Navbar/LoginNav'


const Navbar = () => {

  
  return (
   <>
    <header id="navbar" className="fixed top-0 w-full bg-transparent z-50">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between py-4 md:py-6">
          
          {/* Left: Sidebar or Nav Toggle */}
          <Sidebar />

          {/* Center: Logo */}
          <div className="flex-1 flex justify-center">
            <Logo height={10} />
          </div>

          {/* Right: RNav for large screens, Login always visible */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex">
              <RNav />
            </div>
            <LoginNav />
          </div>

        </div>
      </div>
    </header>
   </>
  )
}

export default Navbar