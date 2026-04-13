import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Corporate Info", path: "/" },
  { label: "Media Kit", path: "/media-kit" },
  { label: "Press Releases", path: "/press-releases" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-2 sm:p-4 md:p-6 transition-all duration-300">
      <header className="relative mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/90 backdrop-blur-xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
        
        {/* Left: Logo Section */}
        <Link 
          to="/" 
          className="flex items-center gap-2 z-20 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          onClick={() => setMobileOpen(false)}
        >
          <img 
            src="/logo.png" 
            alt="123 Greetings" 
            className="h-8 sm:h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 absolute left-1/2 -translate-x-1/2 z-10">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2.5 text-sm font-medium rounded-full transition-all ${
                  isActive 
                    ? "bg-slate-100 text-rose-600 font-semibold" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 z-20">
          <Link 
            to="/contact-us" 
            className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-rose-500 transition-all shadow-md hover:shadow-lg"
          >
            Contact Us 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors border border-slate-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Floating Menu */}
      {mobileOpen && (
        <>
          <div 
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm md:hidden z-30"
            onClick={() => setMobileOpen(false)}
          />
          <div className="md:hidden absolute top-[calc(100%+0.5rem)] left-2 right-2 sm:left-4 sm:right-4 rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden p-3 animate-in fade-in slide-in-from-top-4 duration-300 z-40">
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-5 py-4 rounded-2xl text-base font-medium transition-all ${
                      isActive
                        ? "bg-rose-50 text-rose-600 font-bold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              
              <div className="pt-2 mt-2 border-t border-slate-100">
                <Link
                  to="/contact-us"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-5 py-4 rounded-2xl text-base font-semibold bg-slate-900 text-white hover:bg-rose-500 transition-colors"
                >
                  Contact Us 
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;