import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowRight, MapPin, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import SolarSystem from './SolarSystem';

const roles = [
  {
    title: 'Developer',
    text: 'I build responsive, scalable web applications, turning ideas into clean, maintainable and user-friendly software.',
  },
  {
    title: 'Programmer',
    text: 'I enjoy writing efficient, well-structured code, with strong fundamentals in data structures, algorithms and object-oriented design.',
  },
  {
    title: 'Problem Solver',
    text: 'I break complex problems into simple steps and use logic and analysis to find practical, efficient solutions.',
  },
  {
    title: 'Computer Engineer',
    text: 'Computer Science and Engineering background with solid foundations in databases, operating systems, networks and software design.',
  },
  {
    title: 'Tech Enthusiast',
    text: 'I keep exploring emerging tools and technologies, always learning and building to grow in a fast-changing field.',
  },
];

const Typewriter = ({ words, index, setIndex }) => {
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let delay = deleting ? 40 : 85;

    if (!deleting && text === word) delay = 1600;
    if (deleting && text === '') delay = 350;

    const timeout = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, setIndex]);

  return (
    <span className="gradient-text">
      {text}
      <span className="inline-block w-[3px] h-[0.9em] ml-1 align-middle bg-secondary animate-pulse" />
    </span>
  );
};

const socials = [
  { label: 'GitHub', href: 'https://github.com/Prajith0765', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prajith0765/', icon: Linkedin },
  { label: 'Email', href: 'mailto:prajith2873@outlook.com', icon: Mail },
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roleTitles = roles.map((r) => r.title);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen flex items-center pt-28 pb-24 relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          {/* Left column */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.h1
              variants={item}
              className="heading-1 mb-6 leading-[1.15]"
              style={{ fontSize: 'clamp(1.7rem, 3.3vw, 3rem)' }}
            >
              <span className="block whitespace-nowrap">
                Hi, I'm <span className="text-foreground">Prajith</span>
              </span>
              <span className="block whitespace-nowrap">
                I'm a <Typewriter words={roleTitles} index={roleIndex} setIndex={setRoleIndex} />
              </span>
            </motion.h1>

            <motion.div variants={item} className="max-w-xl mb-8 min-h-[6.5rem] sm:min-h-[5.5rem]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  className="text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  {roles[roleIndex].text}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-8">
              <NavLink to="/works" className="btn btn-primary group">
                View My Work
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </NavLink>
              <NavLink to="/contact" className="btn btn-outline">
                Get in Touch
              </NavLink>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="flex items-center gap-2">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-xl border border-border bg-card/60 text-foreground/70 hover:text-white hover:border-primary hover:bg-primary/20 transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <span className="hidden sm:block h-6 w-px bg-border" />
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-secondary" />
                Coimbatore, Tamil Nadu, India
              </span>
            </motion.div>
          </motion.div>

          {/* Right column: orbiting tech solar system */}
          <motion.div
            className="relative pb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SolarSystem />
          </motion.div>
        </div>
      </div>

      <Link
        to="tech-stack"
        spy={true}
        smooth={true}
        duration={500}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="text-foreground/40 hover:text-primary transition-colors"
        >
          <ArrowDown size={20} />
        </motion.div>
      </Link>
    </section>
  );
};

export default HeroSection;
