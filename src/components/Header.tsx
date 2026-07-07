export default function Header() {
  return (
    <header className="relative overflow-hidden bg-white border-b border-amazon px-6 py-12 md:py-16 lg:px-12">
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,var(--color-toxic)_0%,transparent_70%)] opacity-10 rounded-full pointer-events-none blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-toxic mb-4 font-semibold">
          Pipeline Global · Portugal Luxury & Premium Auto · 2026
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-kite leading-tight mb-4">
          Ranking <em className="italic text-garnet">Global</em> de Prospects<br className="hidden md:block"/>
          <span className="text-3xl md:text-5xl">— 26 Leads Integrados</span>
        </h1>
        
        <p className="text-garnet text-sm md:text-base max-w-2xl leading-relaxed mb-10">
          Fusão das duas listas de pesquisa. Ordenados do maior ao menor gap entre qualidade/potencial do negócio e presença nas redes sociais. Inclui briefing individual e mensagem de primeiro contacto.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 pt-8 border-t border-amazon">
          <Stat value="26" label="Total Prospects" />
          <Stat value="13" label="Lista A — Supercarros" />
          <Stat value="13" label="Lista B — Premium" />
          <Stat value="7" label="Gap crítico ≥85" highlight />
        </div>
      </div>
    </header>
  );
}

function Stat({ value, label, highlight = false }: { value: string; label: string; highlight?: boolean }) {
  return (
    <div>
      <div className={`font-serif text-3xl md:text-4xl font-light ${highlight ? 'text-toxic' : 'text-kite'}`}>
        {value}
      </div>
      <div className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-garnet mt-2">
        {label}
      </div>
    </div>
  );
}
