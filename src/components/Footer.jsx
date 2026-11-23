import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Works', path: '/works' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Contact', path: '/contact' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/Prajith0765', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prajith0765/', icon: Linkedin },
  { label: 'Email', href: 'mailto:prajith2873@outlook.com', icon: Mail },
  { label: 'Instagram', href: 'https://instagram.com/prajith9344/', icon: Instagram },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border bg-card/40 backdrop-blur-md">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center font-display font-bold text-white">
                P
              </span>
              <span className="font-display text-lg font-semibold">
                Prajith
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Full-stack developer building reliable, scalable web applications with Angular, .NET and modern web technologies.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground/80 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground/80 mb-4">
              Let's Connect
            </h4>
            <div className="flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-border bg-card/60 text-foreground/70 hover:text-white hover:border-primary hover:bg-primary/20 hover:-translate-y-1 transition-all"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <p>© {currentYear} Prajith. All rights reserved.</p>
          <p>Designed &amp; built with React, Tailwind CSS &amp; Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
