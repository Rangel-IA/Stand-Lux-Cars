import React from 'react';
import { motion } from 'motion/react';
import attachedProductImg from '../../assets/phase-one.webp';

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="arteur-manifesto" aria-label="Manifesto ARTEUR">
      <div className="arteur-manifesto__container">
        
        {/* Decorative running title top-bound */}
        <div className="arteur-manifesto__sidebar">
          <span className="arteur-manifesto__vertical-title">O Método • Nova Era Visual</span>
        </div>

        <div className="arteur-manifesto__content">
          {/* Main Headline */}
          <motion.div 
            className="arteur-manifesto__title-wrap"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="arteur-manifesto__title">
              O que antes exigia<br /> quinze dias e dezenas<br /> de profissionais,
              <span className="arteur-manifesto__title-accent"> 
                nós redefinimos com mestria.
              </span>
            </h2>
          </motion.div>

          <div className="arteur-manifesto__grid">
            {/* The Text Columns */}
            <motion.div 
              className="arteur-manifesto__text-column"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="arteur-manifesto__body">
                No passado, criar uma linha editorial de imagens ou vídeos para campanhas de alto impacto significava alugar estúdios massivos, contratar modelos, maquiadores, figurinistas, diretores de arte, e investir orçamentos exorbitantes em equipamentos e cenografia. Um processo que drenava tempo e capital, estendendo-se por semanas.
              </p>
              <p className="arteur-manifesto__body">
                Não somos uma agência convencional. Rejeitamos o genérico e o mercado de entregas vulgares, de baixo nível. Nossa proposta é diametralmente oposta: uma abordagem de &quot;boutique&quot;, extremamente artesanal em seu planejamento, mas alimentada pelo que há de mais avançado em Inteligência Artificial.
              </p>
              <p className="arteur-manifesto__body">
                Nossa expertise não descarta o fator humano; ela o amplifica. Comandamos a IA com a precisão de quem vivenciou a vanguarda global, entregando resultados de superioridade técnica e estética que até os olhos mais destreinados não conseguem ignorar.
              </p>

              <div className="arteur-manifesto__signature" aria-hidden="true">
                Antítese do Genérico.
              </div>
            </motion.div>

            {/* The Image Collage/Frame */}
            <motion.div 
              className="arteur-manifesto__visual"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="arteur-manifesto__image-wrapper">
                <img 
                  src={attachedProductImg} 
                  alt="Alta Costura Visual - Detalhe" 
                  className="arteur-manifesto__image"
                />
                
                {/* Minimalist framing/overlay elements beloved in editorial design */}
                <div className="arteur-manifesto__frame-border" />
                <div className="arteur-manifesto__corner-tl" />
                <div className="arteur-manifesto__corner-br" />
                <div className="arteur-manifesto__image-overlay" />
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
