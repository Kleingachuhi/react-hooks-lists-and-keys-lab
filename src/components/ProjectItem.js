import React from "react";

function ProjectItem({ name, about, technologies }) {

// const mappedTechnologies = technologies.map((mappedTechnology, index) => {
//   return <span key={index}> {mappedTechnology}</span>
// })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;