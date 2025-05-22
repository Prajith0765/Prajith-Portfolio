import { motion } from 'framer-motion';

const TechStack = ({ technologies }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <motion.div 
            className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-card p-4 mb-3 shadow-lg"
            whileHover={{ 
              scale: 1.1, 
              rotate: [0, 10, -10, 0],
              transition: { duration: 0.5 }
            }}
          >
            <img 
              src={tech.icon} 
              alt={tech.name} 
              className="w-full h-full object-contain"
            />
          </motion.div>
          <span className="text-sm text-center">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;