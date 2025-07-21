import React from 'react'

const RNav = () => {
  return (
    <>
    <nav className='hidden text-white lg:flex gap-8 text-sm uppercase tracking-wide font-medium absolute right-30 top-9 xl:text-md '>
          <a href="/" className='hover:text-teal-300 transation'>Home</a>
          <a href="/rooms" className='hover:text-teal-300 transation'>Booking</a>
          <a href="/contact" className='hover:text-teal-300 transation'>Contact Us</a>
        </nav>
    </>
  )
}

export default RNav