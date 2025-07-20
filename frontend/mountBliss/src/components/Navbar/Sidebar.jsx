import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import homeImg from '../../assets/gallery/gallery1.jpg'
import diningImg from '../../assets/gallery/gallery2.jpg'
import menuImg from '../../assets/gallery/gallery3.jpg'
import reserveImg from '../../assets/gallery/gallery1.jpg'
import accoImg from '../../assets/gallery/gallery2.jpg'
import roomImg from '../../assets/gallery/gallery3.jpg'
import bookImg from '../../assets/gallery/gallery1.jpg'
import wellImg from '../../assets/gallery/gallery2.jpg'
import galleryImg from '../../assets/gallery/gallery3.jpg'
import ratesImg from '../../assets/gallery/gallery1.jpg'
import reviewImg from '../../assets/gallery/gallery2.jpg'

const Sidebar = () => {
  const menuItems = [
    {
      title:'Home',
      image: {homeImg},
    },
    {
      title:'Fine Dining',
      image:{diningImg},
      subMenu:[
        {
          title:'Menu',
          image:{menuImg},
        },
        {
          title:'Reservation',
          image:{reserveImg}
        },
      ],
    },
    {
      title:'Accommodation',
      image:{accoImg},
      subMenu:[
        {
          title:'Rooms & Suites',
          image:{roomImg},
        },
        {
          title:'Booking',
          image:{bookImg}
        },
      ],
    },
    {
      title:'Wellness',
      image: {wellImg},
    },
    {
      title:'Photo Gallery',
      image: {galleryImg},
    },
    {
      title:'Rates',
      image: {ratesImg},
    },
    {
      title:'Review',
      image: {reviewImg},
    },

    
  ]

  const [menu, setMenu] = useState(false)
  const [activeImage, setActiveImage] = useState(homeImg)

  const menuToggle = () => setMenu(!menu)

  return (
    <>
      {/* Menu Button */}
      <button onClick={menuToggle} className="absolute h-10 w-13 left-6 top-6 rounded transition z-50">
        <span className={`absolute left-6 h-[3px] w-6 transform transition-all duration-300 z-50 ease-in-out hover:w-3 ${menu ? 'rotate-45 top-3.5 bg-red-500' : 'bg-white top-2'}`}></span>
        <span className={`absolute left-6 h-[3px] w-6 hover:w-3 transition-all duration-400 ease-in-out z-50 ${menu ? 'opacity-0 bg-red-500' : 'bg-white top-4'}`}></span>
        <span className={`absolute left-6 h-[3px] w-6 transform transition-all duration-400 ease-in-out z-50 hover:w-3 ${menu ? '-rotate-45 top-4 bg-red-500' : 'bg-white top-6'}`}></span>
      </button>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-70 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-3/4 sm:w-1/2 h-full"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring' }}
            >
              <div className="fixed top-0 left-0 w-screen h-screen flex">
                {/* Left List Section */}
                <div className="bg-gradient-to-b from-gray-950 via-black to-gray-900 w-1/2 h-full text-white overflow-y-auto p-6 space-y-6">
                  {menuItems.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h2 className="uppercase font-bold text-gray-400 text-sm mb-2">{section.section}</h2>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            onMouseEnter={() => setActiveImage(item.image)}
                            className="cursor-pointer hover:text-red-400 transition duration-200"
                          >
                            {item.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Right Image Preview */}
                <div className="w-1/2 h-full relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      src={activeImage}
                      alt="Preview"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="object-cover w-full h-full absolute"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-black opacity-20" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Sidebar
