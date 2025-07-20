import React from 'react'
import intro1 from '../../assets/hotel1.jpg'
import intro2 from '../../assets/hotel2.jpg'
const Intro = () => {
  return (
    <>
    <section className="min-h-screen bg-transparent flex items-center px-6 py-16">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 items-center">



      <div className="flex flex-col justify-start space-y-6">
        <img src={intro1} alt="Hotel Front" className="w-full rounded-3xl shadow-2xl object-cover max-h-[350px]" />
      </div>



      
      <div className="text-center text-white max-w-lg mx-auto space-y-8">
        <h2 className="text-5xl font-extrabold leading-tight flex items-center justify-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM5.5 19a3.5 3.5 0 017 0v.5a3 3 0 01-7 0v-.5zM16.5 19a3.5 3.5 0 017 0v.5a3 3 0 01-7 0v-.5z"/>
          </svg>
          Welcome to Mount Bliss
        </h2>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          Nestled in the heart of nature, Mount Bliss offers a serene and luxurious escape from the everyday. Immerse yourself in comfort, fine dining, and breathtaking surroundings.
        </p>
        <a href="#services" className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition">
          Discover Our Services
        </a>
      </div>

      
      <div className="flex flex-col justify-end space-y-6">
        <img src={intro2} alt="Hotel Interior" className="w-full rounded-3xl shadow-2xl object-cover max-h-[350px]" />
      </div>
    </div>
  </section>
    </>
  )
}

export default Intro