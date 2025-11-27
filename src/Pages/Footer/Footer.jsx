// import { motion } from 'framer-motion';
// import { Facebook, Instagram, Linkedin } from 'lucide-react';


// export default function Footer() {
//   return (
//     <footer className="bg-black border-t border-gray-500 py-12">
//       <div className="max-w-6xl mx-auto px-6">

//         <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">

//           {/* Left: Name + Tagline */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl font-bold text-white mb-2">
//               Shaharul Islam Sakib
//             </h3>
//             <p className="text-gray-400 text-sm">
//               Photographer & Storyteller
//             </p>
//             <p className="text-gray-400 text-xs mt-3">
//               Capturing humanity, one frame at a time.
//             </p>
//           </motion.div>

//           {/* Center: Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="flex flex-col items-center md:items-start"
//           >
//             <h4 className="text-lg font-semibold text-cyan-400 mb-4">Quick Links</h4>
//             <div className="space-y-2 text-gray-400 text-sm">
//               <a href="/" className="block hover:text-cyan-400 hover-3d transition">Home</a>
//               <a href="/about" className="block hover:text-cyan-400 hover-3d transition">About</a>
//               <a href="/myWork" className="block hover:text-cyan-400 hover-3d transition">My Work</a>
//               <a href="/resume" className="block hover:text-cyan-400 hover-3d transition">Resume</a>
//               <a href="/contact" className="block hover:text-cyan-400 hover-3d transition">Contact</a>
//             </div>
//           </motion.div>

//           {/* Right: Social + Email */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="flex flex-col items-center md:items-end"
//           >
//             <h4 className="text-xl font-semibold text-cyan-400 mb-4">Connect</h4>
//             <div className="flex gap-6 text-2xl mb-4">
//               <a href="https://www.linkedin.com/in/shaharul-islam-sakib-888037213/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" className=" text-gray-300 hover:text-cyan-400 hover-3d transition"><Linkedin></Linkedin> </a>
//               <a href="https://www.facebook.com/shaharulislam.sakib" target="_blank" rel="noreferrer" className="hover:text-cyan-400 hover-3d text-gray-300 transition"><Facebook></Facebook></a>
//               <a href="https://www.instagram.com/shaharulislamsakib?igsh=dmJ2eWZzeHZkbDlo" target="_blank" rel="noreferrer" className="hover:text-cyan-400 hover-3d text-gray-300  transition"><Instagram></Instagram></a>
//             </div>
//             <p className="text-gray-300 text-sm flex items-center gap-2">
//               <span className="text-cyan-400">Email</span> sakib@itshumanity.ogr
//             </p>
//           </motion.div>
//         </div>

//         {/* Bottom line */}
//         <div className="mt-12 pt-8 border-t border-gray-600 text-center">
//           <p className="text-gray-300">
//             © {new Date().getFullYear()}<span className="text-cyan-400 ml-2">Shaharul Islam Sakib.</span> All rights reserved. 
           
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }


const Footer = () => {
  return (
   <footer className="w-full h-60 flex flex-col md:flex-row overflow-hidden font-sans">
  {/* LEFT – Email */}
  <a
    href="mailto:sakiab@itshumanity.org"
    className="relative flex-1 flex items-center justify-center bg-cover bg-center group transition-all duration-500 hover:flex-[2]"
    style={{ backgroundImage: "url('/photos/image (3).png')" }} // ← put your left image here
  >
    <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition"></div>
    <div className="relative z-10 text-white text-center">
      <svg className="w-16 h-16 mx-auto mb-6 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
      <p className="text-2xl md:text-3xl tracking-wider">sakiab@itshumanity.org</p>
    </div>
  </a>

  {/* CENTER – Phone */}
  <a
    href="tel:+8801909372038"
    className="relative flex-1 flex items-center justify-center bg-cover bg-center group transition-all duration-500 hover:flex-[2]"
    style={{ backgroundImage: "url('/photos/image (2).png')" }} // ← put your center image here
  >
    <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition"></div>
    <div className="relative z-10 text-white text-center">
      <svg className="w-16 h-16 mx-auto mb-6 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      <p className="text-2xl md:text-3xl tracking-wider">+8801909372038</p>
    </div>
  </a>

  {/* RIGHT – Instagram */}
  <a
    href="https://www.instagram.com/shaharulislamsakib?igsh=dmJ2eWZzeHZkbDlo"  // ← change to your real IG
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex-1 flex items-center justify-center bg-cover bg-center group transition-all duration-500 hover:flex-[2]"
    style={{ backgroundImage: "url('/photos/image1.jpeg')" }} // ← put your right image here
  >
    <div className="absolute inset-0 bg-red-900/80 group-hover:bg-red-900/70 transition"></div>
    <div className="relative z-10 text-white text-center">
      <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
        <svg className="w-12 h-12 text-red-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </div>
      <p className="text-3xl md:text-4xl tracking-widest">instagram</p>
    </div>
  </a>
</footer>
  );
};

export default Footer;