import { motion } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';

const CertificateCard = ({ title, issuer, date, image, link }) => {
  return (
    <motion.div 
      className="card overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-70"></div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center text-sm text-foreground/70 mb-2">
          <Award size={16} className="mr-2" />
          <span>{issuer}</span>
        </div>
        
        <div className="flex items-center text-sm text-foreground/70">
          <Calendar size={16} className="mr-2" />
          <span>{date}</span>
        </div>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-3 inline-block text-primary hover:underline text-sm"
          >
            View Certificate
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default CertificateCard;