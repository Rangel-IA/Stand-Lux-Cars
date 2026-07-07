/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { leads, Tier, Region, getRegion } from './data/leads';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import LeadCard from './components/LeadCard';

export default function App() {
  const [filterTier, setFilterTier] = useState<Tier | 'all'>('all');
  const [filterRegion, setFilterRegion] = useState<Region | 'all'>('all');

  const filteredLeads = leads.filter((l) => {
    const tierMatch = filterTier === 'all' || l.tier === filterTier;
    const regionMatch = filterRegion === 'all' || getRegion(l.loc) === filterRegion;
    return tierMatch && regionMatch;
  });

  const sections: { tier: Tier; label: string }[] = [
    { tier: 'hot', label: '🔴 Gap Crítico — Prioridade Imediata (≥ 85)' },
    { tier: 'strong', label: '🟠 Gap Elevado — Alta Conversão (70–84)' },
    { tier: 'medium', label: '🟡 Gap Moderado — Terceira Vaga (50–69)' },
    { tier: 'low', label: '🟢 Gap Menor — Manter em Pipeline (< 50)' },
  ];

  return (
    <div className="min-h-screen bg-snow text-kite selection:bg-toxic selection:text-snow pb-20">
      <Header />
      <Toolbar 
        filterTier={filterTier} 
        setFilterTier={setFilterTier} 
        filterRegion={filterRegion} 
        setFilterRegion={setFilterRegion} 
      />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-12">
        {sections.map((section) => {
          const sectionLeads = filteredLeads.filter((l) => l.tier === section.tier);
          if (sectionLeads.length === 0) return null;

          return (
            <section key={section.tier} className="space-y-4">
              <div className="flex items-center gap-4">
                <h2 className="font-mono text-xs md:text-sm tracking-widest uppercase font-semibold text-garnet bg-amazon px-4 py-2 rounded-md">
                  {section.label}
                </h2>
                <div className="flex-1 h-px bg-amazon"></div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {sectionLeads.map((lead) => (
                  <LeadCard key={lead.rank} lead={lead} />
                ))}
              </div>
            </section>
          );
        })}
        
        {filteredLeads.length === 0 && (
          <div className="text-center py-20 text-garnet font-mono text-sm uppercase tracking-widest">
            Nenhum prospect encontrado com os filtros atuais.
          </div>
        )}
      </main>
    </div>
  );
}
