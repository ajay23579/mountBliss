import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'


const Home = () => {
  return (
    <>
        <div className="main bg-gradient-to-b from-gray-950 via-black to-gray-900">
          <Navbar />
          <Hero text="Discover Mount Bliss" description="An elevated escape nestled in the Himalayan heights."/>
          </div>
        
      </>

  )
}

export default Home