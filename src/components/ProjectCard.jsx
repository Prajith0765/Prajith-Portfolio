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
      className="card group flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -3 }}
    >
      <div
        className="h-52 overflow-hidden relative cursor-pointer"
        onClick={toggleExpand}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="text-xl font-bold leading-tight">{title}</h3>
        </div>
      </div>

      {/* Always-visible tech preview */}
      <div className="px-5 pt-4 pb-4 flex flex-wrap gap-2">
        {technologies.slice(0, 4).map((tech, index) => (
          <span key={index} className="chip">
            {tech}
          </span>
        ))}
        {technologies.length > 4 && (
          <span className="chip border-border bg-muted text-muted-foreground">
            +{technologies.length - 4}
          </span>
        )}
      </div>

      <motion.div
        className="px-5 overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {isExpanded && (
          <div className="pt-4 pb-1">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {description}
            </p>

            <div className="mb-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/60 mb-2">
                All Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span key={index} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {/* OLD PROJECT (string link) */}
              {typeof githubLink === 'string' && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline !px-4 !py-2 text-sm"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              )}

              {/* NEW PROJECT (frontend + backend) */}
              {typeof githubLink === 'object' && (
                <>
                  {githubLink.frontend && (
                    <a
                      href={githubLink.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline !px-4 !py-2 text-sm"
                    >
                      <Github size={16} />
                      <span>Frontend</span>
                    </a>
                  )}

                  {githubLink.backend && (
                    <a
                      href={githubLink.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline !px-4 !py-2 text-sm"
                    >
                      <Github size={16} />
                      <span>Backend</span>
                    </a>
                  )}
                </>
              )}
              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary !px-4 !py-2 text-sm"
                >
                  <Globe size={16} />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </div>
        )}
      </motion.div>

      <button
        onClick={toggleExpand}
        aria-expanded={isExpanded}
        className="mt-auto w-full px-5 py-3 flex items-center justify-between text-sm text-foreground/70 hover:text-primary transition-colors border-t border-border"
      >
        <span>{isExpanded ? 'See Less' : 'See More'}</span>
        <ArrowRight
          size={16}
          className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
        />
      </button>
    </motion.div>
  );
};

export default ProjectCard;
