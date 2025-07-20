import React from 'react'
import logo from '../assets/logo.svg'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Navforlogin from '../components/Navbar/Navfor-login';

const Register = () => {
  motion
  return (
    <>
      <Navforlogin />
    <div className='min-h-screen font-[Montserrat] relative overflow-hidden'>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Logo */}
        <div className='mb-4'>
          <img src={logo} alt="Logo" className='h-20 w-auto mx-auto' />
        </div>
        {/* Animated Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#23272F] rounded-[24px] shadow-[0_4px_32px_rgba(0,0,0,0.7)] p-10 min-w-[340px] flex flex-col items-center"
        >
          {/* Avatar Icon */}
          <div className="text-[3rem] text-[#F5F6FA] mb-4">
            <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
            </svg>
          </div>

          {/* Form */}
          <form className="w-full">
            {/* Username Input */}
            <div className="flex items-center w-full mb-4 bg-[#2C2F36] border-[1.5px] border-[#3BA3A3] rounded-xl px-4">
              <span className="text-[#B0B3B8] text-[1.2rem] mr-2">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Username"
                required
                className="bg-transparent border-none outline-none text-[#F5F6FA] text-base py-3 w-full placeholder:text-[#B0B3B8]"
              />
            </div>
               <div className="flex items-center w-full mb-4 bg-[#2C2F36] border-[1.5px] border-[#3BA3A3] rounded-xl px-4">
              <span className="text-[#B0B3B8] text-[1.2rem] mr-2">
               <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
  <path d="M22 6l-10 7L2 6" />
</svg>

              </span>
              <input
                type="email"
                placeholder="Email"
                required
                className="bg-transparent border-none outline-none text-[#F5F6FA] text-base py-3 w-full placeholder:text-[#B0B3B8]"
              />
            </div>

            {/* Password Input */}
            <div className="flex items-center w-full mb-4 bg-[#2C2F36] border-[1.5px] border-[#3BA3A3] rounded-xl px-4">
              <span className="text-[#B0B3B8] text-[1.2rem] mr-2">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="5" y="11" width="14" height="8" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <input
                type="password"
                placeholder="Password"
                required
                className="bg-transparent border-none outline-none text-[#F5F6FA] text-base py-3 w-full placeholder:text-[#B0B3B8]"
              />
            </div>
           <p className="text-sm text-gray-500">Already have an account?{" "}
              <Link to="/login" className="text-[#3BA3A3] hover:text-[#318c8c] font-medium transition-colors duration-200">
              Login
              </Link>
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#3BA3A3] text-white rounded-xl py-3 text-lg font-semibold mt-2 hover:bg-[#2D8C8C] transition-colors duration-200"
            >
              Register
            </button>
          </form>
        </motion.div>
      </div>
    </div>
    </>
  )
}

export default Register