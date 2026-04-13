import React from "react";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  const cookieTypes = [
    {
      title: "Strictly Necessary",
      desc: "Essential for basic services like registration or sign-in. They don't gather marketing info.",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    },
    {
      title: "Performance",
      desc: "Anonymous data used to understand how visitors move around the site and how they found us.",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
    },
    {
      title: "Functionality",
      desc: "Remember your username, language, and region preferences for a personalized UI.",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
    },
    {
      title: "Targeting",
      desc: "Delivers relevant ads and limits how many times you see them based on browsing activity.",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-rose-100 overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <section className="relative pt-28 pb-12 sm:pb-16 lg:pt-40 lg:pb-20 px-6 sm:px-10 lg:px-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-slate-100 mb-6 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-500">Privacy Transparency</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-slate-900 leading-tight mb-6">
            Our <span className="font-serif italic text-rose-500">Cookie Policy</span>
          </h1>
          <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            We use cookies to personalize your experience, understand how our site is used, and show you content that matters.
          </p>
        </div>
      </section>

      {/* --- CONTENT --- */}
      <section className="py-16 sm:py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          
          {/* Intro Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-24 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-slate-900 italic font-serif">What are cookies?</h2>
              <p className="text-slate-600 leading-relaxed font-light text-lg">
                Cookies are small text files created on your computer when you visit a website. They recognize you on subsequent visits and help the internet feel much smoother and more interactive.
              </p>
              <p className="text-slate-600 leading-relaxed font-light">
                Some pages also contain <span className="text-rose-500 font-medium italic">web beacons</span> (clear gifs) that track the effectiveness of campaigns without identifying you personally.
              </p>
            </div>
            <div className="p-8 sm:p-10 bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] text-white space-y-4">
              <h3 className="text-rose-400 uppercase text-[10px] font-bold tracking-[0.2em]">Our Stance</h3>
              <p className="text-xl font-light leading-relaxed text-slate-200">
                If you do not accept this Cookie Policy, please do not use this site. We believe your experience would be adversely affected without them.
              </p>
            </div>
          </div>

          {/* Types of Cookies Grid */}
          <div className="mb-16 sm:mb-24">
            <h2 className="text-3xl font-light text-slate-900 italic font-serif mb-12 text-center">How we categorize cookies</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {cookieTypes.map((type) => (
                <div key={type.title} className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-slate-100 bg-white hover:border-rose-100 hover:shadow-xl transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-rose-500 mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                    {type.icon}
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2 sm:mb-3">{type.title}</h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Management Section */}
          <div className="space-y-12">
            <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-light text-slate-900 italic font-serif">Controlling your settings</h2>
              <p className="text-slate-500 font-light leading-relaxed">
                You can alter your browser settings to erase cookies or prevent automatic acceptance. Note that many websites will not work properly without them.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Performance Links */}
              <div className="space-y-6">
                <h3 className="text-rose-500 font-serif italic text-xl border-b border-rose-100 pb-2">Analytics Opt-out</h3>
                <ul className="space-y-3">
                  <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-slate-600 hover:text-rose-600 transition-colors text-sm font-light block">Google Analytics</a></li>
                  <li><a href="https://bitly.com/pages/privacy" className="text-slate-600 hover:text-rose-600 transition-colors text-sm font-light block">Bitly</a></li>
                  <li><a href="https://www.google.co.uk/intl/en/policies/privacy/" className="text-slate-600 hover:text-rose-600 transition-colors text-sm font-light block">YouTube Tracking</a></li>
                </ul>
              </div>

              {/* Advertising Links */}
              <div className="space-y-6">
                <h3 className="text-rose-500 font-serif italic text-xl border-b border-rose-100 pb-2">Advertising Controls</h3>
                <ul className="space-y-3">
                  <li><a href="https://www.google.com/policies/technologies/ads/" className="text-slate-600 hover:text-rose-600 transition-colors text-sm font-light block">Google Ads</a></li>
                  <li><a href="https://www.rubiconproject.com/privacy/" className="text-slate-600 hover:text-rose-600 transition-colors text-sm font-light block">Rubicon</a></li>
                  <li><a href="http://www.youronlinechoices.com" className="text-slate-600 hover:text-rose-600 transition-colors text-sm font-light block">IAB Consumer Advice</a></li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h3 className="text-rose-500 font-serif italic text-xl border-b border-rose-100 pb-2">Social Sharing</h3>
                <ul className="space-y-3">
                  <li><a href="https://twitter.com/privacy" className="text-slate-600 hover:text-rose-600 transition-colors text-sm font-light block">Twitter / X</a></li>
                  <li><a href="https://www.facebook.com/about/privacy/" className="text-slate-600 hover:text-rose-600 transition-colors text-sm font-light block">Facebook</a></li>
                  <li><a href="https://www.linkedin.com/legal/privacy-policy" className="text-slate-600 hover:text-rose-600 transition-colors text-sm font-light block">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-20 sm:mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-400 text-xs uppercase tracking-widest text-center">
              Last Updated: February 24, 2026
            </div>
            <div className="flex gap-8">
              <Link to="/privacy-policy" className="text-slate-500 hover:text-rose-500 text-sm font-medium transition-colors">Privacy Policy</Link>
              <Link to="/contact-us" className="text-slate-500 hover:text-rose-500 text-sm font-medium transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CookiePolicy;