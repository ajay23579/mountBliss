import React from 'react'
import logo from '../assets/logo.svg'
import userIcon from '../assets/userIcon.svg'


const Navbar = () => {
  return (
   <>
   <header id='navbar' className='fixed top-0 w-full bg-transparent z-50'>
    <div className="nav-glass px-6">
      <div className="container mx-auto flex item-center justify-center items-center relative py-5 md:py6">
        <button
        id='menuToggle' 
        class="absolute lg:text-4xl md:text-3xl left-6 text-white text-2xl px-2 py-2 rounded shadow-lg hover:bg-gray-200 transition z-50">&#9776;</button>

        {/* logo */}
        <div className="flex items-center space-x-3"> <img src={logo} alt="logo" className='lg:h-20 md:h-12 h-10 w-auto logo-transition'/></div>

        {/* nav right */}
        <nav className='hidden text-white lg:flex gap-8 text-sm uppercase tracking-wide font-medium absolute right-24'>
          <a href="#hero" className='hover:text-teal-300 transation'>Home</a>
          <a href="/gallery" className='hover:text-teal-300 transation'>Booking</a>
          <a href="/hero" className='hover:text-teal-300 transation'>Contact Us</a>
        </nav>
        {/*  Login Icon*/}
        <a href="login.html" class="text-white hover:text-teal-300 transition absolute right-0" aria-label="Login">
          <img src={userIcon} alt="login" className='lg:h-12 md:h-10 h-8 w-auto logo-transition bg-gradient-to-b from-gray-300 via-gray-400 to-gray-800 border-2 rounded-3xl' />
          </a>
      </div>
    </div>

   </header>
   </>
  )
}

export default Navbar