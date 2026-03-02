import { useState } from "react";

const navItems = [
  { label: "Corporate Info", path: "/" },
  { label: "Media Kit", path: "/media-kit" },
  { label: "Press Releases", path: "/press-releases" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Simple check for active path using standard browser window object
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : "/";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-6 transition-all duration-300">
      <header className="relative mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 py-3 rounded-full bg-white/90 backdrop-blur-xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
        
        {/* Left: Logo Section */}
        <a 
          href="/" 
          className="flex items-center gap-2 z-20 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <img 
            src="/logo.png" 
            alt="123 Greetings" 
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
        </a>

        {/* Center: Desktop Nav (Simplified Active State) */}
        <nav className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2 z-10">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                className={`px-4 py-2.5 text-sm font-medium rounded-full transition-colors ${
                  isActive 
                    ? "bg-gray-100 text-blue-600 font-semibold" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 z-20">
          <a 
            href="/contact" 
            className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            Contact Us 
            {/* Simple Inline SVG Arrow */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors border border-gray-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              /* Simple Inline SVG 'X' (Close) */
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              /* Simple Inline SVG Hamburger Menu */
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Floating Menu (Standard CSS Transition) */}
      {mobileOpen && (
        <div className="md:hidden absolute top-[calc(100%+0.5rem)] left-3 right-3 sm:left-4 sm:right-4 rounded-2xl bg-white border border-gray-200 shadow-2xl overflow-hidden p-3 animate-in fade-in slide-in-from-top-2 duration-200 z-40">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  className={`block px-5 py-3.5 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:pl-6"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            
            <div className="pt-3 mt-2 border-t border-gray-100">
              <a
                href="/contact"
                className="flex items-center justify-between px-5 py-4 rounded-xl text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
              >
                Contact Us 
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;