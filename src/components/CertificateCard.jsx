import { motion } from 'framer-motion';
import { Calendar, Award, ExternalLink } from 'lucide-react';

const CertificateCard = ({ title, issuer, date, image, link }) => {
  return (
    <motion.div
      className="card group flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Award size={16} className="mr-2 text-primary" />
          <span>{issuer}</span>
        </div>

        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar size={16} className="mr-2 text-secondary" />
          <span>{date}</span>
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-primary hover:text-secondary text-sm font-medium transition-colors"
          >
            View Certificate
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default CertificateCard;
