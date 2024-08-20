import React from 'react';
import { FaTwitter, FaCodepen, FaEnvelope, FaGithub, FaPhone, FaLinkedin } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  const socialLinks = [
    { url: 'www.linkedin.com/in/akande-samuelx', icon: <FaLinkedin /> },
    { url: 'tel:+2348149934261', icon: <FaPhone /> },
    { url: 'mailto:samakande98@gmail.com', icon: <FaEnvelope /> },
    { url: 'https://github.com/jackwine0', icon: <FaGithub /> },
  ];

  return (
    <footer>
      <div className="footer-links">
        <ul>
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="copywright">
        <p>&copy; {new Date().getFullYear()} All rights reserved</p>
      </div>
      <div className="back-to-top">
        <a href="#">Back to top</a>
      </div>
    </footer>
  );
};

export default Footer;