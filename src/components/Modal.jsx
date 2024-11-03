import React from 'react';
import { motion } from 'framer-motion';
import './Modal.scss';

function Modal({ project, onClose }) {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside content
      >
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h3>{project.title}</h3>
        <h4>{project.date}</h4>
        <p>{project.description}</p>
        <h5>Responsibilities</h5>
        <ul>
          {project.extraInfo.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
        <h5>Key Technologies</h5>
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="technology-badge">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Modal;
