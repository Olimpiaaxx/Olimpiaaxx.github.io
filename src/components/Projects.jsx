import React, {useState} from 'react';
import { motion } from 'framer-motion';
import 'src/components/Projects.scss';
import Modal from 'src/components/Modal';

const projectsData = [
  {
    id: 1,
    title: 'Software Engineer @ loveholidays',
    date: 'June 2024 - present',
    description: 'Part of the Checkout team focusing on implementing the right features to drive conversion rate',
    extraInfo: [
      'Developing, testing, and releasing meaningful changes prioritising positive customer outcome',
      'Investigating and monitoring alerts, errors, and production bugs',
      'Taking part in on-call duties to ensure smooth experience for the users',
      'Working with data products such as BigQuery to understand the customer impact',
      'Providing support to non-technical colleagues by implementing simple features in Sanity, answering queries, and dealing with requests'
    ],
    technologies: ['React', 'TypeScript', 'GraphQL', 'Grafana', 'BigQuery', 'Sentry'],
  },
  {
    id: 2,
    title: 'Software Engineer @ Elsevier',
    date: 'May 2021 - March 2024',
    description: `Part of the Mendeley Cite team building a referencing tool to help researchers and students with their publications.`,
    extraInfo: [
      'Participated in user research sessions to understand the user journey, and their pain points, and gather feedback for improvements',
      'Successfully tested, modified, and deployed new features in fortnightly releases',
      'Established a better understanding of testing within the team as the testability expert and improved existing testing processes. Gave a company-wide presentation advocating the enhanced testing strategy',
      'Improved app accessibility by introducing the jest-axe library for screen-readers and participating in workshops and pair programming sessions. Received an award for implementation of accessibility into the main flow of the product',
      'Took the initiative to create debugging tools to help efficiently resolve support queries',
      'Worked closely with the Microsoft team to discuss their new releases and better understand how it may help Mendeley Cite.'
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'New Relic', 'Jest', 'React Testing Library'],
  },
];

export const  Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <motion.section id="projects" initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 50 }}>
    <section className="projects">
      <h2>Work Experience</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-content">
              <h3>{project.title}</h3>
              <h4>{project.date}</h4>
              <p>{project.description}</p>
              <button onClick={() => openModal(project)}>Learn more</button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </section>
    </motion.section>
  );
};