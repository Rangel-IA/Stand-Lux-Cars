import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import heroVideo from 'figma:asset/video-hero.mp4';
import logoImg from 'figma:asset/logo_01.png';

// ─── Credential ticker items ──────────────────────────────────────────────────
const TICKER_ITEMS = [
  'Alta Costura Audiovisual',
  'Engenharia de Prompt',
  '20 Anos de Experiência Internacional',
  'Direção de Arte & IA Generativa',
  'Boutique Visual Production',
  'Fotografia de Moda',
  'Estratégia de Posicionamento',
];

// ─── Stat counters ────────────────────────────────────────────────────────────
const STATS = [
  { value: '20+', label: 'Anos de Expertise\nInternacional' },
  { value: 'High-End', label: 'Produção de elite por uma\nfração do investimento' },
  { value: '100%', label: 'IA de alta performance\nsob direção humana' },
];

// ─── Stagger animation variant ────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [tickerPaused, setTickerPaused] = useState(false);

  // Parallax scroll on video
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 0.55]);

  // Ensure video plays on mount
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.play().catch(() => {});
    }
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="arteur-hero"
      aria-label="Hero — ARTEUR Alta Costura Audiovisual"
    >
      {/* ── Video background ─────────────────────────────────────────── */}
      <motion.div className="arteur-hero__video-wrap" style={{ y: videoY }}>
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="arteur-hero__video"
        />
        {/* Grain overlay */}
        <div className="arteur-hero__grain" aria-hidden="true" />

        {/* Base gradient vignette */}
        <div className="arteur-hero__vignette" aria-hidden="true" />

        {/* Scroll-driven extra darkening */}
        <motion.div
          className="arteur-hero__scroll-overlay"
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        />
      </motion.div>

      {/* ── Vertical brand mark (large, rotated) ─────────────────────── */}
      <div className="arteur-hero__brand-vertical" aria-hidden="true">
        ARTEUR
      </div>

      {/* ── Accent rule (animated) ────────────────────────────────────── */}
      <motion.div
        className="arteur-hero__accent-rule"
        initial={{ scaleY: 0, transformOrigin: 'top' }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      />

      {/* ── Main content grid ─────────────────────────────────────────── */}
      <div className="arteur-hero__content">

        {/* Eyebrow */}
        <motion.p
          className="arteur-hero__eyebrow"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="arteur-hero__eyebrow-line" aria-hidden="true" />
          Alta Costura Audiovisual &amp; IA
        </motion.p>

        {/* Headline — Split into two lines for controlled typesetting */}
        <h1 className="arteur-hero__headline" aria-label="A excelência visual não é mais um privilégio de orçamentos milionários. É uma questão de inteligência.">
          <motion.span
            className="arteur-hero__headline-l1"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            A excelência visual
          </motion.span>
          <motion.span
            className="arteur-hero__headline-l2"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            não é mais um privilégio
          </motion.span>
          <motion.span
            className="arteur-hero__headline-l3"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            de orçamentos milionários.
          </motion.span>
          <motion.em
            className="arteur-hero__headline-coda"
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            É uma questão de inteligência.
          </motion.em>
        </h1>

        {/* Stats strip */}
        <motion.div
          className="arteur-hero__stats"
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          role="list"
          aria-label="Credenciais ARTEUR"
        >
          {STATS.map((s, i) => (
            <div key={i} className="arteur-hero__stat" role="listitem">
              <span className="arteur-hero__stat-value">{s.value}</span>
              <span className="arteur-hero__stat-label">
                {s.label.split('\n').map((line, j) => (
                  <React.Fragment key={j}>{line}{j === 0 && <br />}</React.Fragment>
                ))}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="arteur-hero__cta-wrap"
          custom={6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <a
            id="hero-cta-primary"
            href="/#aplicacao"
            className="arteur-hero__cta"
          >
            <span className="arteur-hero__cta-text">Qualifique sua Marca</span>
            <span className="arteur-hero__cta-arrow" aria-hidden="true">→</span>
            <span className="arteur-hero__cta-bg" aria-hidden="true" />
          </a>

          <a
            id="hero-cta-secondary"
            href="/#manifesto"
            className="arteur-hero__cta-ghost"
          >
            Descubra o Método
          </a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────────── */}
      <motion.div
        className="arteur-hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        aria-hidden="true"
      >
        <div className="arteur-hero__scroll-line">
          <span className="arteur-hero__scroll-dot" />
        </div>
        <span className="arteur-hero__scroll-label">Scroll</span>
      </motion.div>

      {/* ── Credential ticker ─────────────────────────────────────────── */}
      <motion.div
        className={`arteur-hero__ticker${tickerPaused ? ' arteur-hero__ticker--paused' : ''}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        onMouseEnter={() => setTickerPaused(true)}
        onMouseLeave={() => setTickerPaused(false)}
        aria-hidden="true"
      >
        <div className="arteur-hero__ticker-track">
          {/* Duplicate for seamless loop */}
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="arteur-hero__ticker-item">
              {item}
              <span className="arteur-hero__ticker-sep">✦</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
