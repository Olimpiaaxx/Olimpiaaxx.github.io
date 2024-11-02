import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.scss';

export const Contact = () => {
  return (
    <motion.section id="contact" initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 50 }}>
    <section id="contact">
      <h2>Contact Me</h2>
      <div>
       <h3><FaPhone />07725077181</h3>
        <h3><FaEnvelope />olimpiapater@gmail.come</h3>
       </div>
    </section>
    </motion.section>
  );
}