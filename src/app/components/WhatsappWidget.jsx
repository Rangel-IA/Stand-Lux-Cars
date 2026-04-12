import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import './WhatsappWidget.css';

const PHONE_NUMBER = '351936505168';
const MESSAGE = encodeURIComponent('Olá André, venho através do site Arteur e gostaria de uma consultoria para um projeto high-end.');
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=${MESSAGE}`;

export default function WhatsappWidget() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    let scrollTimeout;
    const handleScroll = () => {
      setShowTooltip(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setShowTooltip(false), 3000);
    };

    const initialTimer = setTimeout(() => {
      setShowTooltip(true);
      const hideTimer = setTimeout(() => setShowTooltip(false), 3000);
      return () => clearTimeout(hideTimer);
    }, 2000);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(scrollTimeout);
      clearTimeout(initialTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!isMobile) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!isMobile) {
      setShowTooltip(false);
    }
  };

  return (
    <div className="arteur-whatsapp-widget">
      <AnimatePresence mode="wait">
        {showTooltip && (
          <motion.div
            className="arteur-whatsapp-tooltip"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>Consultoria Exclusiva:</span>
            <strong>Como posso ajudar?</strong>
            <div className="arteur-whatsapp-tooltip-arrow" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="arteur-whatsapp-btn"
        aria-label="WhatsApp Consultoria"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={24} strokeWidth={1.5} />
      </motion.a>
    </div>
  );
}