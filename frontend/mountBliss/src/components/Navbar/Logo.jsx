import React from 'react'
import logo from '../../assets/logo.svg'

const Logo = () => {
  return (
    <>
    <div className="flex items-center space-x-3"> <img src={logo} alt="logo" className='lg:h-20 md:h-12 h-10 w-auto logo-transition'/></div>
    </>
  )
}

export default Logo