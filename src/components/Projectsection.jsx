import {
  liveProjects,
  personalProjects,
} from "../data/projects";




import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section className="container-custom py-20">

      {/* LIVE PROJECTS */}

      <h2 className="text-4xl font-bold mb-10 section-title">
        Live Client Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {liveProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

      {/* PERSONAL PROJECTS */}

      <h2 className="text-4xl font-bold mt-24 mb-10 section-title">
        Personal Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {personalProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </section>
  );
}

export default ProjectsSection;