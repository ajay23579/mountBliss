import React, { useState } from 'react';
import logo from '../assets/main_logo.svg';
import Button from './Button';
import Icons from '../assets/Icons';
import MenuIcon from '../assets/MenuIcon';

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <>
      {/* Navbar */}
      <div
        role="navigation"
        aria-label="Main Navigation"
        className="fixed flex flex-wrap justify-between items-center pl-6 pr-6 w-full"
      >
        <div className="flex items-center gap-2 z-50 cursor-pointer" onClick={toggleSidebar}>
          <MenuIcon open={isSidebar} className="z-50" />
          <div className="text-white">Menu</div>
        </div>

        <div>
          <img src={logo} alt="Logo" height={120} width={120} />
        </div>

        <div className="flex text-white gap-5">
          <Button
            text="Location"
            icon={<Icons className="fill-blue-800" />}
            className="hover:underline hover:text-blue-900"
          />
          <Button
            text="Review"
            icon={<Icons className="fill-blue-700" />}
            className="hover:underline hover:text-blue-900"
          />
        </div>
      </div>

      {/* Overlay */}
      {isSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 sm:w-72 bg-white shadow-lg rounded-r-lg transform transition-transform duration-300 z-40 ${
          isSidebar ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="text-2xl font-bold mb-6">Sidebar Menu</div>
          <ul className="space-y-4 text-gray-700">
            {['Home', 'Location', 'Review', 'Contact'].map((item) => (
              <li
                key={item}
                className="hover:text-blue-500 transition-colors duration-200 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Gallery Section */}
          <div className="mt-6">
            <div className="text-lg font-semibold mb-2">Gallery</div>
            <div className="grid grid-cols-3 gap-2">
              {['img1.jpg', 'img2.jpg', 'img3.jpg'].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Gallery ${index}`}
                  className="w-full h-20 object-cover rounded hover:scale-105 transition-transform duration-200"
                />
              ))}
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
