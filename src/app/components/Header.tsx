import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from 'figma:asset/logo_01.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Método', href: '#manifesto' },
    { name: 'A Dupla', href: '#fundadores' },
    { name: 'Portfólio', href: '#portifolio' },
    { name: 'Expertise', href: 'https://expertise.arteur-cars.vercel.app' },
  ];

  return (
    <header className={`arteur-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="arteur-header__container">
        
        {/* ── Logo ─────────────────────────────────────────────────── */}
        <a href="#" className="arteur-header__logo-wrap">
          <img src={logoImg} alt="ARTEUR" className="arteur-header__logo" />
        </a>

        {/* ── Desktop Navigation ───────────────────────────────────── */}
        <nav className="arteur-header__nav md-only">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="arteur-header__link">
              <span className="link-text">{link.name}</span>
              <span className="link-line" />
            </a>
          ))}
          
          <a href="/#aplicacao" className="arteur-header__cta">
            QUALIFIQUE SUA MARCA
          </a>
        </nav>

        {/* ── Mobile Trigger ────────────────────────────────────────── */}
        <button 
          className="arteur-header__mobile-trigger md-hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu className="w-6 h-6" />
        </button>

      </div>

      {/* ── Mobile Menu Overlay ─────────────────────────────────────── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="arteur-mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="arteur-mobile-menu__bg" />
            
            <button 
              className="arteur-mobile-menu__close"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="arteur-mobile-menu__nav">
              {[...navLinks, { name: 'Aplicação', href: '#aplicacao' }].map((link, i) => (
                <motion.a 
                  key={link.href}
                  href={link.href}
                  className="arteur-mobile-menu__link"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="link-index">0{i + 1}</span>
                  <span className="link-label">{link.name}</span>
                </motion.a>
              ))}
              
              <motion.div 
                className="arteur-mobile-menu__footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p>Boutique de Produção Visual</p>
                <div className="footer-line" />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
