import React from 'react';
import { motion } from 'motion/react';
import cameraBg from '../../assets/fujifilm.webp';

export default function StatementSection() {
  return (
    <section className="arteur-statement">
      <motion.div 
        className="arteur-statement__bg" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${cameraBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        aria-hidden="true"
      />
      <div className="arteur-statement__overlay" aria-hidden="true" />
      
      <div className="arteur-statement__container">
        <motion.div 
          className="arteur-statement__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="arteur-statement__title">
            Produções <span className="highlight">High-End</span> agora <br />
            geradas por uma fração do investimento tradicional.
          </h2>
          
          <div className="arteur-statement__grid">
            <div className="arteur-statement__item">
              <span className="arteur-statement__label">Zero Logística</span>
              <p className="arteur-statement__text">Sem estúdio. Sem equipe massiva. Sem riscos.</p>
            </div>
            
            <div className="arteur-statement__divider" />
            
            <div className="arteur-statement__item">
              <span className="arteur-statement__label">Máxima Expertise</span>
              <p className="arteur-statement__text">Curadoria humana e engenharia de prompt de elite.</p>
            </div>
          </div>
          
          <p className="arteur-statement__final">
            Execução de alto nível para marcas que <em className="italic">recusam o óbvio</em>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
