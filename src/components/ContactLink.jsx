import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ContactLink = ({ platform, link, icon: Icon, username }) => {
  return (
    <motion.a
      href={link}
      target={link.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className="flex items-center p-5 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:border-primary/50 transition-all group"
      whileHover={{ y: -5 }}
    >
      <div className="mr-4 bg-gradient-to-br from-primary/20 to-accent/20 p-3 rounded-xl text-primary group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all">
        <Icon size={24} />
      </div>
      <div className="flex-grow min-w-0">
        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
          {platform}
        </h3>
        <p className="text-sm text-muted-foreground truncate">{username}</p>
      </div>
      <ArrowUpRight
        size={18}
        className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
      />
    </motion.a>
  );
};

export default ContactLink;
