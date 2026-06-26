import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  PhoneCall,
  Facebook,
  Instagram,
} from "lucide-react";
import { FaDownload, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

export default function Resume() {
  const accent = "text-cyan-400"; // your only vibrant color
  const accentBg = "bg-cyan-500"; // for buttons & dots

  const personalInfo = {
    name: "Shaharul Islam Sakib",
    title: "Senio Officer at IHF & Photographer",
    email: "shaharul2911@gmail.com",
    phone: "+8801909372038",
    location: "Bashundhara R/A, Dhaka, Bangladesh",
    linkedin:
      "https://www.linkedin.com/in/shaharul-islam-sakib-888037213/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    facebook: "https://www.facebook.com/shaharulislam.sakib",
    instagram:
      "https://www.instagram.com/shaharulislamsakib?igsh=dmJ2eWZzeHZkbDlo",
    whatsapp: "https://wa.me/+8801909372038",
    resumePDF: "/resume.pdf", // put your PDF in public folder
  };

  const experiences = [
    {
      year: "JAN 2024 - PRESENT",
      title: "Assistant Manager",
      company: "It’s Humanity Foundation ",
      desc: `● Lead and oversee communication, branding, and public relations strategies to strengthen the organization's visibility and impact.
      ● Supervise cross-functional teams, manage stakeholder and donor engagement, and build strategic partnerships to support organizational growth.
      ● Develop and implement communication plans, media campaigns, and storytelling initiatives aligned with SDG-focused programs and fundraising objectives.
      ● Coordinate organizational events, monitor project visibility, and ensure consistent brand representation across digital, print, and media platforms.
      `,
    },
    {
      year: "JAN 2024 - Jan 2025",
      title: "Senior Officer",
      company: "It’s Humanity Foundation ",
      desc: `● Lead organizational communication, branding, and PR strategy.
      ● Manage partnerships, donor relations, and storytelling initiatives. Develop media content, press releases, and social campaigns aligned withSDG-focused projects.
      ● Coordinate visibility for programs on education, livelihood, and emergency response.`,
    },
    {
      year: "Jan 2022 - Dec 2023",
      title: "Management Trainee",
      company: "It’s Humanity Foundation ",
      desc: `● Supported project communication and internal coordination among field and HQ teams.
● Designed visual content and reports to enhance project documentation and impact storytelling.
● Assisted in planning and executing national campaigns on flood relief, health, and girls’ education.`,
    },
    {
      year: "Apr 2021 - Dec 2021",
      title: "Trainee",
      company: "It’s Humanity Foundation",
      desc: `● Assisted the communications team with social media management and donor updates.
● Participated in stakeholder meetings and learned organizational communication frameworks.`,
    },
    {
      year: "Jan 2021 - Mar 2021",
      title: "Intern",
      company: "It’s Humanity Foundation",
      desc: `● Conducted field data collection and supported project documentation.
● Contributed to drafting impact stories for education and relief programs`,
    },
  ];

  const education = [
    {
      // year: "2018 – 2022",
      degree: "Bachelor of Science, Department of Zoology",
      institution: "DHAKA COLLEGE, DHAKA",
    },
    {
      year: "Completed in 2016",
      degree: "HSC",
      institution: "LIONS SCHOOL & COLLEGE, SYEDPUR",
    },
    {
      year: "Completed in 2014",
      degree: "SSC",
      institution: "AL FARUGUE ACADEMY, SYEDPUR",
    },
  ];

  const skills = [
    { name: "Digital Marketing", level: 95 },
    { name: "Management Skills", level: 92 },
    { name: "Photography & Videography", level: 88 },
    { name: "Microsoft Word and Excel", level: 90 },
    { name: "Storytelling", level: 96 },
    { name: "Communication Skills", level: 85 },
  ];

  return (
    <section id="resume" className="py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Resume</h2>
          <p className="text-gray-300 text-lg">
            Crafting stories through light and spread humanity
          </p>
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
                  <span className="text-cyan-400 text-xl">
                    <MdOutlineEmail />
                  </span>
                  <span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {personalInfo.email}
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-cyan-400 text-xl">
                    <FaPhone></FaPhone>
                  </span>

                  <span>
                    <a href={`tel:${personalInfo.phone}`}>
                      {personalInfo.phone}
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-cyan-400 text-xl">
                    <FaLocationDot />
                  </span>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
              {/* personal info card icon start here */}
              <div className="flex gap-6 mt-8 text-2xl">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 hover-3d transition"
                >
                  <Linkedin></Linkedin>{" "}
                </a>
                <a
                  href={personalInfo.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 hover-3d transition"
                >
                  <Facebook></Facebook>
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 hover-3d transition"
                >
                  <Instagram></Instagram>
                </a>
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 hover-3d transition"
                >
                  <FaWhatsapp></FaWhatsapp>
                </a>
              </div>
              {/* personal info card icon end here  */}
              <a
                href={personalInfo.resumePDF}
                download
                className="mt-8 w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
              >
                <span className="text-xl">
                  <FaDownload></FaDownload>
                </span>{" "}
                Download Resume
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
                      <span className="text-gray-300">{skill.name}</span>
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
                          ease: "easeOut",
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
                    <h4 className="text-xl font-bold mt-1">
                      {item.title || item.degree}
                    </h4>
                    <p className="text-gray-300">
                      {item.company || item.institution}
                    </p>
                    {item.desc && (
                      <p
                        className="text-gray-400 mt-2"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {" "}
                        {item.desc}
                      </p>
                    )}
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
