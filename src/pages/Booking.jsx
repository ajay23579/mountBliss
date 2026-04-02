import React from 'react';
// import booking from '../assets/Leonardo_Kino_XL_A_breathtaking_drone_view_of_a_luxurious_moun_3 1.png'

const Booking = () => {
  return (
    <div className="relative h-screen bg-center">
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-right p-8 max-w-md">
        <h1 className="text-4xl font-bold mb-2">Chill in Style</h1>
        <h2 className="text-2xl font-semibold mb-2">Sleep in Comfort</h2>
        <h3 className="text-xl mb-6">Mount Bliss.</h3>
        <div className="space-x-4">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Book Now
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded">
            View Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
