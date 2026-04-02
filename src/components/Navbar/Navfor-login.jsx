import React from 'react'
import Sidebar from './Sidebar'
import RNav from './RNav'
import LoginNav from './LoginNav'

const Navforlogin = () => {
  return (
    <>
    <header id="navbar" className="fixed top-0 w-full bg-transparent z-50">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between py-4 md:py-6">
          
          {/* Left: Sidebar or Nav Toggle */}
          <Sidebar />

          {/* Center: Logo */}
          <div className="flex-1 flex justify-center">
            
          </div>

          {/* Right: RNav for large screens, Login always visible */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex">
              <RNav />
            </div>
          </div>

        </div>
      </div>
    </header>
    </>
  )
}

export default Navforlogin