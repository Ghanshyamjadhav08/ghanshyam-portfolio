import About from "../components/About";
import Hero from "../components/Hero";
import ProjectsSection from "../components/Projectsection";
import Skills from "../components/Skills";
import Experience from "../components/Experience"
import Education from "../components/Education";
import Certification from "../components/Certification";
import Contact from "../components/Contact";
function Home() {
  return (
      <>
         <Hero/>
         <About/>
         <Skills/>
         <ProjectsSection/>
         <Experience/>
         <Education/>
         <Certification/>
         <Contact/>
      </>
  );
}

export default Home;