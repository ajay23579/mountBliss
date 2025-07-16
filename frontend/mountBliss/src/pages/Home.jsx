import React from 'react'
import Navbar from '../components/Navbar'
import hero_img from '../assets/image 1.png'

const Home = () => {
  return (
    <>
    <div>
        <Navbar/>
      </div>
      <img src={hero_img} alt="hero_image" className='w-screen h-screen'/>
      </>
  )
}

export default Home