import { certification } from "../data/certification";
import FadeIn from "../components/FAdeIn";
function Certification() {
  return (
    <FadeIn>
          <section className="container-custom py-20">

      <h2 className="text-4xl font-bold mb-12 section-title">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {certification.map((cert) => (
          <div
            key={cert.id}
            className="
            bg-slate-800
            p-6
            rounded-xl
            border
            border-slate-700
          "
          >
            <h3 className="font-semibold text-xl">
              {cert.title}
            </h3>

            <p className="text-cyan-400 mt-3">
              {cert.issuer}
            </p>
          </div>
        ))}

      </div>
    </section>
    </FadeIn>
  );
}

export default Certification;