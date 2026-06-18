import FadeIn from "./FAdeIn"
const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "React Router",
      "Formik",
      "Axios",
    ],
  },

  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "ASP.NET Core",
      "C#",
      "PHP",
      "REST APIs",
      "Socket.io",
    ],
  },

  {
    title: "Databases",
    skills: [
      "SQL",
      "MySQL",
      "MongoDB",
    ],
  },

  {
    title: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Webpack",
      "Vite",
      "Jest",
      "Agile",
      "Scrum",
    ],
  },
];

function Skills() {
  return (
    <FadeIn>
    <section className="container-custom py-20 ">
      <h2 className="text-4xl font-bold mb-12">
        Skills & Technologies
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition"
          >
            <h3 className="text-2xl font-semibold mb-5 text-cyan-400">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">

              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    px-4 py-2
                    bg-slate-700
                    rounded-lg
                    text-sm
                    hover:bg-cyan-500
                    hover:text-black
                    transition
                    cursor-pointer
                  "
                >
                  {skill}
                </span>
              ))}

            </div>
          </div>
        ))}

      </div>
    </section>

    </FadeIn>
  );
}

export default Skills;