import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // Built-in styles (clean & customizable)
import { motion } from "framer-motion";

// Replace these with your actual photo URLs (use your own images!)
const photos = [
  {
    src: "/photos/image1.jpeg",
    title: "River of Dreams",
    category: "Lifestyle / Travel",
  },
  {
    src: "/photos/image (2).png",
    title: "Small Hands, Full Hearts",
    category: "Community / Childhood",
  },
  {
    src: "/photos/image (3).png",
    title: "A Thousand Futures",
    category: "Education / Hope",
  },
  {
    src: "/photos/image (4).png",
    title: "Hello from the Other Side",
    category: "Street / Joy",
  },
  {
    src: "/photos/image5.png",
    title: "The Weight of Laughter",
    category: "Daily Life / Labor",
  },
  {
    src: "/photos/image6.png",
    title: "Threads of Time",
    category: "Portrait / Culture",
  },
  // {
  //   src: "/photos/image6.png",
  //   title: "Threads of Time",
  //   category: "Portrait / Culture",
  // },
  // {
  //   src: "/photos/image7.jpeg",
  //   title: "Sowing Hope",
  //   category: "Portrait / Culture",
  // },
  // {
  //   src: "/photos/image8.jpeg",
  //   title: "Winter Relief Drive",
  //   category: "Portrait / Culture",
  // },
  // {
  //   src: "/photos/image9.jpeg",
  //   title: "Joy of Giving",
  //   category: "Portrait / Culture",
  // },
  // {
  //   src: "/photos/image10.jpeg",
  //   title: "Sketching the Future",
  //   category: "Portrait / Culture",
  // },
  // {
  //   src: "/photos/image11.jpeg",
  //   title: "It’s Humanity Foundation – Relief Distribution",
  //   category: "Portrait / Culture",
  // },
  // {
  //   src: "/photos/image12.jpeg",
  //   title: "Be a Handwashing Hero – School Awareness Program",
  //   category: "Portrait / Culture",
  // },
 
];

const MyWork = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  return (
    <section id="photography" className="py-28 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title - Fancy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Some of My Work
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Capturing moments, emotions, and the beauty of light.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-2xl"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              {/* Image */}
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {photo.title}
                </h3>
                <p className="text-gray-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {photo.category}
                </p>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* my work section footer */}
            <div className="lg:w-auto lg:h-60 mt-20 flex flex-col md:flex-row overflow-hidden gap-2  font-sans">
              {/* RIGHT – Instagram */}
              <a
                href="https://www.instagram.com/shaharul_sakib_?igsh=MTQ1dXNrbHFwa3p4Mg%253D%253D&utm_source=qr" // ← change to your real IG
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-lg p-5 flex-1 flex items-center justify-center bg-cover bg-center group transition-all duration-500 hover:flex-[2]"
                style={{ backgroundImage: "url('/photos/Screenshot.png')" }} // ← put your right image here
              >
                <div className="absolute inset-0 bg-gray-900/80 group-hover:bg-gray-800/90 transition"></div>
                <div className="relative z-10 text-white text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-red-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <p className="text-3xl md:text-4xl tracking-widest">
                    shaharul_sakib
                  </p>
                </div>
              </a>
              {/* left – Instagram */}
              <a
                href="https://www.instagram.com/f00d_frame?igsh=anZobTZkcHJvc2ll&utm_source=qr" // ← change to your real IG
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-lg flex-1 flex items-center justify-center bg-cover bg-center group transition-all duration-500 hover:flex-[2]"
                style={{ backgroundImage: "url('/photos/Screenshot2.png')" }} // ← put your right image here
              >
                <div className="absolute inset-0 bg-gray-900/80 group-hover:bg-gray-800/90 transition"></div>
                <div className="relative z-10 text-white text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-red-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <p className="text-3xl md:text-4xl tracking-widest">
                    f00d_frame
                  </p>
                </div>
              </a>
            </div>
      </div>

      {/* YARL Lightbox - Zero config, built-in animations */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={photos} // Auto-handles src, title, alt
          index={photoIndex}
          on={{
            // Built-in smooth slide transitions
            view: ({ index }) => setPhotoIndex(index),
          }}
          controller={{
            // Fancy controls
            preload: 2, // Preload next/prev images
          }}
          plugins={
            [
              // Optional: Add thumbnails or fullscreen (install if needed)
              // 'fullscreen', 'thumbnails',
            ]
          }
          // Custom styles for your dark theme
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
            thumb: { borderRadius: "8px" },
          }}
        />
      )}
    </section>
  );
};

export default MyWork;
