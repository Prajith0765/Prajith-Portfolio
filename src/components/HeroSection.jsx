import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const HeroSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative">
      <motion.div 
        className="container text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 
          className="heading-1 mb-4 inline-block"
          variants={item}
        >
          Hi, I'm <span className="text-primary">Prajith</span>
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-3xl font-light mb-6 text-foreground/80"
          variants={item}
        >
          Web Developer | UI/UX Designer | Programmer
        </motion.h2>
        
        <motion.p 
          className="max-w-2xl mx-auto text-lg text-foreground/70 mb-8"
          variants={item}
        >
          I create beautiful, functional, and responsive web applications 
          with modern technologies and a focus on user experience.
        </motion.p>
        
        <motion.div className="flex flex-wrap justify-center gap-4" variants={item}>
          <a 
            href="/contact" 
            className="btn btn-primary"
          >
            Get in Touch
          </a>
          <a 
            href="/works" 
            className="btn btn-outline"
          >
            View My Work
          </a>
        </motion.div>
      </motion.div>

      <Link
        to="tech-stack"
        spy={true}
        smooth={true}
        duration={500}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-foreground/50 hover:text-primary transition-colors"
        >
          <ArrowDown size={24} />
        </motion.div>
      </Link>
    </section>
  );
};

export default HeroSection;