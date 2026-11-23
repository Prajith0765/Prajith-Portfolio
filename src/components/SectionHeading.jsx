import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, eyebrow, centered = false }) => {
  return (
    <motion.div
      className={`mb-14 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <span
          className={`flex items-center gap-3 mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-secondary ${
            centered ? 'justify-center' : ''
          }`}
        >
          <span className="h-px w-8 bg-gradient-to-r from-secondary to-transparent" />
          {eyebrow}
        </span>
      )}
      <h2 className="heading-2 text-foreground">
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary via-accent to-secondary ${
          centered ? 'mx-auto' : ''
        }`}
      />
      {subtitle && (
        <p
          className={`text-muted-foreground mt-5 max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
