import ProjectLinks from "@/components/ProjectLinks"

export default function ProjectCard({ project }) {
  const tags = Array.isArray(project.tags)
    ? project.tags
    : project.tags
      ? [project.tags]
      : []

  return (
    <div className="card bg-base-200 w-full h-full shadow-lg flex flex-col overflow-hidden">

      <div className="relative aspect-square">
        <figure className="hover-gallery size-full">
          {project.images.map((image, i) => (
            <img key={image} src={image} alt={`${project.title} billede ${i + 1}`} />
          ))}
        </figure>
        <ProjectLinks code={project.code} video={project.video} link={project.link} />
      </div>

      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <p className="mb-4">{project.description}</p>

        {tags.length > 0 && (
          <div className="card-actions mt-auto justify-end">
            {tags.map((tag) => (
              <div key={tag} className="badge badge-outline">{tag}</div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}
