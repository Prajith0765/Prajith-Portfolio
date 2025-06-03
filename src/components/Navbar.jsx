import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Works', path: '/works' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Contact', path: '/contact' },
];

// ScrollToTop component: instantly scrolls to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Instant scroll for no lag
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Debounced scroll event handler to improve performance
  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      if (timeoutId) return; // throttle updates to once every 100ms

      timeoutId = setTimeout(() => {
        setScrolled(window.scrollY > 50);
        timeoutId = null;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md py-2 shadow-md'
            : 'bg-transparent py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <NavLink
            to="/"
            className="text-2xl font-bold text-foreground flex items-center gap-2"
          >
            <span className="text-primary">Portfolio</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-background flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center space-y-6 text-xl">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl ${
                      isActive ? 'text-primary font-bold' : 'text-foreground'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
