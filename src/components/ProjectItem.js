import React from "react";

function ProjectItem({ name, about, technologies }) {

  const technoList = technologies.map((technology) => (
    <span key={technology}>{technology}</span>
  ))

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technoList}
      </div>
    </div>
  );
}

export default ProjectItem;
