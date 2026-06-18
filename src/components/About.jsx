import FadeIn from "./FAdeIn";

function About() {
  return (
     <FadeIn>
          <section className="container-custom py-20">

      <h2 className="text-4xl font-bold mb-10">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <p className="text-slate-400 leading-8">
            I'm a Frontend Developer with experience
            building responsive web applications using
            React.js, JavaScript, TypeScript, Redux Toolkit,
            REST APIs and modern frontend technologies.

            I have worked on logistics platforms,
            corporate websites and full-stack MERN
            applications.
          </p>

          <p className="text-slate-400 leading-8 mt-4">
            I enjoy solving complex UI challenges,
            optimizing performance and creating
            intuitive user experiences.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-4xl font-bold text-cyan-400">
              1.5+
            </h3>
            <p>Years Experience</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-4xl font-bold text-cyan-400">
              10+
            </h3>
            <p>Projects Delivered</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-4xl font-bold text-cyan-400">
              5+
            </h3>
            <p>Live Client Projects</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-4xl font-bold text-cyan-400">
              95+
            </h3>
            <p>Lighthouse Score</p>
          </div>

        </div>

      </div>

    </section>
     </FadeIn>
  );
}

export default About;