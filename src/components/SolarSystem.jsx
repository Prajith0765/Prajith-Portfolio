import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { technologies } from '../data/technologies';

const iconOf = (name) => technologies.find((t) => t.name === name)?.icon;

// Each ring is an "orbit". size = diameter as % of the container.
const orbits = [
  {
    label: 'Backend',
    size: 40,
    duration: 24,
    reverse: false,
    ring: 'border-primary/50',
    moon: 'bg-primary text-primary',
    items: ['C#', '.NET Framework', 'SQL Server'],
  },
  {
    label: 'Frontend',
    size: 68,
    duration: 38,
    reverse: true,
    ring: 'border-accent/50',
    moon: 'bg-accent text-accent',
    items: ['Angular', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    label: 'Tools & More',
    size: 96,
    duration: 56,
    reverse: false,
    ring: 'border-secondary/40',
    moon: 'bg-secondary text-secondary',
    items: ['Git', 'GitHub', 'Node.js', 'MongoDB', 'Salesforce'],
  },
];


const SolarSystem = () => {
  return (
    <div className="w-full max-w-[540px] mx-auto" style={{ maxWidth: 'min(540px, 62vh)' }}>
      <div className="solar relative aspect-square w-full" style={{ containerType: 'inline-size' }}>
        {/* ambient glow */}
        <div className="absolute inset-[18%] rounded-full bg-gradient-to-br from-primary/40 via-accent/25 to-secondary/30 blur-3xl" />

        {/* orbit rings + planets */}
        {orbits.map((orbit, oi) => (
          <div
            key={orbit.label}
            className={`absolute rounded-full border border-dashed ${orbit.ring}`}
            style={{
              width: `${orbit.size}%`,
              height: `${orbit.size}%`,
              top: `${(100 - orbit.size) / 2}%`,
              left: `${(100 - orbit.size) / 2}%`,
            }}
          >
            <div
              className="orbit absolute inset-0"
              style={{
                '--dur': `${orbit.duration}s`,
                '--dir': orbit.reverse ? 'reverse' : 'normal',
              }}
            >
              {/* small moon travelling on the ring */}
              <span
                className={`absolute w-2 h-2 rounded-full ${orbit.moon}`}
                style={{
                  left: `${50 + 50 * Math.cos(((oi * 70 + 200) * Math.PI) / 180)}%`,
                  top: `${50 + 50 * Math.sin(((oi * 70 + 200) * Math.PI) / 180)}%`,
                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0 0 12px 2px currentColor',
                }}
              />
              {orbit.items.map((name, i) => {
                const angle = (360 / orbit.items.length) * i + oi * 25;
                const rad = (angle * Math.PI) / 180;
                const left = 50 + 50 * Math.cos(rad);
                const top = 50 + 50 * Math.sin(rad);
                return (
                  <div
                    key={name}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${left}%`, top: `${top}%` }}
                  >
                    <div
                      className="orbit-counter"
                      style={{
                        '--dur': `${orbit.duration}s`,
                        '--dir': orbit.reverse ? 'normal' : 'reverse',
                      }}
                    >
                      <motion.div
                        style={{ width: '9.5cqw', height: '9.5cqw', padding: '1.6cqw' }}
                        className="group relative rounded-[22%] bg-slate-100 shadow-lg shadow-black/50 ring-2 ring-white/10 hover:ring-primary hover:scale-110 transition-all cursor-default"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + oi * 0.25 + i * 0.1, type: 'spring', stiffness: 160 }}
                      >
                        <img src={iconOf(name)} alt={name} className="w-full h-full object-contain" />
                        <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-card border border-border px-2 py-0.5 text-[11px] text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                          {name}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Sun / core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            style={{ width: '24cqw', height: '24cqw' }}
            className="relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <span className="sun-pulse absolute inset-0 rounded-full bg-primary/40" />
            <span className="sun-pulse absolute inset-0 rounded-full bg-accent/30" style={{ animationDelay: '1.4s' }} />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-indigo-400 via-violet-500 to-cyan-400 flex items-center justify-center shadow-[0_0_60px_rgba(129,140,248,0.6)]">
              <Code2 className="text-white drop-shadow-lg" style={{ width: '11cqw', height: '11cqw' }} strokeWidth={1.8} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SolarSystem;
