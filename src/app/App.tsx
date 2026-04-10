import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Play, Camera, Star, ArrowRight, Menu, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import cameraBg from 'figma:asset/fujifilm.png';
import attachedProductImg from 'figma:asset/phase-one.png';
import stefanoImg from 'figma:asset/stefano_raphael.png';
import andreImg from 'figma:asset/andre_rangel.png';
import logoImg from 'figma:asset/logo_01.png';
import heroVideo from 'figma:asset/video-hero.mp4';
import ferrariImg from '../assets/ferrari-f40.jpg';
import portofinoImg from '../assets/ferrari-portofino.jpeg';
import amalfiSpiderImg from '../assets/ferrari_amalfi_spider.jpeg';



export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-zinc-800 selection:text-white font-sans overflow-x-hidden">
      {/* HEADER */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <img src={logoImg} alt="ARTEUR" className="h-9 md:h-12 w-auto object-contain" />
          
          <nav className="hidden md:flex gap-8 text-sm tracking-wider text-zinc-400 font-light">
            <a href="#manifesto" className="hover:text-white transition-colors">Manifesto</a>
            <a href="#fundadores" className="hover:text-white transition-colors">A Dupla</a>
            <a href="#portifolio" className="hover:text-white transition-colors">Portfólio</a>
            <a href="#aplicacao" className="hover:text-white transition-colors">Submeta seu Projeto</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-zinc-950/95 backdrop-blur-xl z-50 flex flex-col pt-24 px-6 md:hidden"
            >
              <button 
                className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
              
              <div className="flex justify-center mb-16">
                <img src={logoImg} alt="ARTEUR" className="h-12 w-auto object-contain brightness-0 invert" />
              </div>

              <nav className="flex flex-col gap-8 text-lg tracking-widest text-zinc-300 font-light text-center uppercase">
                <a href="#manifesto" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors py-4 border-b border-zinc-900">Manifesto</a>
                <a href="#fundadores" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors py-4 border-b border-zinc-900">A Dupla</a>
                <a href="#portifolio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors py-4 border-b border-zinc-900">Portfólio</a>
                <a href="#aplicacao" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors py-4 mt-8 bg-zinc-100 text-zinc-950">Submeta seu Projeto</a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <video 
            src={heroVideo} 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/80 to-zinc-950" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="max-w-6xl"
          >
            <span className="text-zinc-500 tracking-[0.5em] uppercase text-xs md:text-sm mb-8 block">Alta Costura Audiovisual & IA</span>
            <h1 
              className="text-4xl md:text-6xl lg:text-[5.5rem] font-light leading-[1.1] tracking-tighter"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              A excelência visual não é mais <br className="hidden lg:block" />
              um privilégio de orçamentos milionários. <br className="hidden lg:block" />
              <span className="italic text-zinc-300">É uma questão de inteligência.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* SUBHEADER & CTA SECTION */}
      <section className="py-24 md:py-32 bg-zinc-950 border-b border-zinc-900">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-1"
            >
              <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed [&_strong]:text-[#E9E4D0] [&_strong]:font-medium [&_em]:text-[#E7E6DF]">
                Unimos <strong>duas décadas de experiência internacional</strong> em <em>Fotografia de moda</em>, técnicas avançadas em <strong>Engenharia de Prompt</strong> e <strong>Estratégia de Negócios</strong> - para desenvolver muito mais do que criativos de alto desempenho: um <em>conteúdo diferenciado com padrão editorial</em>. Uma estética sublime aliada aos fundamentos da <strong>alta performance em posicionamento</strong> - seja em tráfego orgânico ou até mesmo em tráfego pago - sob medida para marcas que exigem e merecem o <strong>extraordinário</strong>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex-shrink-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="#aplicacao"
                  className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 uppercase tracking-[0.3em] text-xs hover:bg-[#E9E4D0] hover:text-zinc-950 hover:border-[#E9E4D0] transition-all duration-700 group relative overflow-hidden"
                >
                  <span className="relative z-10 transition-colors duration-500 uppercase">Qualifique sua Marca</span>
                  <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MANIFESTO SECTION */}
      <section id="manifesto" className="py-24 md:py-32 bg-zinc-950 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-3xl md:text-5xl font-light mb-8 leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                O que antes exigia quinze dias e dezenas de profissionais, <br/><span className="italic text-zinc-400">nós redefinimos com mestria.</span>
              </h2>
              <div className="space-y-6 text-zinc-400 font-light leading-relaxed">
                <p>
                  No passado, criar uma linha editorial de imagens ou vídeos para campanhas de alto impacto significava alugar estúdios massivos, contratar modelos, maquiadores, figurinistas, diretores de arte, e investir orçamentos exorbitantes em equipamentos e cenografia. Um processo que drenava tempo e capital, estendendo-se por semanas.
                </p>
                <p>
                  Não somos uma agência convencional. Rejeitamos o genérico e o mercado de entregas vulgares, de baixo nível. Nossa proposta é diametralmente oposta: uma abordagem de "boutique", extremamente artesanal em seu planejamento, mas alimentada pelo que há de mais avançado em Inteligência Artificial.
                </p>
                <p>
                  Nossa expertise não descarta o fator humano; ela o amplifica. Comandamos a IA com a precisão de quem vivenciou a vanguarda global, entregando resultados de superioridade técnica e estética que até os olhos mais destreinados não conseguem ignorar.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <img 
                src={attachedProductImg} 
                alt="Luxury Cosmetic Shot" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOUNDERS SECTION */}
      <section id="fundadores" className="py-24 md:py-32 bg-zinc-900 border-y border-zinc-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-zinc-500 tracking-[0.2em] uppercase text-xs mb-4 block">As Mentes Por Trás</span>
            <h2 
              className="text-4xl md:text-5xl font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              O Vértice entre Estratégia e Arte
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            {/* André */}
            <motion.div 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[3/4] mb-8 overflow-hidden relative">
                <img 
                  src={andreImg} 
                  alt="André Rangel" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h3 className="text-2xl mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>André Rangel</h3>
              <p className="text-zinc-400 text-sm uppercase tracking-widest mb-4">Business Advisor & Estratégia</p>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                Mestre em estruturação de negócios e crescimento digital. André garante que o apelo estético impecável esteja intrinsecamente ligado ao posicionamento de mercado e à escalabilidade, transformando visuais em um ativo de vendas palpável para a marca.
              </p>
            </motion.div>

            {/* Stefano */}
            <motion.div 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[3/4] mb-8 overflow-hidden relative">
                <img 
                  src={stefanoImg} 
                  alt="Stefano Raphael" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h3 className="text-2xl mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Stefano Raphael</h3>
              <p className="text-zinc-400 text-sm uppercase tracking-widest mb-4">Fotógrafo Internacional & Especialista em IA</p>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                Com 20 anos imerso nos editoriais de moda mais glamorosos do mundo, Stefano traz a sensibilidade óptica, a iluminação cinemática e o perfeccionismo técnico necessários para comandar a IA e gerar resultados visuais verdadeiramente arrebatadores e exclusivos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section id="portifolio" className="py-24 md:py-32 bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
          <div>
            <span className="text-zinc-500 tracking-[0.4em] uppercase text-xs mb-4 block">Nosso Padrão</span>
            <h2 
              className="text-4xl md:text-5xl font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Obras de Arte Comerciais
            </h2>
          </div>
          <p className="text-zinc-400 font-light max-w-2xl text-base md:text-lg leading-relaxed tracking-wide text-left">
            <em className="block not-italic md:italic mb-1">Uma seleção restrita dos níveis de qualidade que atingimos.</em>
            <span className="block mb-1">
              <strong className="font-medium text-zinc-200" style={{ fontSize: '1.05em' }}>100% idealizado pela inteligência humana,</strong>
            </span>
            <em className="block not-italic md:italic">100% materializado por IA de altíssima performance.</em>
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full h-auto md:h-[80vh]">
          {/* Portfolio Item 1 */}
          <div className="relative group flex-1 h-[400px] md:h-full overflow-hidden">
            <img 
              src={ferrariImg} 
              alt="Automotive Excellence" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8">
              <h4 className="text-2xl mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Do Estúdio à Realidade</h4>
              <p className="text-xs text-zinc-400 tracking-wider uppercase mb-1">Direção de Arte & Render</p>
              <h5 className="text-lg text-zinc-200" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Direção Fotográfica + Engenharia de Prompt</h5>
            </div>
          </div>
          
          {/* Portfolio Item 2 */}
          <div className="relative group flex-1 h-[400px] md:h-full overflow-hidden border-t md:border-t-0 md:border-l border-zinc-800">
            <img 
              src={portofinoImg} 
              alt="Ferrari Portofino" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8">
              <h4 className="text-2xl mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Desenho Sem Ruído</h4>
              <p className="text-xs text-zinc-400 tracking-wider uppercase mb-1">Linha de Design & Iluminação</p>
              <h5 className="text-lg text-zinc-200" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Pós-Produção Integrada à Geração</h5>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div className="relative group flex-1 h-[400px] md:h-full overflow-hidden border-t md:border-t-0 md:border-l border-zinc-800">
            <img 
              src={amalfiSpiderImg} 
              alt="Ferrari Amalfi Spider" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8">
              <h4 className="text-2xl mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Cor Verdadeira, Narrativa Elevada</h4>
              <p className="text-xs text-zinc-400 tracking-wider uppercase mb-1">Coloração Real & Conceito de Marca</p>
              <h5 className="text-lg text-zinc-200" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Recontextualização Estratégica</h5>
            </div>
          </div>
        </div>
      </section>

      {/* QUALIFICATION / CONTACT SECTION */}
      <section id="aplicacao" className="py-24 md:py-32 bg-zinc-900 border-t border-zinc-800 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-zinc-800/20 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-zinc-500 tracking-[0.4em] uppercase text-xs mb-4 block">Seletividade</span>
              <h2 
                className="text-4xl md:text-5xl font-light mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Apenas Projetos Que Desafiam o Óbvio.
              </h2>
              <p className="text-zinc-400 font-light max-w-2xl mx-auto text-base leading-relaxed">
                Nosso tempo e talento são reservados exclusivamente para marcas que buscam transcender o ordinário. Não competimos por volume, não nos interessam demandas genéricas. Escolhemos nossos clientes a dedo para garantir uma entrega inigualável que enriqueça nosso portfólio restrito. Submeta seu projeto à nossa curadoria.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 md:p-12 border border-zinc-800">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900 text-center flex flex-col items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.65] pointer-events-none"
          style={{ backgroundImage: `url(${cameraBg})`, backgroundAttachment: 'fixed' }}
        ></div>
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl text-zinc-100 mb-6 font-normal tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Produções de €50.000+ agora geradas por uma fração do investimento.
            </h2>
            <p className="text-zinc-400 font-light tracking-widest text-sm md:text-base leading-relaxed md:leading-loose uppercase">
              Sem estúdio. Sem equipe. Sem riscos e logística.<br className="hidden md:block" />
              Invista em expertise humana e engenharia de prompt - <span className="text-zinc-200 font-normal">execução de alto nível.</span>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 py-12 border-t border-zinc-900 border-b-0 text-sm font-light text-zinc-600">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Esquerda: Quem Somos */}
            <div className="text-left">
              <h3 className="text-zinc-100 uppercase tracking-widest text-sm font-medium mb-4">Quem Somos</h3>
              <p className="text-zinc-400 font-light leading-relaxed text-sm text-justify md:text-left">
                Uma boutique de produção visual especializada em engenharia de imagem com IA e direção fotográfica profissional. Combinamos 20+ anos de experiência em fotografia de alta performance com domínio avançado em parametrização de modelos generativos. Não somos uma agência de criação. Somos a união de expertises que elevam a produção humana e que resolve problemas visuais complexos através de técnica, não de intuição.
              </p>
            </div>

            {/* Direita: Logo & Direitos */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <img src={logoImg} alt="ARTEUR" className="h-10 w-auto object-contain mb-8 opacity-80" />
              <p className="text-xs max-w-[250px] leading-relaxed">
                © {new Date().getFullYear()} ARTEUR.<br/>Todos os direitos reservados.<br/>Serviços de Boutique.
              </p>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

// FORM COMPONENT
function ContactForm() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await fetch("https://formsubmit.co/ajax/72df3f651e43fb47c1da1b4a1a5a162a", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Nome: data.name,
          "Empresa/Marca": data.company,
          Email: data.email,
          Website: data.website || "Não informado",
          Instagram: data.instagram || "Não informado",
          Budget: data.budget,
          "Detalhes do Projeto": data.description,
          _subject: `Novo Projeto Arteur: ${data.company}`,
          _template: "table"
        })
      });
      setShowSuccessModal(true);
      reset();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-zinc-950 border border-zinc-800 p-8 md:p-12 max-w-lg w-full relative text-center"
            >
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                type="button"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-2xl md:text-3xl mb-6 text-zinc-100" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Projeto Submetido com Sucesso.
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">
                Nossa equipe analisará as diretrizes da sua marca. Caso identifiquemos sinergia mútua para a criação de conteúdo / projeto de excelência, entraremos em contato dentro de 48 horas.
              </p>
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="mt-8 px-8 py-3 bg-white text-zinc-950 uppercase tracking-widest text-xs font-medium hover:bg-zinc-200 transition-colors inline-block"
                type="button"
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Nome do Responsável</label>
          <input 
            {...register("name", { required: true })}
            className="w-full bg-zinc-900 border border-zinc-800 focus:border-zinc-500 text-white px-4 py-3 outline-none transition-colors text-sm font-light"
            placeholder="Seu nome"
          />
          {errors.name && <span className="text-red-500/70 text-xs mt-1 block">Obrigatório.</span>}
        </div>
        
        <div>
          <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Marca / Empresa</label>
          <input 
            {...register("company", { required: true })}
            className="w-full bg-zinc-900 border border-zinc-800 focus:border-zinc-500 text-white px-4 py-3 outline-none transition-colors text-sm font-light"
            placeholder="Nome da sua marca"
          />
          {errors.company && <span className="text-red-500/70 text-xs mt-1 block">Obrigatório.</span>}
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">E-mail Corporativo</label>
        <input 
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-900 border border-zinc-800 focus:border-zinc-500 text-white px-4 py-3 outline-none transition-colors text-sm font-light"
          placeholder="voce@suamarca.com"
        />
        {errors.email && <span className="text-red-500/70 text-xs mt-1 block">Obrigatório.</span>}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Website Oficial</label>
          <input 
            type="url"
            {...register("website")}
            className="w-full bg-zinc-900 border border-zinc-800 focus:border-zinc-500 text-white px-4 py-3 outline-none transition-colors text-sm font-light"
            placeholder="https://suamarca.com"
          />
        </div>
        
        <div>
          <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Perfil do Instagram</label>
          <input 
            {...register("instagram")}
            className="w-full bg-zinc-900 border border-zinc-800 focus:border-zinc-500 text-white px-4 py-3 outline-none transition-colors text-sm font-light"
            placeholder="@suamarca"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Nível de Investimento Esperado (Budget)</label>
        <div className="space-y-3 mt-4">
          <label className="block cursor-pointer group">
            <input type="radio" value="limitado" {...register("budget", { required: true })} className="peer sr-only" />
            <div className="w-full bg-zinc-900 border border-zinc-800 p-4 transition-all peer-checked:border-zinc-500 peer-checked:bg-zinc-800/50 group-hover:border-zinc-700 peer-checked:[&_.radio-dot]:bg-zinc-300 peer-checked:[&_.radio-dot]:border-zinc-300">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-zinc-300 uppercase tracking-wider">Budget Starter</span>
                <div className="radio-dot w-3 h-3 rounded-full border border-zinc-700 transition-colors"></div>
              </div>
              <p className="text-xs text-zinc-500 italic font-light">O essencial para iniciar seu posicionamento com o impacto da inteligência artificial.</p>
            </div>
          </label>
          
          <label className="block cursor-pointer group">
            <input type="radio" value="premium" {...register("budget", { required: true })} className="peer sr-only" />
            <div className="w-full bg-zinc-900 border border-zinc-800 p-4 transition-all peer-checked:border-zinc-500 peer-checked:bg-zinc-800/50 group-hover:border-zinc-700 peer-checked:[&_.radio-dot]:bg-zinc-300 peer-checked:[&_.radio-dot]:border-zinc-300">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-zinc-300 uppercase tracking-wider">Budget Premium</span>
                <div className="radio-dot w-3 h-3 rounded-full border border-zinc-700 transition-colors"></div>
              </div>
              <p className="text-xs text-zinc-500 italic font-light">Para marcas prontas para dominar o mercado com campanhas consistentes de alta conversão.</p>
            </div>
          </label>

          <label className="block cursor-pointer group">
            <input type="radio" value="boutique" {...register("budget", { required: true })} className="peer sr-only" />
            <div className="w-full bg-zinc-900 border border-zinc-800 p-4 transition-all peer-checked:border-zinc-500 peer-checked:bg-zinc-800/50 group-hover:border-zinc-700 peer-checked:[&_.radio-dot]:bg-zinc-300 peer-checked:[&_.radio-dot]:border-zinc-300">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-zinc-300 uppercase tracking-wider">Budget Boutique</span>
                <div className="radio-dot w-3 h-3 rounded-full border border-zinc-700 transition-colors"></div>
              </div>
              <p className="text-xs text-zinc-500 italic font-light">Direção de arte exclusiva e escala global para quem exige o extraordinário absoluto.</p>
            </div>
          </label>

          <label className="block cursor-pointer group">
            <input type="radio" value="indefinido" {...register("budget", { required: true })} className="peer sr-only" />
            <div className="w-full bg-zinc-900 border border-zinc-800 p-4 transition-all peer-checked:border-zinc-500 peer-checked:bg-zinc-800/50 group-hover:border-zinc-700 peer-checked:[&_.radio-dot]:bg-zinc-300 peer-checked:[&_.radio-dot]:border-zinc-300">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-zinc-300 uppercase tracking-wider">Budget Indefinido</span>
                <div className="radio-dot w-3 h-3 rounded-full border border-zinc-700 transition-colors"></div>
              </div>
              <p className="text-xs text-zinc-500 italic font-light">Preciso da expertise de vocês para estruturar o investimento ideal para o meu negócio.</p>
            </div>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Descreva a Visão do Projeto</label>
        <textarea 
          {...register("description", { required: true })}
          className="w-full bg-zinc-900 border border-zinc-800 focus:border-zinc-500 text-white px-4 py-3 outline-none transition-colors text-sm font-light min-h-[120px]"
          placeholder="O que você deseja alcançar com esta campanha? Qual o diferencial da sua marca?"
        />
        {errors.description && <span className="text-red-500/70 text-xs mt-1 block">Obrigatório.</span>}
      </div>

      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-white text-zinc-950 py-4 uppercase tracking-widest text-xs font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isSubmitting ? 'Processando Aplicação...' : 'Submeter Para Curadoria'}
        {!isSubmitting && <ArrowRight className="w-4 h-4" />}
      </button>
      <p className="text-center text-xs text-zinc-600 mt-4">
        As aplicações são revisadas semanalmente.
      </p>
    </form>
    </>
  );
}
