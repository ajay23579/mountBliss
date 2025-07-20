import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Sidebar = () => {
       const [menu,setMenu] = useState(false)
       const menuToggle = ()=> setMenu(!menu)
      motion;
    
       return (
 
         <>
   
        
          {/* Menu Button */}
         <button onClick={menuToggle} class={`absolute h-10 w-13 left-6  rounded   transition z-50`}>{/* Top line */}
          <span className={`absolute left-6 h-[3px] w-6 transform transition-all duration-300 z-50 ease-in-out hover:w-3 
          ${menu ? 'rotate-45 top-3.5 bg-red-500' : 'bg-white top-2'}`}></span>
          {/* Middle line */}
          <span className={`absolute left-6 h-[3px] w-6 hover:w-3 transition-all duration-400 ease-in-out z-50
          ${menu ? 'opacity-0 bg-red-500' : 'bg-white top-4'}`}></span>
          {/* Bottom line */}
          <span className={`absolute left-6 h-[3px] w-6 transform transition-all duration-400 ease-in-out z-50 hover:w-3 
          ${menu ? '-rotate-45 top-4 bg-red-500' : 'bg-white top-6'}`}></span>
        </button>



 {/* Menu Dropdown */}
            <AnimatePresence>
            {menu &&(
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
                      transition={{ type: 'spring'}}
                    >
                      <div className='fixed text-white left--1 top-0 bg-transparent w-screen h-screen transform transition-transform duration-300 ease-in-out flex'>
                        <div className={`bg-gradient-to-b from-gray-950 via-black to-gray-900 w-1/2 h-screen transform transition-transform duration-300 ease-in-out ${menu ? 'translate-x-0' : '-translate-x-full'}`}>
                        list</div>
                        <div className='bg-white w-1/2 h-screen text-black '>gallery</div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
            </AnimatePresence>
    </>
  )
}

export default Sidebar