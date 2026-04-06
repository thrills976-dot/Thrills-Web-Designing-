import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { MagneticButton } from './MagneticButton';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Work', path: '/portfolio' },
  { name: 'Process', path: '/process' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF2E93] via-[#FF8A00] to-[#00F0FF] origin-left z-[60]"
        style={{ scaleX }}
      />
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 mt-1',
          isScrolled ? 'bg-primary/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent'
        )}
      >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2">
            <img src="/logo.png" alt="Thrills Logo" className="w-8 h-8 object-contain" onError={(e) => {
              // Fallback if logo.png is not found
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }} />
            <span className="w-8 h-8 bg-accent rounded-full flex items-center justify-center hidden">
              <span className="w-4 h-4 bg-primary rounded-full" />
            </span>
            THRILLS
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-accent',
                location.pathname === link.path ? 'text-accent' : 'text-soft-gray'
              )}
            >
              {link.name}
            </Link>
          ))}
          <MagneticButton>
            <a
              href="https://wa.me/263774213484?text=Start%20Your%20Project"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-primary px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              Start Project <ArrowRight size={16} />
            </a>
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-neutral-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-secondary border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'text-lg font-medium py-2',
                  location.pathname === link.path ? 'text-accent' : 'text-soft-gray'
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/263774213484?text=Start%20Your%20Project"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-accent text-primary px-5 py-3 rounded-xl text-center font-bold mt-4 block"
            >
              Start Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
}
