import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import TechStack from '../components/TechStack';
import { technologies } from '../data/technologies';

const experience = [
  {
    title: 'Junior Software Engineer (Full-stack .NET)',
    company: 'UniteCare Software Solutions',
    period: 'Jul 2026 - Present',
    location: 'Coimbatore, Tamil Nadu',
    techstack: ['Angular', '.NET Framework', 'C#', 'SQL Server'],
    description:
      'Building and maintaining real-world products as part of a development team, including live production bug fixing.',
    current: true,
  },
  {
    title: 'Intern (Full-stack Software Developer)',
    company: 'UniteCare Software Solutions',
    period: 'Jan 2026 - Jun 2026',
    location: 'Coimbatore, Tamil Nadu',
    techstack: ['Angular', '.NET Framework', 'C#', 'SQL Server'],
    description:
      'Collaborated with a team to build and maintain real-world products and fix live bugs.',
  },
];

const education = [
  {
    degree: 'Bachelors in Computer Science and Engineering',
    institution: 'Dr. Mahalingam College of Engineering and Technology, Pollachi',
    period: '2022 - 2026',
    description: 'Graduating B.E. in Computer Science and Engineering with 8.61 CGPA.',
  },
  {
    degree: 'Higher Secondary School (HSC)',
    institution: 'Bethlahem Matric Higher Secondary School, Kanyakumari',
    period: '2022',
    description: 'Completed higher secondary education securing 83% overall.',
  },
  {
    degree: 'Secondary School (SSLC)',
    institution: 'Bethlahem Matric Higher Secondary School, Kanyakumari',
    period: '2020',
    description: 'Completed secondary education securing 89% overall.',
  },
];

const highlights = [
  { label: 'Role', value: 'Junior Software Engineer' },
  { label: 'Company', value: 'UniteCare Software Solutions' },
  { label: 'Core Stack', value: 'Angular · .NET · C# · SQL Server' },
  { label: 'Also', value: 'React · Node.js · Salesforce' },
];

const Timeline = ({ items, accent, icon: Icon, heading, delay = 0, renderItem }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
      <span
        className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${
          accent === 'primary'
            ? 'bg-primary'
            : 'bg-secondary'
        }`}
      >
        <Icon size={20} />
      </span>
      {heading}
    </h3>

    <div className="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-5 before:w-px before:bg-gradient-to-b before:from-primary/60 before:via-border before:to-transparent">
      {items.map((item, index) => (
        <div key={index} className="relative pl-14">
          <span
            className={`absolute left-[11px] top-6 w-[18px] h-[18px] rounded-full border-4 bg-background z-10 ${
              accent === 'primary' ? 'border-primary' : 'border-secondary'
            }`}
          />
          <div className="card p-5">{renderItem(item)}</div>
        </div>
      ))}
    </div>
  </motion.div>
);

const About = () => {
  return (
    <div className="pt-20">
      <section className="section-padding min-h-[70vh] flex items-center">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="flex items-center gap-3 mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                <span className="h-px w-8 bg-gradient-to-r from-secondary to-transparent" />
                About
              </span>
              <h1 className="heading-1 mb-6">
                Building reliable software, <span className="text-primary">from idea to production</span>
              </h1>

              <p className="text-lg text-foreground/80 mb-5 leading-relaxed">
                Hello! I'm <span className="text-primary font-semibold">Prajith</span>, a Junior Software
                Engineer at <span className="text-foreground font-medium">UniteCare Software Solutions</span>,
                with a strong foundation in Computer Science and a passion for building responsive, efficient and
                user-friendly web applications.
              </p>

              <p className="text-muted-foreground mb-5 leading-relaxed">
                I started at UniteCare as a Software Development Intern and moved into a full-time developer role,
                working on real-world product development and live bug fixing with Angular, .NET, C# and SQL Server.
                I have a B.E. in Computer Science and Engineering, and my work blends front-end creativity with
                back-end logic to deliver seamless digital experiences.
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Beyond coding, I enjoy exploring emerging tools in web development, collaborating on innovative
                ideas, and staying active to maintain a balanced and inspired lifestyle.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {highlights.map((h) => (
                  <div key={h.label} className="glass px-4 py-3">
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{h.label}</div>
                    <div className="text-sm font-medium mt-0.5">{h.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <NavLink to="/contact" className="btn btn-primary">
                  Let's Talk
                </NavLink>
                <NavLink to="/works" className="btn btn-outline">
                  See My Work
                </NavLink>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full max-w-xs lg:max-w-sm mx-auto">
                <div className="rounded-2xl border border-border bg-card p-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                    <img
                      src="/images/prajith-photo.jpg"
                      alt="Prajith"
                      className="w-full h-full object-cover object-[50%_20%] saturate-[0.8]"
                    />
                    <div className="absolute inset-0 bg-primary/25 mix-blend-multiply" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card/30 border-y border-border/50">
        <div className="container">
          <SectionHeading
            eyebrow="Skills"
            title="My Skills"
            subtitle="I've worked with a range of technologies in the web development world, from front-end to back-end."
          />

          <TechStack technologies={technologies} />
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            eyebrow="Journey"
            title="Experience & Education"
            subtitle="My professional journey and academic background."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <Timeline
              items={experience}
              accent="primary"
              icon={Briefcase}
              heading="Work Experience"
              renderItem={(job) => (
                <>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h4 className="text-lg font-semibold leading-snug">{job.title}</h4>
                    {job.current && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs bg-emerald-400/10 text-emerald-300 border border-emerald-400/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-primary font-medium">{job.company}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground my-2">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {job.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} /> {job.location}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80 mb-3 leading-relaxed">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.techstack.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              )}
            />

            <Timeline
              items={education}
              accent="secondary"
              icon={GraduationCap}
              heading="Education"
              delay={0.2}
              renderItem={(edu) => (
                <>
                  <h4 className="text-lg font-semibold leading-snug">{edu.degree}</h4>
                  <p className="text-secondary font-medium text-sm mt-1">{edu.institution}</p>
                  <p className="flex items-center gap-1.5 text-sm text-muted-foreground my-2">
                    <Calendar size={14} /> {edu.period}
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{edu.description}</p>
                </>
              )}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
