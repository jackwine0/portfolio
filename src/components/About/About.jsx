import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about-section">
      <div className="about">
        <h2>ABOUT ME</h2>
      </div>

      <p>
        I’m a passionate front-end developer with a keen eye for design and a deep love for crafting seamless user experiences. With a solid foundation in HTML, CSS, and JavaScript, I thrive on transforming creative concepts into functional, interactive websites and applications. My focus is on creating responsive, accessible, and visually engaging interfaces that provide users with an intuitive experience, no matter the device.
      </p>
      <div className="expertise-grid">
        <div className="expertise-item">
          <h4>Design</h4>
          <p>
            My design approach is centered around simplicity and usability. I believe in the power of minimalistic design that not only looks good but also enhances user interaction. I work closely with designers to ensure that every pixel serves a purpose and aligns with the overall vision of the project.
          </p>
        </div>
        <div className="expertise-item">
          <h4>Development</h4>
          <p>
            I specialize in writing clean, efficient code that adheres to the latest web standards. Whether it's developing a fully responsive website or optimizing the performance of an existing application, I ensure that my code is scalable, maintainable, and built to last.
          </p>
        </div>
        <div className="expertise-item">
          <h4>Maintenance</h4>
          <p>
            Beyond development, I provide ongoing support and maintenance to keep projects running smoothly. From fixing bugs to implementing new features, I make sure that the websites and applications I work on are always up-to-date and performing at their best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
