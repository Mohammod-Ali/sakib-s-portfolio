import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Resume() {
    const accent = "text-cyan-400";           // ← your only vibrant color
  const accentBg = "bg-cyan-500";           // for buttons & dots
  // Change these to your real info
  const personalInfo = {
    name: "Shaharul Islam Sakib",
    title: "Photographer & Creative Developer",
    email: "you@example.com",
    phone: "+880 1XXX-XXXXXX",
    location: "Dhaka, Bangladesh",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    resumePDF: "/resume.pdf" // put your PDF in public folder
  };

  const experiences = [
    { year: "2023 – Present", title: "Freelance Photographer", company: "Self-Employed", desc: "Documentary & humanitarian photography across South Asia" },
    { year: "2022 – 2023", title: "Photography Intern", company: "NGO Project", desc: "Captured stories of education & community development" },
    { year: "2021 – 2022", title: "Web Developer", company: "Freelance", desc: "Built modern React portfolios & landing pages" },
  ];

  const education = [
    { year: "2020 – 2024", degree: "B.Sc in Computer Science", institution: "University Name" },
    { year: "2018 – 2020", degree: "HSC", institution: "College Name" },
  ];

  const skills = [
    { name: "Photography", level: 95 },
    { name: "Portrait & Street", level: 92 },
    { name: "React / Frontend", level: 88 },
    { name: "Lightroom & Photoshop", level: 90 },
    { name: "Storytelling", level: 96 },
    { name: "UI/UX Design", level: 85 },
  ];

  return (
  <section id="resume" className="py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Resume</h2>
          <p className="text-gray-500 text-lg">Crafting stories through light and code</p>
          <div className="h-px w-24 bg-cyan-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left Column */}
          <div className="space-y-8">

            {/* Personal Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-950 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition"
            >
              <h3 className="text-3xl font-bold mb-2">{personalInfo.name}</h3>
              <p className={`text-xl mb-8 ${accent}`}>{personalInfo.title}</p>

              <div className="space-y-5 text-gray-400">
                <div className="flex items-center gap-4">
                  <span className="text-cyan-400 text-xl">✉</span>
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-cyan-400 text-xl">☎</span>
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-cyan-400 text-xl">📍</span>
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <div className="flex gap-6 mt-8 text-2xl">
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition"><Linkedin></Linkedin> </a>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition"><Github></Github></a>
              </div>

              <a
                href={personalInfo.resumePDF}
                download
                className="mt-8 w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
              >
                <span className="text-xl">↓</span> Download Resume
              </a>
            </motion.div>

            {/* Skills – NOW ANIMATED & WORKING */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-950 border border-gray-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Skills</h3>
              <div className="space-y-5">
                {skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">{skill.name}</span>
                      <span className={accent}>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.15,
                          ease: "easeOut"
                        }}
                        className={`${accentBg} h-full rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column – Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-10">Experience & Education</h3>
            <div className="space-y-10">
              {[...experiences, ...education].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-10 border-l-2 border-gray-800 hover:border-cyan-500 transition-all duration-500"
                >
                  <div className="absolute -left-3 top-1 w-5 h-5 bg-cyan-500 rounded-full border-4 border-black"></div>
                  <div className="bg-zinc-950 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition">
                    <span className={`font-medium ${accent}`}>{item.year}</span>
                    <h4 className="text-xl font-bold mt-1">{item.title || item.degree}</h4>
                    <p className="text-gray-400">{item.company || item.institution}</p>
                    {item.desc && <p className="text-gray-500 text-sm mt-2">{item.desc}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}