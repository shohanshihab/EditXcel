
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Our Team', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="hover:opacity-80 transition-opacity">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-[#00f5b4] transition-all"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-6 py-2.5 bg-[#00f5b4] hover:bg-[#00d49b] text-zinc-950 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-[#00f5b4]/20 active:scale-95"
          >
            Start Project
          </a>
        </nav>

        <button className="md:hidden text-2xl text-slate-300">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
