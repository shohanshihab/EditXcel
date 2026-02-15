
import React, { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { Category, PortfolioItem } from '../types';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  
  const categories: Category[] = ['All', 'Promotional', 'Faceless (Moto)', 'Car Niche', 'Cashcow Docs'];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-32 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-3xl">
            <h2 className="text-[#00f5b4] font-black uppercase tracking-[0.4em] text-xs mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-[#00f5b4]"></span> Case Study Vault
            </h2>
            <h3 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">Strategic <span className="text-zinc-800">Results</span></h3>
            <p className="text-slate-500 text-xl font-light leading-relaxed">
              We don't just edit videos; we engineer success stories. Explore our depth of work across high-performing YouTube niches.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#00f5b4] text-zinc-950 shadow-xl shadow-[#00f5b4]/20' 
                    : 'bg-zinc-900 text-slate-500 hover:bg-zinc-800 hover:text-white border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer relative bg-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-800/50 hover:border-[#00f5b4]/30 transition-all duration-700"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-zinc-950/85 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center">
                  <span className="text-[#00f5b4] text-xs font-black uppercase tracking-widest mb-4">
                    {item.category}
                  </span>
                  <h4 className="text-2xl font-black text-white uppercase mb-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                    {item.title}
                  </h4>
                  <div className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-white/20">
                    View Case Study
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-slate-500 font-bold uppercase tracking-widest text-sm">
            Cataloging new data points...
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-zinc-950/95 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={() => setSelectedItem(null)}
          ></div>
          
          <div className="relative w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-[40px] overflow-hidden shadow-2xl animate-in zoom-in slide-in-from-bottom-10 duration-500 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-6 md:p-10 border-b border-zinc-800 flex justify-between items-center bg-zinc-950/50 backdrop-blur-md sticky top-0 z-10">
              <div>
                <span className="text-[#00f5b4] text-[10px] font-black uppercase tracking-[0.3em] block mb-2">{selectedItem.category}</span>
                <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">{selectedItem.title}</h4>
              </div>
              <button 
                onClick={() => setSelectedItem(null)}
                className="w-12 h-12 bg-zinc-800 hover:bg-zinc-700 text-white rounded-2xl flex items-center justify-center transition-all active:scale-90"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Modal Content Scroll Area */}
            <div className="overflow-y-auto flex-1 p-6 md:p-10 custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Visual Side */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="aspect-video rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950">
                    <img 
                      src={selectedItem.thumbnail} 
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-zinc-950 rounded-3xl border border-zinc-800">
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">The Challenge</div>
                      <p className="text-sm text-slate-300 leading-relaxed">{selectedItem.challenge || 'Confidential strategic project development.'}</p>
                    </div>
                    <div className="p-6 bg-zinc-950 rounded-3xl border border-zinc-800">
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Our Solution</div>
                      <p className="text-sm text-slate-300 leading-relaxed">{selectedItem.solution || 'Custom automated post-production pipeline.'}</p>
                    </div>
                  </div>
                </div>

                {/* Details Side */}
                <div className="lg:col-span-5 space-y-10">
                  <div>
                    <h5 className="text-[10px] font-black text-[#00f5b4] uppercase tracking-[0.3em] mb-4">Project Overview</h5>
                    <p className="text-slate-400 leading-relaxed text-sm">{selectedItem.description}</p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center text-[#00f5b4]">
                        <i className="fas fa-user-tie"></i>
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Client</div>
                        <div className="font-bold">{selectedItem.client || 'Strategic Partner'}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#00f5b4]/10 border border-[#00f5b4]/20 rounded-xl flex items-center justify-center text-[#00f5b4]">
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Growth Impact</div>
                        <div className="font-bold text-[#00f5b4]">{selectedItem.results || 'Proprietary Growth'}</div>
                      </div>
                    </div>
                  </div>

                  <a 
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-4 w-full bg-[#00f5b4] hover:bg-white text-zinc-950 font-black uppercase tracking-widest py-6 rounded-2xl transition-all active:scale-95 shadow-xl shadow-[#00f5b4]/10"
                  >
                    Watch Full Project
                    <i className="fas fa-external-link-alt text-[10px]"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
