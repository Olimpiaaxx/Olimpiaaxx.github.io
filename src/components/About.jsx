import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';

export const About = () => {
  return (
    <motion.section id="about" initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 50 }}>
      <h2>About Me</h2>
      <p>I am a self-taught software engineer with the <b>you build it, you run it</b> mindset and a passion for front-end development. 
        I have over three years of experience in TypeScript, React, and Redux. 
        I’m currently working at loveholidays where I am expanding my knowledge 
        and learning technologies such as BigQuery, GraphQL, and Grafana. </p>
    </motion.section>
  );
}

