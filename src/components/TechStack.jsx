import { motion } from 'framer-motion';

const categoryOrder = ['Languages', 'Frontend', 'Backend', 'Databases', 'Tools & Platforms'];

const TechStack = ({ technologies }) => {
  const groups = categoryOrder
    .map((category) => ({
      category,
      items: technologies.filter((t) => t.category === category),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="space-y-8">
      {groups.map((group, gi) => (
        <motion.div
          key={group.category}
          className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: gi * 0.05 }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground pt-3">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-3">
            {group.items.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-3 pl-2 pr-4 py-2 rounded-xl border border-border bg-card/60 hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                <span className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center p-1.5 shrink-0">
                  <img
                    src={tech.icon}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </span>
                <span className="text-sm font-medium text-foreground/90">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;
