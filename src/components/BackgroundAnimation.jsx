import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const glyphs = [
  { t: '</>', x: '6%', y: '18%', d: 0, s: 26 },
  { t: '{ }', x: '88%', y: '14%', d: 2, s: 30 },
  { t: '=>', x: '14%', y: '62%', d: 4, s: 24 },
  { t: 'git', x: '92%', y: '58%', d: 1, s: 20 },
  { t: '[ ]', x: '48%', y: '8%', d: 3, s: 22 },
  { t: '();', x: '78%', y: '82%', d: 5, s: 24 },
  { t: 'SQL', x: '4%', y: '86%', d: 2.5, s: 18 },
  { t: '#', x: '60%', y: '90%', d: 1.5, s: 26 },
  { t: 'API', x: '30%', y: '40%', d: 3.5, s: 18 },
];

const BackgroundAnimation = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-grid opacity-70" />

      {/* Slowly drifting aurora glows */}
      <div className="aurora aurora-1 absolute -top-56 left-1/4 w-[44rem] h-[44rem] rounded-full bg-primary/20 blur-[150px]" />
      <div className="aurora aurora-2 absolute top-1/3 -right-48 w-[38rem] h-[38rem] rounded-full bg-accent/15 blur-[150px]" />
      <div className="aurora aurora-3 absolute -bottom-56 -left-32 w-[38rem] h-[38rem] rounded-full bg-secondary/15 blur-[150px]" />

      {/* Floating code symbols */}
      {glyphs.map((g) => (
        <span
          key={g.t + g.x}
          className="code-glyph absolute font-mono font-semibold text-primary/20 select-none"
          style={{ left: g.x, top: g.y, fontSize: g.s, animationDelay: `${g.d}s` }}
        >
          {g.t}
        </span>
      ))}

      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          background: { color: { value: 'transparent' } },
          fullScreen: { enable: false },
          fpsLimit: 60,
          detectRetina: true,
          interactivity: {
            detectsOn: 'window',
            events: {
              onHover: { enable: true, mode: 'grab' },
              resize: true,
            },
            modes: {
              grab: { distance: 160, links: { opacity: 0.35 } },
            },
          },
          particles: {
            color: { value: ['#818cf8', '#a78bfa', '#22d3ee'] },
            links: {
              color: '#6366f1',
              distance: 140,
              enable: true,
              opacity: 0.14,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: 'none',
              outModes: { default: 'bounce' },
            },
            number: { density: { enable: true, area: 900 }, value: 55 },
            opacity: {
              value: { min: 0.2, max: 0.6 },
              animation: { enable: true, speed: 0.6, minimumValue: 0.2, sync: false },
            },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 2.5 } },
          },
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
