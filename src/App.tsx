import { motion, easeOut } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      
      <motion.section id="home" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Hero />
      </motion.section>

      <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Experience />
      </motion.section>

      <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Projects />
      </motion.section>

      <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Skills />
      </motion.section>

      <motion.section id="education" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Education />
      </motion.section>

      <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Contact />
      </motion.section>
    </div>
  );
}

export default App;