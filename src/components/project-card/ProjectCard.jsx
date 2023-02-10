import React from "react";
import "./ProjectCard.css";
const ProjectCard = ({ pid, date, loc }) => {
  return (
    <div className="project-details-div">
      <h2>Project{pid}:</h2>
      <h4>
        Deadline: {date} | {loc}{" "}
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
    </div>
  );
};

export default ProjectCard;
