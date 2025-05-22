import { Element } from 'react-scroll';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import TechStack from '../components/TechStack';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { technologies } from '../data/technologies';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Only show first 3 projects on home page
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      <HeroSection />
      
      <Element name="tech-stack">
        <section className="section-padding bg-card/30">
          <div className="container">
            <SectionHeading 
              title="My Tech Stack" 
              subtitle="These are the technologies I work with to bring ideas to life."
              centered
            />
            
            <TechStack technologies={technologies} />
          </div>
        </section>
      </Element>
      
      <section className="section-padding">
        <div className="container">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Here are some of my recent projects. Click on each project to learn more."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map(project => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
                technologies={project.technologies}
              />
            ))}
          </div>
          
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/works" 
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
            >
              View All Projects
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      <section className="section-padding bg-card/30">
        <div className="container">
          <SectionHeading 
            title="Get In Touch"
            subtitle="Interested in working together? Feel free to reach out to me through any of these platforms."
            centered
          />
          
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/contact" 
              className="btn btn-primary"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;