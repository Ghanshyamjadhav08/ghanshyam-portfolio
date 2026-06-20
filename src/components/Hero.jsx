import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="container-custom min-h-[90vh] flex items-center">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>

          <p className="text-cyan-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold">
            Ghanshyam Jadhav
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-300 mt-4">
            Frontend Developer
          </h2>

          <p className="text-slate-400 mt-6 leading-8">
            React.js Developer specializing in building
            scalable, responsive and production-grade web
            applications using React, TypeScript, Redux
            Toolkit, Next.js and MERN Stack.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="/projects"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="border border-cyan-500 px-6 py-3 rounded-lg"
            >
              Download Resume
            </a>

          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-8 text-2xl">

            <a
              href="https://github.com/Ghanshyamjadhav08/"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
                href="https://www.linkedin.com/in/ghanshyam-jadhav-96b7611b9"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:jadhavshyam08@gmail.com"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <img
            src="/profile.jpg"
            alt="Ghanshyam"
            className="w-[320px] h-[320px] rounded-full object-cover border-4 border-cyan-500"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;
