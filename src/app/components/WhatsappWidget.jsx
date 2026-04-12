import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import './WhatsappWidget.css';

const PHONE_NUMBER = '5511999999999';
const MESSAGE = encodeURIComponent('Olá André, venho através do site Arteur e gostaria de uma consultoria para um projeto high-end.');
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=${MESSAGE}`;

export default function WhatsappWidget() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="arteur-whatsapp-widget">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className="arteur-whatsapp-tooltip"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={24} strokeWidth={1.5} />
      </motion.a>
    </div>
  );
}