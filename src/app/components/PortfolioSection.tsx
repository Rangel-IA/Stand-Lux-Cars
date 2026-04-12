import React from 'react';
import { motion } from 'motion/react';
import ferrariImg from '../../assets/ferrari-f40.webp';
import portofinoImg from '../../assets/ferrari-portofino.webp';
import amalfiSpiderImg from '../../assets/ferrari_amalfi_spider.webp';

const portfolioItems = [
  {
    id: '01',
    title: 'Do Estúdio à Realidade',
    subtitle: 'Automotive Excellence',
    description: 'Direção Fotográfica + Engenharia de Prompt',
    category: 'Direção de Arte & Render',
    image: ferrariImg
  },
  {
    id: '02',
    title: 'Desenho Sem Ruído',
    subtitle: 'Ferrari Portofino',
    description: 'Pós-Produção Integrada à Geração',
    category: 'Linha de Design & Iluminação',
    image: portofinoImg
  },
  {
    id: '03',
    title: 'Cor Verdadeira, Narrativa Elevada',
    subtitle: 'Ferrari Amalfi Spider',
    description: 'Recontextualização Estratégica',
    category: 'Coloração Real & Conceito de Marca',
    image: amalfiSpiderImg
  }
];

export default function PortfolioSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  return (
    <section id="portifolio" className="arteur-portfolio" aria-label="Portfólio ARTEUR">
      <div className="arteur-portfolio__container">
        
        {/* ── Section Header ────────────────────────────────────────── */}
        <header className="arteur-portfolio__header">
          <div className="arteur-portfolio__header-left">
            <span className="arteur-portfolio__eyebrow">Nosso Padrão</span>
            <h2 className="arteur-portfolio__title">
              Obras de Arte <br />
              <span className="arteur-portfolio__title-italic">Comerciais</span>
            </h2>
          </div>
          
          <div className="arteur-portfolio__manifesto-box">
            <p className="arteur-portfolio__manifesto-text">
              <em className="intro-line">
                Uma seleção restrita dos níveis de qualidade que atingimos.
              </em>
              <span className="headline-line">
                <strong className="high-contrast">100% idealizado pela inteligência humana,</strong>
              </span>
              <em className="secondary-line">
                100% materializado por IA de altíssima performance.
              </em>
            </p>
          </div>
        </header>

        {/* ── Portfolio Grid ─────────────────────────────────────────── */}
        <motion.div 
          className="arteur-portfolio__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
        >
          {portfolioItems.map((item, index) => (
            <motion.article 
              key={item.id}
              className={`arteur-portfolio__card arteur-portfolio__card--${index + 1}`}
              variants={itemVariants}
            >
              <div className="arteur-portfolio__image-container">
                <img src={item.image} alt={item.subtitle} className="arteur-portfolio__image" />
                <div className="arteur-portfolio__overlay">
                  <div className="arteur-portfolio__meta">
                    <span className="arteur-portfolio__id">{item.id}</span>
                    <span className="arteur-portfolio__category">{item.category}</span>
                  </div>
                  <div className="arteur-portfolio__content">
                    <h3 className="arteur-portfolio__card-title">{item.title}</h3>
                    <p className="arteur-portfolio__card-subtitle">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        {/* ── Visual Footer ─────────────────────────────────────────── */}
        <footer className="arteur-portfolio__footer">
          <div className="arteur-portfolio__line" />
          <span className="arteur-portfolio__footer-text">Curadoria 2026 — Visual Excellence</span>
        </footer>
      </div>
    </section>
  );
}
