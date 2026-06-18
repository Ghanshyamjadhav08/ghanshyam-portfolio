import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import FadeIn from "./FAdeIn";

function Contact() {
  return (
  <FadeIn>
      <section className="container-custom py-20">

      <h2 className="text-4xl font-bold mb-12 section-title">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Left Side */}

        <div>

          <h3 className="text-2xl font-semibold mb-6">
            Let's Work Together
          </h3>

          <p className="text-slate-400 leading-8 mb-8">
            I'm currently open to Frontend Developer,
            React Developer, MERN Stack and ASP.NET Core
            opportunities.
          </p>

          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400" />
              <span>
                jadhavshyam08@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-cyan-400" />
              <span>
                +91 9604134538
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-400" />
              <span>
                Pune, Maharashtra
              </span>
            </div>

          </div>

          <div className="flex gap-5 mt-8 text-2xl">

            <a
              href="https://github.com/Ghanshyamjadhav08/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="www.linkedin.com/in/ghanshyam-jadhav-96b7611b9"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* Right Side */}

        <form
          className="
          bg-slate-800
          p-8
          rounded-xl
          border
          border-slate-700
        "
        >

          <div className="mb-5">
            <label>Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              className="
                w-full
                mt-2
                p-3
                rounded-lg
                bg-slate-900
                border
                border-slate-700
              "
            />
          </div>

          <div className="mb-5">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full
                mt-2
                p-3
                rounded-lg
                bg-slate-900
                border
                border-slate-700
              "
            />
          </div>

          <div className="mb-5">
            <label>Message</label>

            <textarea
              rows="5"
              placeholder="Write your message"
              className="
                w-full
                mt-2
                p-3
                rounded-lg
                bg-slate-900
                border
                border-slate-700
              "
            />
          </div>

          <button
            type="submit"
            className="
            bg-cyan-500
            px-6
            py-3
            rounded-lg
            font-semibold
            hover:bg-cyan-600
          "
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  </FadeIn>
  );
}

export default Contact;