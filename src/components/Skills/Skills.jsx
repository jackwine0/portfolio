import React from "react";
import { FaHtml5, FaCss3, FaReact, FaGit, FaFigma, FaJs } from "react-icons/fa";
import {
  SiNodedotjs,
  SiPostgresql,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import './Skills.css'


const Skills = () => {
  return (
    <div id="skills-section">
      <h2>SKILLS</h2>
      <h3>Using</h3>
      <br />
      <div className="grid">
        <div className="icon">
          <FaHtml5 size={36} />
          <p>HTML5</p>
        </div>
        <div className="icon">
          <FaCss3 size={36} />
          <p>CSS3</p>
        </div>
        <div className="icon">
          <FaReact size={36} />
          <p>React</p>
        </div>
        <div className="icon">
          <FaGit size={36} />
          <p>Git</p>
        </div>
        <div className="icon">
          <FaFigma size={36} />
          <p>Figma</p>
        </div>
        <div className="icon">
          <FaJs size={36} />
          <p>JavaScript</p>
        </div>
      </div>
      <br />
      <h3 >Learning</h3>
      <br />
      <div className="grid">
        <div className="icon">
          <SiNodedotjs size={36} />
          <p>Node.js</p>
        </div>
        <div className="icon">
          <SiPostgresql size={36} />
          <p>PostgreSQL</p>
        </div>
        <div className="icon">
          <SiTypescript size={36} />
          <p>TypeScript</p>
        </div>
        <div className="icon">
          <SiMongodb size={36} />
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
