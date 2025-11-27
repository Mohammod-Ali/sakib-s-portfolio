// import { Link } from "react-router-dom";


// const Navbar = () => {
//   const menuItems = (
//     <>
//       <li>
//         <Link to={"/"}>Home</Link>
//       </li>
//       <li>
//         <Link to={"/myWork"}>My Work</Link>
//       </li>
//       <li>
//         <Link to={"/about"}>About</Link>
//       </li>
//       <li>
//         <Link to={"/resume"}>Resume</Link>
//       </li>
//       <li>
//         <Link to={"/contact"}>Contact</Link>
//       </li>
      
//     </>
//   );
//   return (
//     <div className="navbar bg-base-100 shadow-sm fixed font-semibold z-10">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {" "}
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />{" "}
//             </svg>
//           </div>
//           <ul
//             tabIndex="-1"
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//           >
//             {menuItems}
//           </ul>
//         </div>
//         <div >
//           <Link to={"/"} className="text-xl font-bold">
//             Shaharul Islam Sakib
//           </Link>
//         </div>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 ">{menuItems}</ul>
//       </div>
//       <div className="navbar-end">
//     {/* <a className="btn">Button</a> */}
//   </div>
//     </div>
//   );
// };

// export default Navbar;
import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'My Work', href: '/myWork' },
    { name: 'About', href: '/about' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

        {/* Logo / Name – Left */}
        <Link to={"/"} className="text-2xl font-bold tracking-wider text-white hover:text-cyan-300 transition">
          SHAHARUL ISLAM SAKIB
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-lg tracking-widest text-white hover:text-cyan-300 transition relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 border-t border-white/10"
        >
          <div className="px-6 py-8 space-y-8 text-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-2xl tracking-widest text-white hover:text-purple-400 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}