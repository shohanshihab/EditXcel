
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-[#050505]">
      {/* --- PROFESSIONAL EDITING WORKSPACE BACKGROUND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* Deep Atmosphere Glows */}
        <div className="absolute top-0 right-0 w-[70%] h-[70%] bg-indigo-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-purple-900/10 blur-[120px] rounded-full"></div>
        
        {/* The Timeline Canvas */}
        <div className="absolute inset-0 opacity-[0.15]">
          {/* Timecode Header Bar */}
          <div className="h-8 border-b border-white/5 flex items-center px-4 gap-20">
             {Array.from({ length: 15 }).map((_, i) => (
               <div key={i} className="text-[9px] font-mono text-zinc-600 tracking-widest">
                 00:00:{i < 10 ? `0${i}` : i}:00
               </div>
             ))}
          </div>

          {/* Video Tracks (Top Half) */}
          <div className="absolute top-[15%] w-full flex flex-col gap-px">
            {/* V2 Track */}
            <div className="h-14 border-b border-white/5 flex items-center relative">
              <span className="absolute left-4 text-[8px] font-bold text-zinc-800 uppercase">V2</span>
              {/* Clip B-Roll */}
              <div className="ml-[35%] w-32 h-10 bg-purple-500/20 border border-purple-500/30 rounded-sm relative">
                <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-purple-400/40 rounded-full"></div>
              </div>
            </div>
            {/* V1 Track */}
            <div className="h-16 border-b border-white/5 flex items-center relative">
              <span className="absolute left-4 text-[8px] font-bold text-zinc-800 uppercase">V1</span>
              {/* Main Sequence Clips */}
              <div className="ml-[5%] w-64 h-12 bg-blue-500/20 border border-blue-400/30 rounded-sm flex items-end px-2 pb-1 gap-1">
                 <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                 <div className="w-1 h-1 bg-white/20 rounded-full"></div>
              </div>
              <div className="ml-1 w-48 h-12 bg-blue-500/25 border border-blue-400/40 rounded-sm flex items-center justify-center">
                 <div className="w-[80%] h-px bg-white/10 relative">
                    <div className="absolute -top-1 left-[20%] w-2 h-2 bg-white/40 rotate-45 border border-white/20 scale-50"></div>
                    <div className="absolute -top-1 left-[70%] w-2 h-2 bg-white/40 rotate-45 border border-white/20 scale-50"></div>
                 </div>
              </div>
            </div>
          </div>

          {/* Audio Tracks (Bottom Half) */}
          <div className="absolute bottom-[10%] w-full flex flex-col gap-px">
            <div className="h-12 border-t border-white/5 flex items-center relative">
              <span className="absolute left-4 text-[8px] font-bold text-zinc-800 uppercase">A1</span>
              <div className="ml-[10%] w-[80%] h-8 bg-[#00f5b4]/5 border border-[#00f5b4]/10 rounded-sm flex items-center justify-around px-4 opacity-50">
                {Array.from({length: 60}).map((_, i) => (
                  <div key={i} className="w-[1px] bg-[#00f5b4]/30" style={{ height: `${20 + Math.random() * 60}%` }}></div>
                ))}
              </div>
            </div>
            <div className="h-10 border-t border-white/5 flex items-center relative">
              <span className="absolute left-4 text-[8px] font-bold text-zinc-800 uppercase">A2</span>
              <div className="ml-[25%] w-40 h-6 bg-[#00f5b4]/5 border border-[#00f5b4]/10 rounded-sm"></div>
            </div>
          </div>

          {/* Main Playhead */}
          <div className="absolute top-0 bottom-0 left-[45%] w-px bg-white/20 z-10">
            <div className="absolute top-0 -translate-x-1/2 w-3 h-5 bg-white/30 rounded-b-sm border-x border-b border-white/10"></div>
          </div>
        </div>

        {/* --- SOFTWARE LOGOS (TOP RIGHT - DISCREET) --- */}
        <div className="absolute top-28 right-8 flex gap-4 items-center opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          {/* After Effects Placeholder Style */}
          <div className="flex flex-col items-center gap-1 group">
            <div className="w-10 h-10 rounded-lg bg-[#00005b] border border-[#d291ff]/30 flex items-center justify-center text-[#d291ff] font-bold text-xs shadow-inner">Ae</div>
            <span className="text-[7px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-[#d291ff] transition-colors">VFX</span>
          </div>
          {/* DaVinci Resolve Style */}
          <div className="flex flex-col items-center gap-1 group">
            <div className="w-10 h-10 rounded-full bg-zinc-900 border border-orange-500/30 flex items-center justify-center shadow-inner">
               <div className="w-4 h-4 rounded-full border border-orange-500/50 flex items-center justify-center">
                 <div className="w-1 h-1 bg-orange-500/50 rounded-full"></div>
               </div>
            </div>
            <span className="text-[7px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-orange-500 transition-colors">Grade</span>
          </div>
          {/* CapCut Style */}
          <div className="flex flex-col items-center gap-1 group">
            <div className="w-10 h-10 rounded-lg bg-white/90 border border-zinc-200 flex items-center justify-center shadow-inner">
               <i className="fas fa-video text-black text-xs"></i>
            </div>
            <span className="text-[7px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-white transition-colors">Edit</span>
          </div>
        </div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        {/* Main Banner Visual */}
        <div className="relative mb-14 group inline-block">
          {/* Content area glow to help text legibility */}
          <div className="absolute -inset-20 bg-black/40 blur-[100px] pointer-events-none"></div>
          
          <div className="relative">
            <img 
              src="banner.png" 
              alt="EditXcel Official Banner" 
              className="w-full max-w-4xl mx-auto rounded-[2.5rem] shadow-[0_50px_120px_-30px_rgba(0,0,0,1)] border border-white/5 group-hover:border-[#00f5b4]/30 transition-all duration-700"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200"; 
              }}
            />
            
            {/* Dynamic Slogan Badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap px-8 py-3 bg-zinc-950/90 backdrop-blur-2xl border border-white/10 rounded-full text-[#00f5b4] text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl">
              <span className="animate-pulse mr-2 text-[#00f5b4]">●</span>
              Transforming Ideas into Cinematic Experiences
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.85] uppercase text-white drop-shadow-2xl">
            MASTERING <br/>
            <span className="text-zinc-800">STORIES.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
            Welcome to <span className="text-[#00f5b4] font-bold">EditXcel</span>, where creativity meets precision. We craft engaging, professional, and storytelling-driven videos that elevate your brand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a 
              href="#portfolio" 
              className="group w-full sm:w-auto px-12 py-6 bg-[#00f5b4] text-zinc-950 rounded-2xl font-black uppercase tracking-widest hover:bg-white transition-all active:scale-95 flex items-center justify-center gap-3 shadow-2xl shadow-[#00f5b4]/20"
            >
              Explore Portfolio
              <i className="fas fa-chevron-right text-[10px] transition-transform group-hover:translate-x-1"></i>
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-12 py-6 bg-zinc-900/50 backdrop-blur-md border border-white/5 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-zinc-800 transition-all active:scale-95"
            >
              Start Project
            </a>
          </div>
        </div>
      </div>

      {/* Scrub Bar Subtle Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    </section>
  );
};

export default Hero;
