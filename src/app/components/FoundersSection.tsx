import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import andreImg from '../../assets/andre_rangel.webp';
import stefanoImg from '../../assets/stefano_raphael.webp';

export default function FoundersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax for images
  const yAndre = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yStefano = useTransform(scrollYProgress, [0, 1], ["5%", "-10%"]);

  return (
    <section 
      id="fundadores" 
      ref={sectionRef}
      className="arteur-founders"
      aria-label="Fundadores da ARTEUR"
    >
      <div className="arteur-founders__container">
        
        {/* ── Section Header ────────────────────────────────────────── */}
        <div className="arteur-founders__header">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="arteur-founders__eyebrow" aria-hidden="true">
              As Mentes Por Trás
            </span>
            <h2 className="arteur-founders__title">
              O Vértice entre <br />
              <span className="arteur-founders__title-accent">Estratégia e Arte</span>
            </h2>
          </motion.div>
        </div>

        {/* ── Founders Grid ─────────────────────────────────────────── */}
        <div className="arteur-founders__grid">
          
          {/* André Rangel */}
          <motion.article 
            className="arteur-founders__card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="arteur-founders__image-wrap">
              <motion.div 
                className="arteur-founders__image-inner"
                style={{ y: yAndre }}
              >
                <img 
                  src={andreImg} 
                  alt="André Rangel" 
                  className="arteur-founders__image"
                />
              </motion.div>
              {/* Corner decorative marks */}
              <div className="arteur-founders__frame-mark top-left" />
              <div className="arteur-founders__frame-mark bottom-right" />
            </div>

            <div className="arteur-founders__content">
              <h3 className="arteur-founders__name">André Rangel</h3>
              <p className="arteur-founders__role">
                Business Architect &amp; AI Strategist
              </p>
              <div className="arteur-founders__divider" aria-hidden="true" />
              <p className="arteur-founders__bio">
                Estrategista de negócios e arquiteto de sistemas inteligentes. Com expertise em engenharia de prompt e UX/UI, André funde o rigor técnico da consultoria de crescimento com a estética de alto padrão. Sua atuação transcende o visual: ele desenvolve soluções proprietárias e fluxos de automação que transformam o design em um ativo de vendas escalável e mensurável.
              </p>
            </div>
          </motion.article>

          {/* Stefano Raphael - offset downwards for asymmetry */}
          <motion.article 
            className="arteur-founders__card arteur-founders__card--offset"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="arteur-founders__image-wrap">
              <motion.div 
                className="arteur-founders__image-inner"
                style={{ y: yStefano }}
              >
                <img 
                  src={stefanoImg} 
                  alt="Stefano Raphael" 
                  className="arteur-founders__image"
                />
              </motion.div>
              <div className="arteur-founders__frame-mark top-right" />
              <div className="arteur-founders__frame-mark bottom-left" />
            </div>

            <div className="arteur-founders__content">
              <h3 className="arteur-founders__name">Stefano Raphael</h3>
              <p className="arteur-founders__role">
                Visual Director &amp; Master of AI Synthesis
              </p>
              <div className="arteur-founders__divider" aria-hidden="true" />
              <p className="arteur-founders__bio">
                Com duas décadas na vanguarda da fotografia de moda internacional, Stefano funde sensibilidade óptica e iluminação cinemática com engenharia de precisão. Ele não apenas comanda a IA; ele a dirige como um arsenal ilimitado, criando setups e composições que só um mestre da luz poderia conceber. Sua assinatura é a síntese perfeita entre a alma da fotografia clássica e o poder da vanguarda gerativa.
              </p>
            </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
}
