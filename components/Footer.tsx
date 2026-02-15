
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
          <Logo />
          
          <div className="flex flex-wrap gap-12">
            <div>
              <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-6">Explore</div>
              <ul className="space-y-3 text-sm font-bold">
                <li><a href="#portfolio" className="hover:text-[#00f5b4] transition-colors">Work</a></li>
                <li><a href="#about" className="hover:text-[#00f5b4] transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-[#00f5b4] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-6">Connect</div>
              <ul className="space-y-3 text-sm font-bold">
                <li><a href="https://www.youtube.com/@EditXcel7" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f5b4] transition-colors">YouTube</a></li>
                <li><a href="https://www.facebook.com/profile.php?id=61581641976984" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f5b4] transition-colors">Facebook</a></li>
                <li><a href="https://wa.me/8801315200671" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f5b4] transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-zinc-900">
          <div className="text-slate-600 text-xs font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} EditXcel Agency. All rights reserved.
          </div>
          <div className="flex gap-8 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
