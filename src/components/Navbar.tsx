import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dumbbell, Menu, X, ChevronRight, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenFreeTrial: () => void;
}

export default function Navbar({ onOpenFreeTrial }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Highlight active section based on scroll position
      const sections = ['home', 'why-us', 'programs', 'trainers', 'transformation', 'membership', 'calculator', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Programs', href: '#programs', id: 'programs' },
    { name: 'Trainers', href: '#trainers', id: 'trainers' },
    { name: 'Transformation', href: '#transformation', id: 'transformation' },
    { name: 'Membership', href: '#membership', id: 'membership' },
    { name: 'Calculator', href: '#calculator', id: 'calculator' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 border-b border-white/10 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E11D48] to-[#9F1239] flex items-center justify-center red-glow-sm group-hover:scale-105 transition-transform">
              <Dumbbell className="w-5 h-5 text-white stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-black tracking-wider text-white leading-none">
                IRON<span className="text-[#E11D48]">CORE</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-zinc-400 leading-tight">
                FITNESS CLUB
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 glass-card px-4 py-1.5 rounded-full border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-[#E11D48] text-white shadow-md shadow-[#E11D48]/30'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions & Mobile Button */}
          <div className="flex items-center gap-2.5">
            <a
              href="tel:+91XXXXXXXXX"
              className="hidden xl:flex items-center gap-1.5 text-[11px] font-semibold text-zinc-300 hover:text-[#E11D48] transition-colors px-2.5 py-1.5"
            >
              <PhoneCall className="w-3 h-3 text-[#E11D48]" />
              <span>+91XXXXXXXXX</span>
            </a>

            <button
              onClick={onOpenFreeTrial}
              className="relative group overflow-hidden rounded-lg bg-[#E11D48] hover:bg-[#BE123C] text-white px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 red-glow shadow-md shadow-[#E11D48]/25 flex items-center gap-1 cursor-pointer"
            >
              <span className="relative z-10">Join Now</span>
              <ChevronRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>

            {/* Mobile menu hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass-nav border-b border-white/10 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider text-zinc-200 hover:text-white hover:bg-[#E11D48]/20 hover:border-l-4 hover:border-[#E11D48] transition-all flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-zinc-500" />
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="tel:+91XXXXXXXXX"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 text-zinc-300 text-xs font-semibold"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span>Call Us: +91XXXXXXXXX</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenFreeTrial();
                  }}
                  className="w-full py-3 rounded-lg bg-[#E11D48] text-white font-bold text-xs uppercase tracking-wider text-center red-glow"
                >
                  Claim 3-Day Free Trial
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
