import React, { useState } from "react";
import { motion } from "framer-motion";

import deluxeImg from "../assets/deluxe.jpg";
import suiteImg from "../assets/suite.jpg";
import standardImg from "../assets/standard.jpg";
import familyImg from "../assets/family.jpg";
import executiveImg from "../assets/executive.jpg";

const Rooms = () => {
  const [selectedRoomId, setSelectedRoomId] = useState(null);

  const roomsData = [
    {
      id: 1,
      type: "Deluxe Room",
      description: "Mountain view, free Wi-Fi, complimentary breakfast, spacious interior.",
      price: "Rs. 3,500/night",
      features: ["Free Wi-Fi", "Breakfast included", "32” LED TV", "Balcony", "Room service"],
      image: deluxeImg,
    },
    {
      id: 2,
      type: "Suite",
      description: "Private balcony, lounge access, king-size bed, minibar, and bathrobe set.",
      price: "Rs. 6,200/night",
      features: ["Minibar", "Private lounge", "King-size bed", "Balcony", "Luxury bathrobes"],
      image: suiteImg,
    },
    {
      id: 3,
      type: "Standard Room",
      description: "Budget-friendly room with clean design, essential amenities, and Wi-Fi.",
      price: "Rs. 2,000/night",
      features: ["Free Wi-Fi", "Air Conditioning", "Work desk", "TV", "Clean interior"],
      image: standardImg,
    },
    {
      id: 4,
      type: "Family Room",
      description: "Two queen beds, spacious setting, ideal for families with kids.",
      price: "Rs. 4,500/night",
      features: ["Two queen beds", "Extra space", "Child-safe furniture", "Mini fridge", "Wi-Fi"],
      image: familyImg,
    },
    {
      id: 5,
      type: "Executive Room",
      description: "Business-class comfort with work desk, fast internet, and city view.",
      price: "Rs. 5,000/night",
      features: ["High-speed internet", "Work desk", "City view", "Coffee maker", "LED TV"],
      image: executiveImg,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white font-[Montserrat] py-16 px-6 flex flex-col items-center">
      <h2 className="text-5xl font-serif font-bold text-center text-[#3BA3A3] mb-6 tracking-wide">
        Rooms at Hotel Mount Bliss
      </h2>
      <p className="text-center text-gray-400 mb-12 max-w-xl text-lg">
        Browse our beautifully designed rooms and find your perfect stay.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-6xl">
        {roomsData.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            className={`bg-[#23272F] rounded-3xl shadow-lg overflow-hidden max-w-sm mx-auto flex flex-col`}
          >
            <div className="w-full h-[250px] overflow-hidden rounded-t-3xl">
              <img
                src={room.image}
                alt={room.type}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-serif font-semibold text-[#3BA3A3] mb-2 tracking-wide">
                {room.type}
              </h3>
              <p className="text-gray-300 mb-2 flex-grow">{room.description}</p>
              <span className="text-yellow-400 font-semibold text-lg">{room.price}</span>

              <div className="mt-6 space-y-4">
                <button
                  onClick={() =>
                    setSelectedRoomId(selectedRoomId === room.id ? null : room.id)
                  }
                  className="bg-[#3BA3A3] text-white px-5 py-2 rounded-full font-medium hover:bg-[#2D8C8C] transition duration-200 w-full"
                >
                  {selectedRoomId === room.id ? "Hide Details" : "View Details"}
                </button>

                {selectedRoomId === room.id && (
                  <ul className="text-sm list-disc list-inside text-gray-400 divide-y divide-gray-700 mt-2">
                    {room.features.map((feature, i) => (
                      <li key={i} className="py-1">{feature}</li>
                    ))}
                  </ul>
                )}

                <button className="bg-green-600 text-white px-5 py-2 rounded-full font-medium hover:bg-green-700 transition duration-200 w-full">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
