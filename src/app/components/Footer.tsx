import React from 'react';
import footerLogo from '../../assets/logo_footer.png';

export default function Footer() {
  return (
    <footer className="arteur-footer">
      {/* Decorative large logo watermark */}
      <div className="arteur-footer__watermark" aria-hidden="true">
        ARTEUR
      </div>

      <div className="arteur-footer__container">
        <div className="arteur-footer__main">
          
          {/* ── Brand Column ─────────────────────────────────────────── */}
          <div className="arteur-footer__col-brand">
            <img src={footerLogo} alt="ARTEUR" className="arteur-footer__logo" />
            <p className="arteur-footer__tagline">
              Boutique de produção visual de <br /> elite para marcas extraordinárias.
            </p>
          </div>

          {/* ── About Column ─────────────────────────────────────────── */}
          <div className="arteur-footer__col-about">
            <h4 className="arteur-footer__col-label">Quem Somos</h4>
            <p className="arteur-footer__about-text">
              Unimos 20+ anos de maestria fotográfica com engenharia avançada de IA. Não criamos apenas imagens; desenvolvemos ativos visuais de alto luxo que resolvem problemas complexos de branding e escala.
            </p>
          </div>

          {/* ── Nav Column ──────────────────────────────────────────── */}
          <nav className="arteur-footer__col-nav">
            <h4 className="arteur-footer__col-label">Navegação</h4>
            <ul className="arteur-footer__nav-list">
              <li><a href="#manifesto">O Método</a></li>
              <li><a href="#fundadores">A Dupla</a></li>
              <li><a href="#portifolio">Portfólio</a></li>
              <li><a href="https://expertise.arteur-cars.vercel.app">Expertise</a></li>
            </ul>
          </nav>

        </div>

        {/* ── Footer Bottom ──────────────────────────────────────────── */}
        <div className="arteur-footer__bottom">
          <div className="arteur-footer__divider" />
          <div className="arteur-footer__bottom-content">
            <p className="arteur-footer__copyright">
              © {new Date().getFullYear()} ARTEUR — Todos os direitos reservados.
            </p>
            <div className="arteur-footer__labels">
              <span className="arteur-footer__label-pill">Boutique Services</span>
              <span className="arteur-footer__label-pill">AI Precision</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
