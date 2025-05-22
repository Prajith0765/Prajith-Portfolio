import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Globe, ArrowRight } from 'lucide-react';

const ProjectCard = ({
  title,
  description,
  image,
  githubLink,
  demoLink,
  technologies,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div 
      className="card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <div 
        className="h-48 overflow-hidden relative"
        onClick={toggleExpand}
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end">
          <h3 className="text-xl font-bold p-4">{title}</h3>
        </div>
      </div>

      <motion.div 
        className="p-4"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        {isExpanded && (
          <>
            <p className="text-foreground/80 mb-4">{description}</p>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium text-foreground/60 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-3">
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline flex items-center gap-2"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
              {demoLink && (
                <a 
                  href={demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary flex items-center gap-2"
                >
                  <Globe size={16} />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </>
        )}
      </motion.div>

      <button
        onClick={toggleExpand}
        className="w-full px-4 py-2 flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors border-t border-border"
      >
        {isExpanded ? 'See Less' : 'See More'}
        <ArrowRight 
          size={16} 
          className={`ml-1 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} 
        />
      </button>
    </motion.div>
  );
};

export default ProjectCard;