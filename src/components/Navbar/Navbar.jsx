import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <img
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmJlbzB6aGZvcGd3ZG55M2wxdm95a21odjBwdmhlZDBma2dmMmhraiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26uf8tQf6WVQPxP9u/giphy.gif"
          height={"50px"}
          alt="Logo"
        />
      </a>
      <ul className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
        <li><a href="#about-section">About</a></li>
        <li><a href="#skills-section">Skills</a></li>
        <li><a href="#portfolio-container">Portfolio</a></li>
        <li><a href="#contact-form-container">Contact</a></li>
      </ul>
      <button className="navbar__toggle" onClick={toggleNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
