import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import './WhatsappWidget.css';

const PHONE_NUMBER = '351936505168';
const MESSAGE = encodeURIComponent('Olá André, venho através do site Arteur e gostaria de uma consultoria para um projeto high-end.');
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=${MESSAGE}`;

export default function WhatsappWidget() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="arteur-whatsapp-widget">
      <AnimatePresence mode="wait">
        {!isMobile && isHovered && (
          <motion.div
            className="arteur-whatsapp-tooltip"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
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
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={24} strokeWidth={1.5} />
      </motion.a>
    </div>
  );
}