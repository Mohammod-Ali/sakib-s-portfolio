const HeroSection = () => {
  return (
    <div className="hero bg-base-content text-white min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/photos/sakib.jpeg"
          className="max-w-sm rounded-lg shadow-2xl "
        />
        <div>
          <h3 className="text-3xl font-semibold">Hello,</h3>
          <h1 className="text-5xl font-bold">I'm Shaharul Islam Sakib</h1>
          <p className="py-4 mr-8  font-medium text-justify">
            I'm currently working as a Senior Officer - Communication & PR at
            It's Humanity Foundation (IHF), a non-profit organization that works
            to promote education, empowerment, and social inclusion across
            Bangladesh. Beyond my professional journey, I'm someone who loves
            exploring new places, meeting new people, and capturing life through
            my lens. Photography, for me, is more than a hobby — it's how I
            connect with emotions, preserve moments, and express creativity in
            its purest form.
          </p>
          <button className="btn btn-outline mt-4 rounded">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
