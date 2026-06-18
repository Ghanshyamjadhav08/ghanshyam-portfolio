function ProjectCard({ project }) {
  return (
    <div
      className="
      bg-slate-800
      rounded-xl
      overflow-hidden
      border
      border-slate-700
      hover:border-cyan-500
      transition-all
      duration-300
      hover:-translate-y-2
    "
    >
      <img
        src={project.image || "/project-placeholder.jpg"}
        alt={project.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold mb-3">
          {project.title}
        </h3>

        <p className="text-slate-400 mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
              px-3 py-1
              bg-slate-700
              rounded-lg
              text-sm
            "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
              px-4 py-2
              bg-cyan-500
              rounded-lg
            "
            >
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
              px-4 py-2
              border
              border-cyan-500
              rounded-lg
            "
            >
              Live Site
            </a>
          )}

        </div>

      </div>
    </div>
  );
}

export default ProjectCard;