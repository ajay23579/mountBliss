import React from 'react'

const RNav = () => {
  return (
    <>
    <nav className='hidden text-white lg:flex gap-8 text-sm uppercase tracking-wide font-medium absolute right-24'>
          <a href="#hero" className='hover:text-teal-300 transation'>Home</a>
          <a href="/gallery" className='hover:text-teal-300 transation'>Booking</a>
          <a href="/hero" className='hover:text-teal-300 transation'>Contact Us</a>
        </nav>
    </>
  )
}

export default RNav