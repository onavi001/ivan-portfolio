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

const sections = [
  { id: 'home', component: Hero },
  { id: 'projects', component: Projects },
  { id: 'experience', component: Experience },
  { id: 'skills', component: Skills },
  { id: 'education', component: Education },
  { id: 'contact', component: Contact },
];

function App() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 dark:text-slate-100">
      <Navbar />

      {sections.map((section, index) => {
        const SectionComponent = section.component;
        // Remove animation for Projects section for instant render
        if (section.id === 'projects') {
          return (
            <section key={section.id} id={section.id}>
              <SectionComponent />
            </section>
          );
        }
        return (
          <motion.section
            key={section.id}
            id={section.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            transition={{ delay: index * 0.06 }}
          >
            <SectionComponent />
          </motion.section>
        );
      })}
    </div>
  );
}

export default App;