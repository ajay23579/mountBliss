import React from 'react'

const BookingForm = () => {
  return (
    <>
      <section className="min-h-screen bg-transparent py-16 px-6 max-w-3xl mx-auto rounded-3xl shadow-2xl backdrop-blur-md bg-opacity-40 text-white mb-20 flex flex-col justify-center">
    <h2 className="text-4xl font-extrabold mb-8 text-center flex items-center justify-center gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z"/>
      </svg>
      Book Your Stay
    </h2>
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" id="bookingForm" novalidate>
      <div className="flex flex-col">
        <label for="name" className="mb-2 font-semibold flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A9 9 0 1119 12"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          Full Name
        </label>
        <input type="text" id="name" placeholder="Your full name" className="rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 px-4 py-3 transition" required />
      </div>

      <div className="flex flex-col">
        <label for="email" className="mb-2 font-semibold flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12v.01M12 12v.01M8 12v.01M21 16.5a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 16.5v-9A2.5 2.5 0 015.5 5h13a2.5 2.5 0 012.5 2.5v9z"/>
          </svg>
          Email Address
        </label>
        <input type="email" id="email" placeholder="you@example.com" className="rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 px-4 py-3 transition" required />
      </div>

      <div className="flex flex-col">
        <label for="checkin" className="mb-2 font-semibold flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z"/>
          </svg>
          Check-In
        </label>
        <input type="date" id="checkin" className="rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 px-4 py-3 transition appearance-none" required />
      </div>

      <div className="flex flex-col">
        <label for="checkout" className="mb-2 font-semibold flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z"/>
          </svg>
          Check-Out
        </label>
        <input type="date" id="checkout" className="rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 px-4 py-3 transition appearance-none" required />
      </div>

      <div className="flex flex-col md:col-span-2">
        <label for="guests" className="mb-2 font-semibold flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 7a4 4 0 118 0 4 4 0 01-8 0zm5 7h.01M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2"/>
          </svg>
          Guests
        </label>
        <select id="guests" className="rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 px-4 py-3 transition" required>
          <option value="" disabled selected>Select number of guests</option>
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
          <option>4+ Guests</option>
        </select>
      </div>

      <button type="submit" id="submitBtn" className="md:col-span-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed">
        Book Now
      </button>
    </form>
    <p id="loginMessage" className="mt-4 text-center text-red-400 font-semibold hidden">
      Please sign in to book your stay.
      <button id="signInBtn" className="ml-2 underline text-indigo-400 hover:text-indigo-600" type="button">Sign In</button>
    </p>
  </section>
    </>
  )
}

export default BookingForm