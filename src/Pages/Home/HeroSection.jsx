import { Typewriter } from "react-simple-typewriter";
import LoopTypewriter from "./LoopTypewriter";
import { FaDownload } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="hero   min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <img
          src="/photos/hero_image.png"
          className="max-w-sm rounded-lg  "
        />
        <div>
          <h3 className="text-3xl font-semibold">Hello,</h3>
          <h1 className="text-5xl font-bold">I'm Shaharul Islam Sakib</h1>
          <h2 className="text-3xl font-semibold py-4">
            I'm a{" "}
            <span className="text-cyan-500">
              <LoopTypewriter
                words={["Assistant Manager at (IHF)", "Photographer", "Story teller", ]}
                typeSpeed={70}
                deleteSpeed={40}
                delayBetweenWords={1000}
                cursor
                cursorChar="_"
              />
            </span>
          </h2>

          <a
          href={"/resume.pdf"}
            download
            className="btn btn-outline hover:bg-cyan-500 mt-8 rounded"
          >
            Download CV <FaDownload></FaDownload>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
