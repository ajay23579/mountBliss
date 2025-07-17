import { useState } from "react";
import deluxeImg from "../assets/deluxe.jpg";
import suiteImg from "../assets/suite.jpg";
import standardImg from "../assets/standard.jpg";
import familyImg from "../assets/family.jpg";
import executiveImg from "../assets/executive.jpg";

function Rooms() {
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
    <div className="bg-gray-100 text-gray-800 py-12 px-6 font-sans">
      <h2 className="text-5xl font-bold text-center text-indigo-700 mb-6 font-serif tracking-wide">
        Rooms at Hotel Mount Bliss
      </h2>
      <p className="text-center text-gray-600 mb-10 text-lg">
        Browse our beautifully designed rooms and find your perfect stay.
      </p>

      {/* Grid layout with conditional centering */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {roomsData.map((room, index) => (
          <div
            key={room.id}
            className={`bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-sm mx-auto transition hover:scale-105
              ${index === 4 ? "col-span-2 sm:col-span-2 sm:mx-auto" : ""}
            `}
          >
            {/* Fixed height image box */}
            <div className="w-full h-[250px] overflow-hidden bg-gray-200 rounded-t-xl">
              <img
                src={room.image}
                alt={room.type}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-serif font-bold text-indigo-700 mb-2 tracking-wide">
                {room.type}
              </h3>
              <p className="text-gray-600 mb-2">{room.description}</p>
              <span className="text-yellow-500 font-semibold text-lg">{room.price}</span>

              <div className="mt-6 space-y-4">
                <button
                  onClick={() =>
                    setSelectedRoomId(selectedRoomId === room.id ? null : room.id)
                  }
                  className="bg-indigo-500 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-600 transition duration-200"
                >
                  {selectedRoomId === room.id ? "Hide Details" : "View Details"}
                </button>

                {selectedRoomId === room.id && (
                  <ul className="text-sm list-disc list-inside text-gray-700 divide-y divide-gray-200 mt-2">
                    {room.features.map((feature, index) => (
                      <li key={index} className="py-1">{feature}</li>
                    ))}
                  </ul>
                )}

                <button className="bg-green-600 text-white px-5 py-2 rounded-full font-medium hover:bg-green-700 transition duration-200">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
