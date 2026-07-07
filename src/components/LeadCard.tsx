import React, { useState } from 'react';
import { Lead, getRegion } from '../data/leads';
import { ChevronDown, Copy, MapPin, Star, Instagram, Mail, Phone, Check, Map } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const tierProgressColors = {
  hot: 'bg-toxic',
  strong: 'bg-garnet',
  medium: 'bg-aqua',
  low: 'bg-amazon',
};

export default function LeadCard({ lead }: { lead: Lead; key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(lead.msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(lead.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const extractIgHandle = (text: string) => {
    const match = text.match(/@([a-zA-Z0-9_.]+)/);
    return match ? match[1] : null;
  };
  
  const igHandle = extractIgHandle(lead.ig);

  return (
    <div className={`bg-white border transition-colors duration-300 rounded-xl overflow-hidden ${isOpen ? 'border-toxic shadow-md' : 'border-amazon hover:border-garnet/30'}`}>
      {/* Header (Clickable) */}
      <div 
        className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-6 cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className={`text-3xl md:text-4xl font-serif font-light transition-colors ${isOpen ? 'text-toxic' : 'text-garnet/40'}`}>
            {String(lead.rank).padStart(2, '0')}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-xl md:text-2xl font-serif font-medium text-kite truncate">
              {lead.name}
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 font-mono text-[10px] md:text-xs tracking-wider uppercase text-garnet">
              <span className="flex items-center gap-1 bg-amazon/30 px-1.5 py-0.5 rounded-sm text-garnet font-semibold">
                <Map size={12} /> {getRegion(lead.loc)}
              </span>
              <span className="flex items-center gap-1"><MapPin size={12} /> {lead.loc}</span>
              <span className="hidden sm:inline">·</span>
              <span>{lead.brand}</span>
              <span className="hidden sm:inline">·</span>
              <span className="flex items-center gap-1"><Star size={12} /> {lead.rating}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8 mt-4 sm:mt-0">
          <div className="flex flex-col items-end">
            <div className="flex items-baseline gap-1">
              <span className={`text-2xl md:text-3xl font-serif font-light ${isOpen ? 'text-toxic' : 'text-kite'}`}>
                {lead.gap}
              </span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-garnet/60">
                / 100 gap
              </span>
            </div>
          </div>
          
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="text-garnet/50" />
          </motion.div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-4 sm:px-6 pb-4">
        <div className="h-1.5 w-full bg-snow rounded-full overflow-hidden border border-amazon">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${lead.gap}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full rounded-full ${tierProgressColors[lead.tier]}`}
          />
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-amazon bg-snow/50"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-amazon">
              
              {/* Left Panel: Briefing */}
              <div className="p-4 sm:p-6 space-y-6">
                <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-toxic font-semibold">
                  Briefing do Prospect
                </h4>
                
                <div className="space-y-4">
                  <DetailRow label="Perfil" value={lead.perfil} />
                  <DetailRow label="Dor principal" value={lead.dor} />
                  <DetailRow label="Oportunidade" value={lead.oportunidade} />
                  <DetailRow label="Tom" value={lead.tom} />
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-garnet min-w-[100px] pt-1">
                      Conteúdo
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {lead.conteudo.map((c, i) => (
                        <span key={i} className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 bg-aqua/20 text-kite rounded-sm border border-aqua/30">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-garnet min-w-[100px] pt-1">
                      Contactos
                    </span>
                    <div className="flex flex-col gap-2 text-sm text-kite">
                      <div className="flex items-center gap-2 group">
                        <Mail size={14} className="text-toxic"/> 
                        <span>{lead.email}</span>
                        <button 
                          onClick={handleCopyEmail}
                          className="text-garnet hover:text-toxic transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                          title="Copiar email"
                        >
                          {emailCopied ? <Check size={14} /> : <Copy size={14} />}
                        </button>
                      </div>
                      <span className="flex items-center gap-2"><Phone size={14} className="text-toxic"/> {lead.phone}</span>
                      <div className="flex items-center gap-2">
                        <Instagram size={14} className="text-toxic"/> 
                        {igHandle ? (
                          <a 
                            href={`https://instagram.com/${igHandle}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-toxic transition-colors underline decoration-amazon hover:decoration-toxic underline-offset-2 flex items-center gap-1"
                          >
                            {lead.ig}
                          </a>
                        ) : (
                          <span>{lead.ig}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel: Message */}
              <div className="p-4 sm:p-6 space-y-6 flex flex-col">
                <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-toxic font-semibold">
                  Mensagem de Primeiro Contacto
                </h4>
                
                <div className="text-xs text-garnet italic border-l-2 border-toxic pl-3">
                  Canal: Email · Tom: {lead.tom.split('.')[0]}
                </div>
                
                <div className="relative bg-white border border-amazon rounded-lg p-5 pt-12 text-sm leading-relaxed text-kite shadow-sm flex-1">
                  <button 
                    onClick={handleCopy}
                    className="absolute top-3 right-3 flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase bg-snow hover:bg-amazon text-garnet hover:text-toxic px-3 py-1.5 rounded transition-colors border border-amazon hover:border-toxic"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? 'Copiado' : 'Copiar'}
                  </button>
                  
                  <div className="space-y-4 whitespace-pre-wrap">
                    {lead.msg}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {lead.gatilhos.map((g, i) => (
                    <span key={i} className="font-mono text-[9px] tracking-wider uppercase px-2 py-1 bg-amazon text-garnet rounded-sm border border-garnet/10">
                      {g}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
      <span className="font-mono text-[10px] tracking-widest uppercase text-garnet min-w-[100px] pt-0.5">
        {label}
      </span>
      <span className="text-sm leading-relaxed text-kite flex-1">
        {value}
      </span>
    </div>
  );
}
