import { motion } from 'framer-motion';

const ContactLink = ({ platform, link, icon: Icon, username }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group"
      whileHover={{ y: -5 }}
    >
      <div className="mr-4 bg-primary/10 p-3 rounded-full text-primary">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
          {platform}
        </h3>
        <p className="text-sm text-foreground/70">{username}</p>
      </div>
    </motion.a>
  );
};

export default ContactLink;