import { Link } from "react-router-dom";

export default function Sitemap() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-rose-100 overflow-x-hidden pt-32 pb-24 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-16 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-slate-900 leading-tight mb-4">
            Site <span className="font-serif italic text-rose-500">Map.</span>
          </h1>
          <p className="text-lg text-slate-500 font-light max-w-2xl leading-relaxed">
            Navigate through all sections of the 123Greetings corporate and legal information site.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Main Pages */}
          <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm transition-all hover:bg-white hover:shadow-xl group">
            <h3 className="text-xl font-serif italic text-slate-900 mb-6 group-hover:text-rose-500 transition-colors">Main Pages</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-500 hover:text-rose-500 transition-all hover:translate-x-1 inline-block">Corporate Info</Link></li>
              <li><Link to="/media-kit" className="text-slate-500 hover:text-rose-500 transition-all hover:translate-x-1 inline-block">Media Kit</Link></li>
              <li><Link to="/press-releases" className="text-slate-500 hover:text-rose-500 transition-all hover:translate-x-1 inline-block">Press Releases</Link></li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm transition-all hover:bg-white hover:shadow-xl group">
            <h3 className="text-xl font-serif italic text-slate-900 mb-6 group-hover:text-rose-500 transition-colors">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="/copyright-policy" className="text-slate-500 hover:text-rose-500 transition-all hover:translate-x-1 inline-block">Copyright Policy</Link></li>
              <li><Link to="/terms-of-use" className="text-slate-500 hover:text-rose-500 transition-all hover:translate-x-1 inline-block">Terms of Use</Link></li>
              <li><Link to="/privacy-policy" className="text-slate-500 hover:text-rose-500 transition-all hover:translate-x-1 inline-block">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="text-slate-500 hover:text-rose-500 transition-all hover:translate-x-1 inline-block">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm transition-all hover:bg-white hover:shadow-xl group">
            <h3 className="text-xl font-serif italic text-slate-900 mb-6 group-hover:text-rose-500 transition-colors">Support</h3>
            <ul className="space-y-4">
              <li><Link to="/contact-us" className="text-slate-500 hover:text-rose-500 transition-all hover:translate-x-1 inline-block">Contact Us</Link></li>
              <li>
                <a 
                  href="http://help.123greetings.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-500 hover:text-rose-500 transition-all hover:translate-x-1 inline-block"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}