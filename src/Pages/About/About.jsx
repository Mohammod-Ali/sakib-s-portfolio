import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const carouselImages = [
  "/photos/image16.jpeg",
  "/photos/image9.jpeg",
  "/photos/image13.jpeg",
  "/photos/image8.jpeg",
  "/photos/image7.jpeg",
  "/photos/about_img/WhatsApp Image 1.jpeg",
  '/photos/about_img/WhatsApp Image 2.jpeg',
  '/photos/about_img/WhatsApp Image 3.jpeg',
  '/photos/about_img/WhatsApp Image 4.jpeg',
  '/photos/about_img/WhatsApp Image 5.jpeg',
  '/photos/about_img/WhatsApp Image 6.jpeg', 
];


export default function About() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setSlide((prev) => (prev + 1) % carouselImages.length),
      4000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-black text-white py-32 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* ==================== MOBILE ONLY – YOUR EXACT ORDER ==================== */}
        <div className="block md:hidden space-y-16">
          {/* 1. NAME */}
          <h1 className="text-center text-5xl font-bold leading-tight">
            মোঃ শাহারুল ইসলাম{" "}
            <span className="text-cyan-500 font-medium">|</span> MD. SHAHARUL
            ISLAM
          </h1>

          {/* 2. CAROUSEL */}
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img
              src={carouselImages[slide]}
              alt="Work"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`h-3 rounded-full transition-all ${
                    i === slide ? "w-10 bg-purple-500" : "w-3 bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 3. SHORT BIO */}
          <p className="text-gray-200 text-lg leading-relaxed max-w-2xl mx-auto text-justify">
            I am Md. Shaharul Islam Sakib, a 27-year-old communication
            professional born and raised in the vibrant city of Saidpur.
            Currently, I serve as a Senior Officer – Communication & PR at It’s
            Humanity Foundation (IHF), where I lead strategic communication,
            storytelling, branding, and donor engagement to promote education,
            empowerment, and social inclusion across Bangladesh.
            <br /> <br />
            Over the years at IHF—from Intern to Trainee, Management Trainee,
            and now Senior Officer—I have built a strong foundation in strategic
            communication, visual storytelling, project coordination, and
            partnership management. My contributions have been recognized
            through several awards, including the Founder’s Award (2022–2023)
            and multiple Outstanding Contribution awards. These achievements
            reflect my dedication, consistency, and commitment to creating
            meaningful social impact.
            <br /> <br />
            Beyond my professional responsibilities, photography is one of my
            strongest creative expressions. I use my lens to capture emotions,
            untold stories, and everyday realities. This passion recently led to
            a remarkable milestone — one of my photographs was selected in the
            UN80 Youth Photo Contest: “Youth as Catalysts of Change” by the
            United Nations in Bangladesh. This recognition has strengthened my
            belief in the power of visual storytelling and motivates me to keep
            creating work that inspires change and amplifies unheard voices.
            <br />
            <br />
            Driven by ambition and guided by purpose, I aim to grow as a
            communication specialist who blends creativity with impact. My
            future goal is to combine strategic communication, photography, and
            storytelling to create powerful narratives that promote inclusion,
            empathy, and sustainable development.
          </p>
        </div>

        {/* ==================== DESKTOP – 100% ORIGINAL ==================== */}
        <div className="hidden md:grid md:grid-cols-12 ">
          <div className=" space-y-16">
            {/* <div>
              <h3 className="text-cyan-400 font-bold text-lg mb-6">
                PERSONAL MISSION
              </h3>
              <ul className="text-gray-300 text-sm space-y-3">
                {exhibitions.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
                
              </ul>
            </div> */}
            {/* <div>
              <h3 className="text-cyan-400 font-bold text-lg mb-6">
                BOOK / MAJOR PUBLICATIONS:
              </h3>
              <ul className="text-gray-300 text-sm space-y-3">
                {publications.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div> */}
            {/* <div className="pt-12">
              <h3 className="text-purple-400 font-bold text-lg mb-6">
                CONTACT:
              </h3>
              <p className="text-gray-300">solarchman@gmail.com</p>
              <p className="text-gray-300">+880 1553 084 34</p>
              <div className="flex gap-12 text-5xl mt-10 text-purple-400">
                <span>f</span>
                <span>i</span>
              </div>
            </div> */}
          </div>

          <div className="md:col-span-8">
            <h1 className="text-4xl font-bold leading-none mb-12">
              মোঃ শাহারুল ইসলাম | MD. SHAHARUL ISLAM
            </h1>

            {/* carosell */}
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src={carouselImages[slide]}
                alt="Work"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`h-3 rounded-full transition-all cursor-pointer ${
                      i === slide ? "w-10 bg-cyan-400" : "w-5 bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* bio */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl my-20 text-justify">
              My name is Md. Shaharul Islam Sakib. I am a 28-year-old communication professional who was born and raised in the vibrant city of Saidpur.
              Currently, I serve as a Assistant Manager – Communication & PR at
              It’s Humanity Foundation (IHF), where I lead strategic
              communication, storytelling, branding, and donor engagement to
              promote education, empowerment, and social inclusion across
              Bangladesh.
              <br /> <br />
              Over the years at IHF—from Intern to Trainee, Management Trainee,
              Senior Officer, and now Assistant Manager—I have built a strong
              foundation in strategic communication, visual storytelling,
              project coordination, and partnership management. My contributions
              have been recognized through several awards, including the
              Founder’s Award (2022–2023) and multiple Outstanding Contribution
              awards. These achievements reflect my dedication, consistency, and
              commitment to creating meaningful social impact.
              <br /> <br />
              Beyond my professional responsibilities, photography is one of my
              strongest creative expressions. I use my lens to capture emotions,
              untold stories, and everyday realities. This passion recently led
              to a remarkable milestone — one of my photographs was selected in
              the UN80 Youth Photo Contest: “Youth as Catalysts of Change” by
              the United Nations in Bangladesh. This recognition has
              strengthened my belief in the power of visual storytelling and
              motivates me to keep creating work that inspires change and
              amplifies unheard voices.
              <br />
              <br />
              Driven by ambition and guided by purpose, I aim to grow as a
              communication specialist who blends creativity with impact. My
              future goal is to combine strategic communication, photography,
              and storytelling to create powerful narratives that promote
              inclusion, empathy, and sustainable development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
