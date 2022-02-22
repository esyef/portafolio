import React from "react"
import CallToAction from "../components/CallToAction"
import Project from "../components/Project"
import { getProjects } from "../data"

const Projects = () => {
  const projects = getProjects()

  return (
    <>
      <article className="mb-20">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </article>
      <CallToAction />
    </>
  )
}

export default Projects
