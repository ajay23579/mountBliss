import React from 'react'
import heroVideo from '../assets/videoplayback.mp4'
import Button from './Button'

const Hero = (props) => {
  return (
    <>
    <div className='relative h-screen w-full flex flex-col items-center justify-center overflow-hidden text-center px-6'>
            <video
          autoPlay
          loop
          muted 
          playsInline
          
          src={heroVideo} className=' absolute inset-0 object-cover w-full h-full brightness-[0.6] contrast-[1.1]'></video>

        {/* hero overlay */}
        <div className='relative z-10 items-center flex flex-col gap-6'>
            <h2
            className='text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white'>{props.text}</h2>
            <p 
            className='text-lg md:text-xl text-gray-300 max-w-3xl"
       '>{props.description}</p>
       <Button text="Book Now" href="/booking" />
        </div>
        </div>
    
    </>
  )
}

export default Hero