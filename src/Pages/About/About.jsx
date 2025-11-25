
const About = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="flex-1">
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/photos/award2.jpeg" // replace with your image path
              alt="About Me"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Side - Description */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Hello! I'm <span className="font-semibold">Shaharul Islam Sakib</span>, a passionate visual storyteller who believes every frame carries a unique emotion, a powerful message, and a timeless memory. My journey began with a simple curiosity for light, colors, and human expressions — which soon transformed into a deep commitment to photography and creative storytelling.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
           Over the years, I have worked across diverse genres, including portrait, documentary, event, and conceptual photography. Each project has shaped my perspective, helping me understand how to capture authenticity, emotion, and detail with precision and artistry. My work has been recognized by respected organizations, including the United Nations and It’s Humanity Foundation, for its ability to reflect purpose-driven narratives and meaningful impact.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
          I strive to create visuals that are not only aesthetically striking but also emotionally resonant. Whether I am documenting human stories, capturing candid moments, or crafting artistic compositions, my goal remains the same — to deliver work that inspires, connects, and leaves a lasting impression.
          </p>
          <a
            href="#contact"
            className="btn btn-outline hover:text-white hover:bg-black rounded "
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
