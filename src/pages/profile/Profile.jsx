import React from "react";
import "./Profile.css";
import profile_img from "../../profile_img.png";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const Profile = () => {
  return (
    <div className="bg-profile">
      <div className="image-div">
        <img src={profile_img} alt="pic" />
      </div>
      <div className="info-div">
        <h3>
          Name: <span>Surya Narayana Murthy</span>
        </h3>
        <h3>
          Job Role: <span>Software Developer</span>
        </h3>
        <h3>
          Contact Number: <span>8978545846</span>
        </h3>
        <h3>
          Email Id: <span>suryanalam3011@gmail.com</span>
        </h3>
        <h3>
          Portfolio Link:{" "}
          <a href="https://suryanalam/portfolio">
            <span>https://suryanalam/portfolio</span>
          </a>
        </h3>
        <div className="social-media">
          <a href="https://github.com/suryanalam" target="_blank" rel="noreferrer">
            <BsGithub className="sm-icons" size="1rem" />
          </a>
          <a href="https://www.linkedin.com/in/surya-narayana-murthy-nalam" target="_blank" rel="noreferrer">
            <BsLinkedin className="sm-icons" size="1rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
