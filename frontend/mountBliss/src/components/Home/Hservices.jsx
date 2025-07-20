import React from 'react'
import services1 from '../../assets/gallery/gallery1.jpg'
const Hservices = () => {
  return (
    <>
    <section id="services" className="min-h-screen py-20 bg-transparent text-white px-6 flex flex-col justify-center">
    <h2 className="text-5xl font-bold mb-16 text-center">Our Services</h2>
    <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
      <div className="bg-zinc-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-indigo-600 transition-shadow cursor-pointer">
        <img src={services1} alt="Luxury Rooms" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-3">Luxury Rooms</h3>
          <p className="text-gray-300 leading-relaxed">Spacious and beautifully designed rooms with premium facilities.</p>
        </div>
      </div>
      <div className="bg-zinc-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-indigo-600 transition-shadow cursor-pointer">
        <img src={services1} alt="Fine Dining" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-3">Fine Dining</h3>
          <p className="text-gray-300 leading-relaxed">Gourmet cuisine served in elegant surroundings by top chefs.</p>
        </div>
      </div>
      <div className="bg-zinc-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-indigo-600 transition-shadow cursor-pointer">
        <img src={services1} alt="Spa & Wellness" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-3">Spa & Wellness</h3>
          <p className="text-gray-300 leading-relaxed">Relaxing treatments and therapies for rejuvenation and well-being.</p>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Hservices