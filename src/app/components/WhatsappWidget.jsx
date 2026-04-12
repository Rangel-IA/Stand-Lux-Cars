import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import './WhatsappWidget.css';

const PHONE_NUMBER = '351936505168';
const MESSAGE = encodeURIComponent('Olá André, venho através do site Arteur e gostaria de uma consultoria para um projeto high-end.');
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=${MESSAGE}`;

export default function WhatsappWidget() {
  return (
    <div className="arteur-whatsapp-widget">
      <div className="arteur-whatsapp-tooltip">
        <span>Consultoria Exclusiva:</span>
        <strong>Como posso ajudar?</strong>
        <div className="arteur-whatsapp-tooltip-arrow" />
      </div>

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