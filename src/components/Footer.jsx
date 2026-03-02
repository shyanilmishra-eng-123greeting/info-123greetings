import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-10 lg:px-20">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Logo (Takes up more space) */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col items-start">
            <a href="/" className="mb-6 transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <img 
                src="/logo.png" 
                alt="123Greetings" 
                className="h-12 sm:h-14 w-auto object-contain drop-shadow-sm"
              />
            </a>
            <p className="text-slate-500 leading-relaxed max-w-sm mb-8 font-light text-lg">
              Connecting the world through expression. The premier destination for digital connections since 1997.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              {/* X / Twitter */}
              <a href="#" aria-label="Twitter" className="p-3 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-rose-500 hover:border-rose-200 hover:bg-rose-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="p-3 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-rose-500 hover:border-rose-200 hover:bg-rose-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="p-3 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-rose-500 hover:border-rose-200 hover:bg-rose-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="md:col-span-6 lg:col-span-3 lg:col-start-7">
            <h3 className="font-semibold text-slate-900 mb-6 tracking-wide uppercase text-sm">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-slate-500 hover:text-rose-600 font-light transition-colors hover:translate-x-1 inline-block">Corporate Info</a>
              </li>
              <li>
                <a href="/media-kit" className="text-slate-500 hover:text-rose-600 font-light transition-colors hover:translate-x-1 inline-block">Media Kit</a>
              </li>
              <li>
                <a href="/press-releases" className="text-slate-500 hover:text-rose-600 font-light transition-colors hover:translate-x-1 inline-block">Press Releases</a>
              </li>
              <li>
                <a href="https://info.123greetings.com/company/contactus.html" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-rose-600 font-light transition-colors hover:translate-x-1 inline-block">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="font-semibold text-slate-900 mb-6 tracking-wide uppercase text-sm">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://www.123greetings.com/termsofuse/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-rose-600 font-light transition-colors hover:translate-x-1 inline-block">Terms of Use</a>
              </li>
              <li>
                <a href="https://www.123greetings.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-rose-600 font-light transition-colors hover:translate-x-1 inline-block">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Extras */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-400 font-light text-center md:text-left">
            <p>Copyright &copy; 123Greetings.com</p>
            <p>All Rights Reserved</p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-slate-400 font-light">
            <span>Connecting hearts worldwide</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-rose-500 animate-pulse"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;