import { experience } from "../data/experience";
import FadeIn from "./FAdeIn";

function Experience() {
  return (
   <FadeIn>
       <section className="container-custom py-20">

      <h2 className="text-4xl font-bold mb-12 section-title">
        Experience
      </h2>

      {experience.map((job) => (
        <div
          key={job.id}
          className="
          bg-slate-800
          p-8
          rounded-xl
          border
          border-slate-700
        "
        >
          <h3 className="text-2xl font-bold">
            {job.role}
          </h3>

          <p className="text-cyan-400 mt-2">
            {job.company}
          </p>

          <p className="text-slate-400 mt-1">
            {job.duration} | {job.location}
          </p>

          <ul className="mt-6 space-y-3">

            {job.achievements.map((item, index) => (
              <li
                key={index}
                className="text-slate-300"
              >
                • {item}
              </li>
            ))}

          </ul>
        </div>
      ))}
    </section>
   </FadeIn>
  );
}

export default Experience;