import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';

// Extract unique technologies from all projects
const allTechnologies = Array.from(
  new Set(projects.flatMap(project => project.technologies))
).sort();

const Works = () => {
  const [filter, setFilter] = useState(null);
  
  const filteredProjects = filter 
    ? projects.filter(project => project.technologies.includes(filter))
    : projects;

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container">
          <SectionHeading 
            title="My Projects" 
            subtitle="A collection of projects I've worked on. Click on each project to see details, code, and live demos where available."
          />
          
          <motion.div 
            className="mb-8 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button 
              className={`px-3 py-1 rounded-full text-sm border ${
                filter === null 
                  ? 'bg-primary text-primary-foreground border-primary' 
                  : 'bg-transparent border-border text-foreground/70 hover:border-primary/50'
              } transition-colors`}
              onClick={() => setFilter(null)}
            >
              All
            </button>
            
            {allTechnologies.map(tech => (
              <button 
                key={tech} 
                className={`px-3 py-1 rounded-full text-sm border ${
                  filter === tech 
                    ? 'bg-primary text-primary-foreground border-primary' 
                    : 'bg-transparent border-border text-foreground/70 hover:border-primary/50'
                } transition-colors`}
                onClick={() => setFilter(tech)}
              >
                {tech}
              </button>
            ))}
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
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
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground/70">No projects found with the selected technology.</p>
              <button 
                className="mt-4 text-primary hover:underline"
                onClick={() => setFilter(null)}
              >
                Clear filter
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Works;