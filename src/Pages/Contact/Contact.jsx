import { useState } from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending (replace with your real Formspree/Netlify/EmailJS later)
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300 text-lg">
            Let’s tell your story together
          </p>
          <div className="h-px w-24 bg-cyan-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-cyan-400">Let's connect</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm always open to discussing photography projects,
              collaborations, or just having a chat about life behind the lens.
            </p>

            <div className="space-y-5 text-gray-300">
              <div className="flex items-center gap-4">
                <span className="text-cyan-400 text-xl">
                  <MdEmail></MdEmail>
                </span>
                <span>sakiab@itshumanity.org</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-cyan-400 text-xl">
                  <FaPhone></FaPhone>
                </span>
                <span>+8801909372038</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-cyan-400 text-xl"><FaLocationDot /> </span>
                <span>
                  {" "}
                  House 137, Road 5, Block B, Bashundhara R/A, Dhaka 1229
                </span>
              </div>
            </div>

            {/* <div className="flex gap-6 text-3xl pt-4">
              <a href="#" className="hover:text-cyan-400 hover-3d transition">
                <FaLinkedinIn></FaLinkedinIn>
              </a>
              <a href="#" className="hover:text-cyan-400 hover-3d  transition">
               <FaFacebook></FaFacebook>
              </a>
              <a href="#" className="hover:text-cyan-400 hover-3d  transition">
                <FaInstagram></FaInstagram>
              </a>
            </div> */}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full bg-zinc-950 border border-gray-800 rounded-lg px-5 py-4 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full bg-zinc-950 border border-gray-800 rounded-lg px-5 py-4 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Your Message"
                  className="w-full bg-zinc-950 border border-gray-800 rounded-lg px-5 py-4 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>Sending...</>
                ) : status === "success" ? (
                  <>Message Sent!</>
                ) : (
                  <>Send Message</>
                )}
              </button>

              {/* Success Message */}
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-cyan-400 text-center font-medium"
                >
                  Thank you! I’ll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
