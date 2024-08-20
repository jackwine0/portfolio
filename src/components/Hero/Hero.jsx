import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <div>
        <h4>Hi, I am</h4>
        <h1>Akande Samuel</h1>
        <h3>Frontend Web Developer</h3>
        </div>
        <div>
          <a
            href="https://github.com/jackwine0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="logo-icon" />
          </a>
          <a
            href="www.linkedin.com/in/akande-samuelx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="logo-icon" />
          </a>
          <a href="samakande98@example.com">
            <FontAwesomeIcon icon={faGoogle} className="logo-icon" />
          </a>
        </div>
      </div>

      <div className="image-content">
        <img
          src="https://res.cloudinary.com/duicyr28v/image/upload/v1723834166/2412bf30-b954-487b-9845-578bca25c633_hrnq4z.gif"
          alt="Your Name"
        />
      </div>
    </div>
  );
};

export default Hero;
