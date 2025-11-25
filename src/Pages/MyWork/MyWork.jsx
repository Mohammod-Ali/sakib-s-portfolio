import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // Built-in styles (clean & customizable)
import { motion } from "framer-motion";

// Replace these with your actual photo URLs (use your own images!)
const photos = [
  {
    src: "/src/assets/image1.jpeg",
    title: "River of Dreams",
    category: "Lifestyle / Travel",
  },
  {
    src: "/src/assets/image (2).png",
    title: "Small Hands, Full Hearts",
    category: "Community / Childhood",
  },
  {
    src: "/src/assets/image (3).png",
    title: "A Thousand Futures",
    category: "Education / Hope",
  },
  {
    src: "/src/assets/image (4).png",
    title: "Hello from the Other Side",
    category: "Street / Joy",
  },
  {
    src: "/src/assets/image5.png",
    title: "The Weight of Laughter",
    category: "Daily Life / Labor",
  },
  {
    src: "/src/assets/image6.png",
    title: "Threads of Time",
    category: "Portrait / Culture",
  },
  // Add as many as you want
];

const MyWork = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  return (
    <section id="photography" className="py-20 bg-black text-white">
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
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Capturing moments, emotions, and the beauty of light.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto mt-6 rounded-full"></div>
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
