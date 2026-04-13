import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MoveHorizontal } from 'lucide-react';
import './ExpertisePage.css';

const comparisons = [
  {
    id: 1,
    title: 'Ferrari Amalfi Spider',
    subtitle: 'AI Precision Enhancement',
    before: '/assets/ferrari_amalfi_spider.webp',
    after: '/assets/ferrari_amalfi_spider-d.webp',
    description: 'Curadoria humana refina a iluminação original, revelando texturas e linhas icônicas que passam despercebidas na captura bruta.'
  },
  {
    id: 2,
    title: 'Ferrari F40',
    subtitle: 'Engineering Prompt',
    before: '/assets/ferrari-f40.webp',
    after: '/assets/ferrari-f40-d.webp',
    description: 'Engenharia de prompt preserva a autenticidade do modelo original enquanto eleva a apresentação visual para o padrão editorial de luxo.'
  },
  {
    id: 3,
    title: 'Ferrari Portofino',
    subtitle: 'Color Grading Intelligence',
    before: '/assets/ferrari-portofino.webp',
    after: '/assets/ferrari-portofino-d.webp',
    description: 'Recontextualização estratégica com gradação de cor que transforma uma fotografia técnica em ativo de marca premium.'
  }
];

function ComparisonSlider({ comparison }: { comparison: typeof comparisons[0] }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const beforeSrc = comparison.before;
  const afterSrc = comparison.after;

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <motion.div 
      className="expertise-comparison"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="expertise-comparison__header">
        <span className="expertise-comparison__id">0{comparison.id}</span>
        <h3 className="expertise-comparison__title">{comparison.title}</h3>
        <span className="expertise-comparison__subtitle">{comparison.subtitle}</span>
      </div>

      <div 
        className="expertise-comparison__slider"
        ref={containerRef}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        <div className="expertise-comparison__image expertise-comparison__image--before">
          <img src={beforeSrc} alt={`${comparison.title} Original`} />
          <span className="expertise-comparison__label">Original</span>
        </div>
        
        <div 
          className="expertise-comparison__image expertise-comparison__image--after"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <img src={afterSrc} alt={`${comparison.title} Processado`} />
          <span className="expertise-comparison__label">Processado</span>
        </div>

        <div 
          className="expertise-comparison__handle"
          style={{ left: `${sliderPosition}%` }}
        >
          <MoveHorizontal size={20} />
        </div>
      </div>

      <p className="expertise-comparison__description">{comparison.description}</p>
    </motion.div>
  );
}

export default function ExpertisePage() {
  return (
    <main className="expertise-page">
      <section className="expertise-hero">
        <motion.div 
          className="expertise-hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="expertise-hero__eyebrow">ARTEUR - Expertise</span>
          <h1 className="expertise-hero__title">Expertise <br/><em>Técnica</em></h1>
          <p className="expertise-hero__subtitle">
            A diferença entre uma fotografia e um ativo de marca. 
            Comparação direta entre o capture RAW e o acabamento de luxo.
          </p>
        </motion.div>

        <div className="expertise-hero__indicator">
          <span>Arraste para comparar</span>
          <div className="expertise-hero__line" />
        </div>
      </section>

      <section className="expertise-showcase">
        {comparisons.map((comparison) => (
          <ComparisonSlider key={comparison.id} comparison={comparison} />
        ))}
      </section>

      <section className="expertise-cta">
        <div className="expertise-cta__content">
          <h2 className="expertise-cta__title">Pronto para elevar sua marca?</h2>
          <a href="/#aplicacao" className="expertise-cta__button">
            Iniciar Projeto
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}