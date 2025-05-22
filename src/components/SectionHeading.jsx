import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, centered = false }) => {
  return (
    <motion.div 
      className={`mb-12 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="heading-2 text-foreground relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="text-foreground/70 mt-4 max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;