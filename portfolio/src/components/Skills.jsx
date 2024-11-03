import React, { useState} from 'react';
import 'src/components/Skills.scss';
import { motion } from 'framer-motion';

const skills = [
    {
      id: 1,
      type: 'Languages',
      technologies: ['TypeScript', 'JavaScript', 'GraphQL']
    },
    {
        id: 2,
        type: 'Libraries & Frameworks',
        technologies: ['React', 'GraphQL', 'Redux', 'React Testing Library', 'Jest', 'Playwright', 'Fluent UI', 'Bootstrap', 'Material UI']
      },     
       {
        id: 3,
        type: 'Monitoring',
        technologies: ['Grafana', 'New Relic', 'Sentry', 'Promotheus']
      },
      {
        id: 4,
        type: 'Datastores',
        technologies: ['BigQuery']
      },
      {
        id: 5,
        type: 'Infrastructure',
        technologies: ['Google Cloud Platform', 'Kubernetes', 'Docker', 'Jenkins']
      },
      {
        id: 6,
        type: 'Other',
        technologies: ['Git', 'Github', 'Jira', 'ClickUp', 'Agile', 'SDLC', 'Figma', 'A/B Testing', 'Sanity']
      },
  ];

export const Skills = () => {
    const [expandedProject, setExpandedProject] = useState(null);

    const toggleExpand = (id) => {
      setExpandedProject(expandedProject === id ? null : id);
    };
  return (
    <motion.section id="skills" initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 50 }}>
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
      {skills.map((skill) => (
          <div key={skill.id} className="skills-card">
            <div className="skills-content">
              <h3>{skill.type}</h3>
              <button onClick={() => toggleExpand(skill.id)}>
                {expandedProject === skill.id ? 'Show Less' : 'Show more'}
              </button>
              {expandedProject === skill.id && (
                <div className="skills-info">
                  <ul>
                    {skill.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
    </motion.section>
  );
};
