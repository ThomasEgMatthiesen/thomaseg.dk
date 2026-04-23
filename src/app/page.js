import { projects } from "@/lib/projects"
import Header from "@/components/Header"
import ProjectCard from "@/components/ProjectCard"

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24 p-6 xl:p-24 mx-auto max-w-7-xl">
        <div className="grid gap-6 xl:gap-12 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </main>
    </>
  )
}
