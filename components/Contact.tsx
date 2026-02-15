
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    {
      label: 'WhatsApp',
      value: '+8801315200671',
      link: 'https://wa.me/8801315200671',
      icon: 'fab fa-whatsapp',
      color: 'hover:text-green-400'
    },
    {
      label: 'Email',
      value: 'shohan.shihab.777@gmail.com',
      link: 'mailto:shohan.shihab.777@gmail.com',
      icon: 'far fa-envelope',
      color: 'hover:text-[#00f5b4]'
    },
    {
      label: 'Facebook',
      value: 'EditXcel Official',
      link: 'https://www.facebook.com/profile.php?id=61581641976984',
      icon: 'fab fa-facebook-f',
      color: 'hover:text-blue-500'
    },
    {
      label: 'YouTube',
      value: '@EditXcel7',
      link: 'https://www.youtube.com/@EditXcel7',
      icon: 'fab fa-youtube',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="contact" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#00f5b4]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-[#00f5b4] font-black uppercase tracking-[0.4em] text-xs mb-6 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[#00f5b4]"></span> Get in Touch <span className="w-8 h-px bg-[#00f5b4]"></span>
          </h2>
          <h3 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Ready to bring your <br/><span className="text-zinc-800">vision to life?</span></h3>
          <p className="text-slate-400 text-xl font-light max-w-2xl mx-auto">
            Have questions or want to collaborate? Connect with us via WhatsApp, email, Facebook, or YouTube. We’re just a message away!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Methods Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-6 p-6 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl transition-all duration-300 hover:border-[#00f5b4]/30 hover:bg-zinc-900`}
              >
                <div className={`w-14 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:bg-[#00f5b4] group-hover:text-zinc-950 text-slate-400`}>
                  <i className={method.icon}></i>
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{method.label}</div>
                  <div className={`text-lg font-bold tracking-tight text-white transition-colors duration-300 ${method.color}`}>
                    {method.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-zinc-900/40 p-8 md:p-12 rounded-[40px] border border-zinc-800/50 backdrop-blur-xl relative">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#00f5b4] transition-all text-white placeholder-zinc-800"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#00f5b4] transition-all text-white placeholder-zinc-800"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">How can we help?</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#00f5b4] transition-all text-white resize-none placeholder-zinc-800"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#00f5b4] hover:bg-white text-zinc-950 font-black uppercase tracking-widest py-5 rounded-2xl shadow-xl shadow-[#00f5b4]/10 transition-all active:scale-95 flex items-center justify-center gap-4"
              >
                Let's create extraordinary together
                <i className="fas fa-magic text-[10px]"></i>
              </button>
            </form>

            {submitted && (
              <div className="absolute inset-0 bg-zinc-950/98 backdrop-blur-md flex items-center justify-center rounded-[40px] p-10 text-center animate-in fade-in zoom-in duration-500">
                <div className="max-w-xs">
                  <div className="w-20 h-20 bg-[#00f5b4]/20 text-[#00f5b4] rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                    <i className="fas fa-check"></i>
                  </div>
                  <h4 className="text-2xl font-black uppercase mb-3 tracking-tighter text-white">Message Sent</h4>
                  <p className="text-slate-500 font-medium text-sm">Thanks for reaching out! We'll be in touch very soon.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
