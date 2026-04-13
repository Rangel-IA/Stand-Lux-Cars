import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function SubheaderSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Subtle parallax effect on the background typography
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '20%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0.4]);

  return (
    <section 
      ref={containerRef}
      className="arteur-subheader"
      aria-label="Proposta de Valor — ARTEUR"
    >
      {/* ── Background Decorative Typography ──────────────────────────── */}
      <motion.div 
        className="arteur-subheader__bg-text" 
        style={{ y: bgY }}
        aria-hidden="true"
      >
        MÉTIER
      </motion.div>

      <div className="arteur-subheader__container">
        <motion.div 
          className="arteur-subheader__content"
          style={{ opacity: opacityFade }}
        >
          {/* ── Left Column: Editorial Statement ──────────────────────── */}
          <div className="arteur-subheader__statement-wrap">
            <span className="arteur-subheader__dropcap" aria-hidden="true">U</span>
            <p className="arteur-subheader__statement">
              nimos <strong className="highlight">duas décadas de experiência internacional</strong> em <em className="italic">Fotografia de moda</em>, técnicas avançadas em <strong className="highlight">Engenharia de Prompt</strong> e <strong className="highlight">Estratégia de Negócios</strong> — para desenvolver muito mais do que criativos de alto desempenho: um <em className="italic highlight">conteúdo diferenciado com padrão editorial</em>. Uma estética sublime aliada aos fundamentos da <strong className="highlight">alta performance em posicionamento</strong> — seja em tráfego orgânico ou até mesmo em tráfego pago — sob medida para marcas que exigem e merecem o <strong className="highlight">extraordinário</strong>.
            </p>
          </div>

          {/* ── Right Column: CTA & Divider ───────────────────────────── */}
          <div className="arteur-subheader__action-wrap">
            <div className="arteur-subheader__divider" aria-hidden="true" />
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="arteur-subheader__cta-container"
            >
              <a 
                href="/#aplicacao"
                className="arteur-subheader__cta"
              >
                <span className="arteur-subheader__cta-text">Qualifique sua Marca</span>
                <span className="arteur-subheader__cta-arrow-box">
                  <ChevronRight className="arteur-subheader__cta-icon" />
                </span>
                <span className="arteur-subheader__cta-hover-bg" aria-hidden="true" />
              </a>
            </motion.div>
            
            <p className="arteur-subheader__caption">
              Curadoria restrita. Vagas limitadas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
