import React, {useRef, useEffect} from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaDownload } from 'react-icons/fa';
import './Header.scss';

export const Header = () => {

  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Software Engineer', 'Testability Champion'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header className="header">
      <h1>Hi, I'm Olimpia</h1>
      <h2 className="typed-text">
        <span ref={typedElement}></span>
      </h2>
      <img src={require('../assets/cartoon-me.jpg')} />

      <nav>
        <Link to="/">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/testimonials">Testimonials</Link>
      </nav>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/olimpiapater" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href={require('../assets/Olimpia-Pater-CV.pdf')} target="_blank" rel="noopener noreferrer"><FaDownload /></a>
      </div>
    </header>
  );
}

export default Header;
