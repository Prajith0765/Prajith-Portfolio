import { Element } from 'react-scroll';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import TechStack from '../components/TechStack';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { technologies } from '../data/technologies';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Only show first 3 projects on home page
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      <HeroSection />

      <Element name="tech-stack">
        <section className="section-padding bg-card/30 border-y border-border/50">
          <div className="container">
            <SectionHeading
              eyebrow="Skills"
              title="My Tech Stack"
              subtitle="The languages, frameworks and tools I use to bring ideas to life."
              centered
            />

            <TechStack technologies={technologies} />
          </div>
        </section>
      </Element>

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured Projects"
            subtitle="A selection of things I've built. Open a project to see details, tech used and source code."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
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
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/works" className="btn btn-outline group">
              View All Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-border bg-card/60 px-6 py-14 md:py-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                Let's work together
              </span>
              <h2 className="heading-2 mt-3 mb-4">
                Have a project or opportunity in mind?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                I'm open to new roles and freelance work. Drop me a message and
                I'll get back to you as soon as possible.
              </p>
              <Link to="/contact" className="btn btn-primary">
                <Mail size={18} />
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
