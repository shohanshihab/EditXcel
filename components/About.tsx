
import React from 'react';
import { SKILLS, SERVICES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-zinc-900/30 relative overflow-hidden border-y border-zinc-900">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00f5b4]/5 rounded-full blur-[120px] -mr-[250px] -mt-[250px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-[#00f5b4] font-black uppercase tracking-[0.4em] text-xs mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-[#00f5b4]"></span> The Agency
            </h2>
            <h3 className="text-5xl md:text-7xl font-black mb-10 leading-tight uppercase tracking-tighter">
              BEYOND <span className="text-zinc-700">EDITING.</span>
            </h3>
            
            <div className="space-y-8 text-slate-400 text-xl font-light leading-relaxed">
              <p>
                At <span className="text-white font-bold italic">EditXcel</span>, we believe every story deserves to be told with impact. 
              </p>
              <p>
                From YouTube faceless videos to documentary-style edits, we provide high-quality video editing services that captivate audiences and enhance your digital presence.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mt-16">
              {[
                { label: 'Uptime', val: '24/7' },
                { label: 'Retention', val: '+45%' },
                { label: 'Efficiency', val: '2X' }
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-5xl font-black text-white mb-2">{stat.val}</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#00f5b4] font-black">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div key={service.title} className="p-8 bg-zinc-950 border border-zinc-800 rounded-3xl hover:border-[#00f5b4]/50 transition-colors group">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-[#00f5b4] mb-6 group-hover:bg-[#00f5b4] group-hover:text-zinc-950 transition-all duration-500">
                  <i className={`fas ${service.icon} text-xl`}></i>
                </div>
                <h5 className="text-lg font-black uppercase mb-4 tracking-tight">{service.title}</h5>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
