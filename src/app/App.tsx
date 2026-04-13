import React from 'react';
import { Routes, Route } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Play, Camera, Star, ArrowRight } from 'lucide-react';

import HeroSection from './components/HeroSection';
import '../styles/hero.css';
import SubheaderSection from './components/SubheaderSection';
import '../styles/subheader.css';
import ManifestoSection from './components/ManifestoSection';
import '../styles/manifesto.css';
import FoundersSection from './components/FoundersSection';
import '../styles/founders.css';
import PortfolioSection from './components/PortfolioSection';
import '../styles/portfolio.css';
import ContactSection from './components/ContactSection';
import '../styles/contact.css';
import StatementSection from './components/StatementSection';
import '../styles/statement.css';
import Footer from './components/Footer';
import '../styles/footer.css';
import Header from './components/Header';
import '../styles/header.css';
import WhatsappWidget from './components/WhatsappWidget';
import './components/WhatsappWidget.css';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-zinc-800 selection:text-white font-sans overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <SubheaderSection />
            <ManifestoSection />
            <FoundersSection />
            <PortfolioSection />
            <ContactSection />
            <StatementSection />
          </>
        } />
      </Routes>
      <Footer />
      <WhatsappWidget />
    </div>
  );
}