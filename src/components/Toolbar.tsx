import React from 'react';
import { Tier, Region } from '../data/leads';
import { Map } from 'lucide-react';

interface ToolbarProps {
  filterTier: Tier | 'all';
  setFilterTier: (t: Tier | 'all') => void;
  filterRegion: Region | 'all';
  setFilterRegion: (r: Region | 'all') => void;
}

export default function Toolbar({ filterTier, setFilterTier, filterRegion, setFilterRegion }: ToolbarProps) {
  return (
    <div className="sticky top-0 z-50 bg-snow/90 backdrop-blur-md border-b border-amazon px-4 py-3 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-3">
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          <FilterButton 
            active={filterTier === 'all'} 
            onClick={() => setFilterTier('all')}
          >
            Todos (26)
          </FilterButton>
          <FilterButton 
            active={filterTier === 'hot'} 
            onClick={() => setFilterTier('hot')}
            dotColor="bg-toxic"
          >
            Crítico
          </FilterButton>
          <FilterButton 
            active={filterTier === 'strong'} 
            onClick={() => setFilterTier('strong')}
            dotColor="bg-garnet"
          >
            Elevado
          </FilterButton>
          <FilterButton 
            active={filterTier === 'medium'} 
            onClick={() => setFilterTier('medium')}
            dotColor="bg-aqua"
          >
            Moderado
          </FilterButton>
          <FilterButton 
            active={filterTier === 'low'} 
            onClick={() => setFilterTier('low')}
            dotColor="bg-kite"
          >
            Menor
          </FilterButton>
          
          <div className="w-px h-8 bg-amazon mx-2 shrink-0" />
          
          <div className="flex items-center gap-2 bg-snow rounded-md p-1 border border-amazon">
            <Map className="w-3.5 h-3.5 text-garnet/50 ml-2" />
            <FilterButton 
              active={filterRegion === 'Norte'} 
              onClick={() => setFilterRegion(filterRegion === 'Norte' ? 'all' : 'Norte')}
            >
              Norte
            </FilterButton>
            <FilterButton 
              active={filterRegion === 'Centro'} 
              onClick={() => setFilterRegion(filterRegion === 'Centro' ? 'all' : 'Centro')}
            >
              Centro
            </FilterButton>
            <FilterButton 
              active={filterRegion === 'Centro/Sul'} 
              onClick={() => setFilterRegion(filterRegion === 'Centro/Sul' ? 'all' : 'Centro/Sul')}
            >
              Centro/Sul
            </FilterButton>
            <FilterButton 
              active={filterRegion === 'Sul'} 
              onClick={() => setFilterRegion(filterRegion === 'Sul' ? 'all' : 'Sul')}
            >
              Sul
            </FilterButton>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 pt-2 border-t border-amazon/50">
          <div className="flex items-center gap-4">
            <LegendItem color="bg-toxic" label="≥ 85 Crítico" />
            <LegendItem color="bg-garnet" label="70–84 Elevado" />
            <LegendItem color="bg-aqua" label="50–69 Moderado" />
            <LegendItem color="bg-kite" label="< 50 Menor" />
          </div>
        </div>

      </div>
    </div>
  );
}

function FilterButton({ active, onClick, children, dotColor }: { active: boolean; onClick: () => void; children: React.ReactNode; dotColor?: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 font-mono text-[10px] tracking-wider uppercase whitespace-nowrap px-4 py-2.5 rounded-md border transition-all duration-200 shrink-0
        ${active 
          ? 'bg-toxic/10 border-toxic text-toxic font-semibold' 
          : 'bg-white border-amazon text-garnet hover:border-toxic/50 hover:text-toxic'
        }`}
    >
      {dotColor && <span className={`w-2 h-2 rounded-full ${dotColor}`} />}
      {children}
    </button>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-wider uppercase text-garnet/70">
      <span className={`w-1.5 h-1.5 rounded-full ${color}`} />
      {label}
    </div>
  );
}
