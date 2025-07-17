import { useState } from "react";
import deluxeImg from "../assets/deluxe.jpg";
import suiteImg from "../assets/suite.jpg";
import standardImg from "../assets/standard.jpg";
import familyImg from "../assets/family.jpg";
import executiveImg from "../assets/executive.jpg";

function Rooms() {
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [hoveredRoom, setHoveredRoom] = useState(null);

  const roomsData = [
    {
      id: 1,
      type: "Deluxe Room",
      description: "Mountain view, free Wi-Fi, complimentary breakfast, spacious interior.",
      price: "Rs. 3,500/night",
      features: ["Free Wi-Fi", "Breakfast included", "32” LED TV", "Balcony", "Room service"],
      image: deluxeImg,
      accentColor: "from-indigo-500 to-purple-500",
    },
    {
      id: 2,
      type: "Suite",
      description: "Private balcony, lounge access, king-size bed, minibar, and bathrobe set.",
      price: "Rs. 6,200/night",
      features: ["Minibar", "Private lounge", "King-size bed", "Balcony", "Luxury bathrobes"],
      image: suiteImg,
      accentColor: "from-amber-500 to-orange-500",
    },
    {
      id: 3,
      type: "Standard Room",
      description: "Budget-friendly room with clean design, essential amenities, and Wi-Fi.",
      price: "Rs. 2,000/night",
      features: ["Free Wi-Fi", "Air Conditioning", "Work desk", "TV", "Clean interior"],
      image: standardImg,
      accentColor: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      type: "Family Room",
      description: "Two queen beds, spacious setting, ideal for families with kids.",
      price: "Rs. 4,500/night",
      features: ["Two queen beds", "Extra space", "Child-safe furniture", "Mini fridge", "Wi-Fi"],
      image: familyImg,
      accentColor: "from-emerald-500 to-teal-500",
    },
    {
      id: 5,
      type: "Executive Room",
      description: "Business-class comfort with work desk, fast internet, and city view.",
      price: "Rs. 5,000/night",
      features: ["High-speed internet", "Work desk", "City view", "Coffee maker", "LED TV"],
      image: executiveImg,
      accentColor: "from-gray-600 to-gray-800",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-indigo-700 mb-4 font-serif tracking-wide">
          Rooms at Hotel Mount Bliss
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Browse our beautifully designed rooms and find your perfect stay.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <div
              key={room.id}
              className={`relative group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                room.id === 5 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              onMouseEnter={() => setHoveredRoom(room.id)}
              onMouseLeave={() => setHoveredRoom(null)}
            >
              {/* Image with overlay effect */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.type}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredRoom === room.id ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    room.accentColor
                  } opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                />
              </div>

              {/* Price tag */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <span className="font-semibold text-gray-800">{room.price}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                  {room.type}
                </h3>
                <p className="text-gray-600 mb-4">{room.description}</p>

                <div className="space-y-4">
                  <button
                    onClick={() =>
                      setSelectedRoomId(selectedRoomId === room.id ? null : room.id)
                    }
                    className={`relative overflow-hidden px-5 py-2 rounded-full font-medium text-white ${
                      room.accentColor
                    } bg-gradient-to-r hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5`}
                  >
                    <span className="relative z-10">
                      {selectedRoomId === room.id ? "Hide Details" : "View Details"}
                    </span>
                  </button>

                  {selectedRoomId === room.id && (
                    <div className="animate-fadeIn">
                      <ul className="text-sm text-gray-700 space-y-2 mt-2">
                        {room.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    className={`w-full bg-gradient-to-r ${room.accentColor} text-white px-5 py-2.5 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rooms;