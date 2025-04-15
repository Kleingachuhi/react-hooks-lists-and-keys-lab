import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects, technologies }) {
  console.log(projects);

  // const mappedTechnology = technologies.map((technology, index) => {
  //   return <span key={index}>{technology}</span>
  // })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
