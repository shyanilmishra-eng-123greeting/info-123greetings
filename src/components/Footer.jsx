import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-10 lg:px-20">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Logo */}
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
              <a href="https://x.com/123GreetingsCom" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="flex items-center justify-center w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-rose-500 hover:border-rose-200 hover:bg-rose-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/123GreetingsCom" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center justify-center w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-rose-500 hover:border-rose-200 hover:bg-rose-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Pinterest - FIXED VISIBILITY */}
              <a href="https://www.pinterest.com/123greetings/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="flex items-center justify-center w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-[#E60023] hover:border-red-100 hover:bg-red-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.289 2C6.617 2 2 6.617 2 12.289c0 4.332 2.674 8.013 6.457 9.546-.089-.81-.17-2.052.035-2.937.185-.794 1.197-5.059 1.197-5.059s-.306-.61-.306-1.515c0-1.42.822-2.48 1.848-2.48.871 0 1.292.654 1.292 1.44 0 .876-.558 2.184-.847 3.397-.24 1.014.51 1.84 1.508 1.84 1.81 0 3.2-1.909 3.2-4.666 0-2.438-1.752-4.144-4.256-4.144-2.899 0-4.601 2.175-4.601 4.422 0 .875.337 1.812.757 2.316.083.1.095.188.07.292l-.28 1.139c-.045.183-.147.222-.339.134-1.264-.588-2.054-2.435-2.054-3.918 0-3.19 2.318-6.12 6.683-6.12 3.508 0 6.234 2.499 6.234 5.841 0 3.485-2.197 6.289-5.247 6.289-1.025 0-1.988-.532-2.317-1.158l-.63 2.398c-.227.874-.842 1.968-1.255 2.634 1.15.355 2.362.55 3.617.55 5.671 0 10.289-4.618 10.289-10.289C22.578 6.617 17.96 2 12.289 2z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/123-greetings/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center justify-center w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-rose-500 hover:border-rose-200 hover:bg-rose-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
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
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="font-semibold text-slate-900 mb-6 tracking-wide uppercase text-sm">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://info.123greetings.com/company/copyright_policy.html" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-rose-600 font-light transition-colors hover:translate-x-1 inline-block">Copyright Policy</a>
              </li>
              <li>
                <a href="https://info.123greetings.com/company/terms_of_use.html" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-rose-600 font-light transition-colors hover:translate-x-1 inline-block">Terms of Use</a>
              </li>
              <li>
                <a href="https://info.123greetings.com/company/privacy_policy.html" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-rose-600 font-light transition-colors hover:translate-x-1 inline-block">Privacy Policy</a>
              </li>
              <li>
                <a href="https://info.123greetings.com/company/cookie_policy.html" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-rose-600 font-light transition-colors hover:translate-x-1 inline-block">Cookie Policy</a>
              </li>
              <li>
                <a href="https://info.123greetings.com/company/contactus.html" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-rose-600 font-light transition-colors hover:translate-x-1 inline-block">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
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