import React, { useState } from 'react'
import logo  from '../assets/main_logo.svg'
import Button from './Button'
import Icons from '../assets/Icons'
import MenuIcon from '../assets/MenuIcon'

const Navbar = () => {
  const [isSidebar,setIsSidebar] = useState(false);

  const toggleSidebar=()=>{
    setIsSidebar(!isSidebar);
  }
  return (
    <>
    <div className='fixed flex justify-between items-center pl-9 pr-9 w-full right-0 left-0'>
      <div className='flex w-1/2 justify-between '>
        <div className="flex items-center gap-2 w-full z-50" onClick={toggleSidebar}><MenuIcon open={isSidebar} className="z-50" />
        <div className='flex text-white'>Menu</div>
        </div>
        <div><img src={logo} alt="logo" height={120} width={120}/></div>
      </div>
      <div className="flex text-white gap-5">
        <Button text="Location" icon={<Icons className="fill-blue-800"/>} className="hover:underline hover:text-blue-900"/>
        <Button text="Review" icon={<Icons className="fill-blue-700"/>} className="hover:underline hover:text-blue-900"/>
      </div>
    </div>

{isSidebar && (
  <div
    className="fixed inset-0 bg-black bg-opacity-40 z-30"
    onClick={toggleSidebar}
  ></div>
)}

    {/* SideBar */}
    <div className={`fixed top-0 left-0 h-full w-72 bg-white transform transition-transform duration-100 z-40 ${isSidebar?'translate-x-0':'-translate-x-full'}`}>
      <div className='p-6'>
        <div className="text-2xl font-bold mb-6">Sidebar Menu</div>
        <ul className="space-y-4 text-gray-700">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Location</li>
            <li className="hover:text-blue-500 cursor-pointer">Review</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>
         <button
            onClick={toggleSidebar}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Close
          </button>
      </div>
    </div>
    </>
    
  )
}

export default Navbar
