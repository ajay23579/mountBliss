import React, { useState } from 'react'
import userIcon from '../../assets/userIcon.svg'
import { Link } from 'react-router-dom'

const LoginNav = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const toggleDropdown = () => setShowDropdown(!showDropdown)
  return (
   <>
        <button className="text-white hover:text-teal-300 transition absolute right-10 top-5" aria-label="Login" onClick={toggleDropdown}>
            <img src={userIcon} alt="user" className='lg:h-12 md:h-10 h-8 w-auto logo-transition bg-gradient-to-b from-gray-300 via-gray-400 to-gray-800 border-2 rounded-3xl' />
        </button>



        {/* Dropdown for the login */}
        {showDropdown &&(
            <div className="absolute right-0 top-22 w-44 rounded-2xl bg-[#23272F] border border-[#3BA3A3] shadow-2xl z-50 overflow-hidden transition-all">
                <Link  to="/login" className="block px-4 py-3 text-white hover:bg-[#2C2F36] transition-all">Login</Link>
                <Link href="/register" className="block px-4 py-3 text-white hover:bg-[#2C2F36] transition-all">Register</Link>
            </div>
        )}
   </>
  )
}

export default LoginNav