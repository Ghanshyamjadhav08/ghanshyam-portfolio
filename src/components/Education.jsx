import { education } from "../data/education";
import FadeIn from "./FAdeIn";

function Education() {
  return (
    <FadeIn>
          <section className="container-custom py-20">

      <h2 className="text-4xl font-bold mb-12 section-title">
        Education
      </h2>

      {education.map((item) => (
        <div
          key={item.id}
          className="
          bg-slate-800
          p-8
          rounded-xl
          border
          border-slate-700
        "
        >
          <h3 className="text-2xl font-bold">
            {item.degree}
          </h3>

          <p className="text-cyan-400 mt-2">
            {item.institute}
          </p>

          <p className="text-slate-400 mt-2">
            {item.duration}
          </p>

          <p className="text-slate-400">
            {item.location}
          </p>
        </div>
      ))}
    </section>
    </FadeIn>
  );
}

export default Education;