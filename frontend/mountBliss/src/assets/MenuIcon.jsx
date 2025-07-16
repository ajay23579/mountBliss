// src/assets/MenuIcon.jsx
const MenuIcon = ({ open, className }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-all duration-300 transform ${className}`}
  >
    <rect
      x="20"
      y="30"
      width="60"
      height="8"
      rx="4"
      className={`fill-white transition-all duration-300 origin-center ${open ? 'transform rotate-45 translate-y-[20px]' : ''}`}
    />
    <rect
      x="20"
      y="50"
      width="60"
      height="8"
      rx="4"
      className={`fill-white transition-all duration-300 ${open ? 'opacity-0' : ''}`}
    />
    <rect
      x="20"
      y="70"
      width="60"
      height="8"
      rx="4"
      className={`fill-white transition-all duration-300 origin-center ${open ? 'transform -rotate-45 -translate-y-[20px]' : ''}`}
    />
  </svg>
);

export default MenuIcon;
