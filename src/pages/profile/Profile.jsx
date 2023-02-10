import React from "react";
import "./Profile.css";
import "../../profile_img.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiMail, HiPhone } from "react-icons/hi";
import CalendarSection from "../../components/calendar/CalendarSection";
import ProjectCard from "../../components/project-card/ProjectCard";

const Profile = () => {
  return (
    <div className="bg-page">
      <div className="profile-top-div">
        <div className="details-div">
          <h1>Nalam Surya Narayana Murthy</h1>
          <h2>Software Developer</h2>
          <p>Reach me here:</p>
          <div className="social-media">
            <a href="tel:+918978545846">
              <HiPhone className="sm-icons" size="1.5rem" />
            </a>
            <a href="mailto:suryanalam3011@gmail.com<">
              <HiMail className="sm-icons" size="1.5rem" />
            </a>
            <a
              href="https://github.com/suryanalam"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="sm-icons" size="1.5rem" />
            </a>
            <a
              href="https://www.linkedin.com/in/surya-narayana-murthy-nalam"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="sm-icons" size="1.5rem" />
            </a>
          </div>
        </div>

        <div className="img-div"></div>
      </div>

      <div className="profile-down-div">
        <CalendarSection />
        <div className="upcoming-projects">
          <h2>Upcoming Projects:</h2>
          <ProjectCard pid="1" date={"13 February"} loc="Hyderabad" />
          <ProjectCard pid="1" date={"25 February"} loc="Bangalore" />
          <ProjectCard pid="3" date={"10 March"} loc="Pune" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
