import React from "react";
import { Link } from "react-router-dom";

// Simplified Stats Array with Inline SVGs
const stats = [
  { 
    label: "Monthly Visitors", 
    value: "15M+", 
    color: "text-blue-500",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
  },
  { 
    label: "Ecards Sent", 
    value: "2B+", 
    color: "text-rose-500",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
  },
  { 
    label: "Registered Users", 
    value: "10M+", 
    color: "text-indigo-500",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  },
  { 
    label: "Years Online", 
    value: "25+", 
    color: "text-emerald-500",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
  },
];

const CorporateInfoPage = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-rose-100 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 pb-16 lg:pt-44 lg:pb-24 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            <div className="flex-1 space-y-6 text-center lg:text-left animate-in fade-in slide-in-from-bottom-8 duration-700">
              
              {/* Heading First */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 leading-[1.15] md:leading-[1.1]">
                Connecting the world <br />
                <span className="font-serif italic text-rose-500">through expression.</span>
              </h1>

              {/* Established Pill */}
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Established 1997</span>
              </div>

              {/* Paragraph */}
              <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                123Greetings.com stands as the premier destination for digital 
                connections, reaching millions of hearts across the globe.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <button 
                  onClick={() => scrollToSection("stats-section")}
                  className="px-8 py-4 bg-rose-500 text-white rounded-full font-medium shadow-lg shadow-rose-200 flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95"
                >
                  Get Started 
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                </button>
                
                <button 
                  onClick={() => scrollToSection("info-sections")}
                  className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 hover:bg-slate-50"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-rose-500"><polygon points="6 3 20 12 6 21 6 3"/></svg>
                  Our Mission
                </button>
              </div>
            </div>
            
            <div className="flex-1 relative w-full lg:w-auto animate-in fade-in zoom-in-95 duration-1000">
              <div className="relative aspect-[4/3] sm:aspect-square rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden group shadow-2xl border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop" 
                  alt="Connection"
                  className="object-cover w-full h-full group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section id="stats-section" className="py-16 bg-white border-y border-slate-100 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group flex flex-col items-center gap-3 sm:gap-4 rounded-3xl border border-slate-50 bg-white p-6 sm:p-8 text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_20px_40px_rgba(0,0,0,0.06)] hover:border-rose-100 hover:bg-rose-50/10 active:scale-95"
              >
                <div className={`p-2.5 sm:p-3 rounded-2xl bg-slate-50 group-hover:bg-white transition-colors ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-900 tracking-tight block italic">
                    {stat.value}
                  </span>
                  <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-rose-400 transition-colors">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTIONS --- */}
      <section id="info-sections" className="py-20 lg:py-24 bg-white px-6 sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto space-y-24 lg:space-y-32">
          
          {/* What We Do */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 italic font-serif">What We Do</h2>
              <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                123Greetings.com offers a diverse portfolio of ecards spanning thousands of categories. Our platform is free to use, supported by advertising, making it accessible to everyone around the globe.
              </p>
            </div>
            <div className="bg-slate-50 p-8 lg:p-10 rounded-[2rem] shadow-sm border border-slate-100 transition-all hover:shadow-md">
               <ul className="space-y-5">
                 {['42,000+ Unique Ecards', '4,000+ Categories', 'Global Celebration Hub'].map((item) => (
                   <li key={item} className="flex items-center gap-4 text-slate-600 font-light">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-500 shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                     <span className="text-lg">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          {/* Our Reach */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="order-2 md:order-1 relative rounded-[2rem] overflow-hidden h-64 sm:h-80 shadow-inner bg-slate-200 group">
              <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Global Reach" />
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 italic font-serif">Our Reach</h2>
              <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                Serving users across 200+ countries, our traffic peaks around major occasions like Valentine's Day, Mother's Day, and Christmas—making us a premier platform for seasonal advertising.
              </p>
            </div>
          </div>

          {/* Business Model */}
          <div className="p-8 md:p-16 rounded-[2.5rem] lg:rounded-[3rem] bg-gradient-to-br from-rose-50 to-white border border-rose-100 shadow-xl relative overflow-hidden group">
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 italic font-serif">Business Model</h2>
              <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl mb-8">
                123Greetings is a free-to-use, advertising-supported platform. We offer a range of digital advertising opportunities that connect brands with a highly engaged audience.
              </p>
              <Link 
                to="/media-kit" 
                className="inline-flex items-center gap-2 text-rose-600 font-bold text-lg hover:text-rose-700 transition-all hover:translate-x-2"
              >
                Learn More in our Media Kit 
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </Link>
            </div>
            <div className="absolute -bottom-10 -right-10 p-10 opacity-5 pointer-events-none text-rose-900 transition-transform duration-700 group-hover:scale-110">
              <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CorporateInfoPage;