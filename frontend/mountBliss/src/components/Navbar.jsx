import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import userIcon from '../assets/userIcon.svg'


const Navbar = () => {
  const [menu,setMenu] = useState(false)
  const menuToggle = ()=> setMenu(!menu)


  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => setShowDropdown(!showDropdown)
  return (
   <>
   <header id='navbar' className='fixed top-0 w-full bg-transparent z-40'>
    <div className="nav-glass px-6">
      <div className="container mx-auto flex item-center justify-center items-center relative py-5 md:py6">

        {/* Menu Button */}
        <button
        onClick={menuToggle} 
        class={`absolute h-10 w-13 left-6  rounded   transition z-50`}>{/* Top line */}
      <span
        className={`absolute left-6 h-[3px] w-6 transform transition-all duration-300 z-50 ease-in-out hover:w-3 
          ${menu ? 'rotate-45 top-3.5 bg-red-500' : 'bg-white top-2'}
        `}
      ></span>

      {/* Middle line */}
      <span
        className={`absolute left-6 h-[3px] w-6 hover:w-3 transition-all duration-400 ease-in-out z-50
          ${menu ? 'opacity-0 bg-red-500' : 'bg-white top-4'}
        `}
      ></span>

      {/* Bottom line */}
      <span
        className={`absolute left-6 h-[3px] w-6 transform transition-all duration-400 ease-in-out z-50 hover:w-3 
          ${menu ? '-rotate-45 top-4 bg-red-500' : 'bg-white top-6'}
        `}
      ></span></button>

        {/* Menu Dropdown */}
        {menu &&(
          
          <div className='fixed text-white left--1 top-0 bg-black w-screen h-screen transform transition-transform duration-300 ease-in-out'>
             <div className={`bg-white w-1/2 h-screen transform transition-transform duration-300 ease-in-out 
  ${menu ? 'translate-x-0' : '-translate-x-full'}`}></div></div>
        )}

        {/* logo */}
        <div className="flex items-center space-x-3"> <img src={logo} alt="logo" className='lg:h-20 md:h-12 h-10 w-auto logo-transition'/></div>

        {/* nav right */}
        <nav className='hidden text-white lg:flex gap-8 text-sm uppercase tracking-wide font-medium absolute right-24'>
          <a href="#hero" className='hover:text-teal-300 transation'>Home</a>
          <a href="/gallery" className='hover:text-teal-300 transation'>Booking</a>
          <a href="/hero" className='hover:text-teal-300 transation'>Contact Us</a>
        </nav>
        {/*  Login Icon*/}
        <button className="text-white hover:text-teal-300 transition absolute right-0" 
        aria-label="Login"
        onClick={toggleDropdown}
        >
          <img 
          src={userIcon} 
          alt="user" 
          className='lg:h-12 md:h-10 h-8 w-auto logo-transition bg-gradient-to-b from-gray-300 via-gray-400 to-gray-800 border-2 rounded-3xl' 
          />
          </button>


          {/* Dropdown for the login */}
          {showDropdown &&(
          <div className="absolute right-0 top-22 w-44 rounded-2xl bg-[#23272F] border border-[#3BA3A3] shadow-2xl z-50 overflow-hidden transition-all">
            <a
              href="/login"
              className="block px-4 py-3 text-white hover:bg-[#2C2F36] transition-all"
            >
              Login
            </a>
            <a
              href="/register"
              className="block px-4 py-3 text-white hover:bg-[#2C2F36] transition-all"
            >
              Register
            </a>
          </div>
                )}
            </div>
          </div>

   </header>
   </>
  )
}

export default Navbar