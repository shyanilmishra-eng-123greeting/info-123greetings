export default function Sitemap() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-10 font-sans">
      <h1 className="text-3xl text-center mb-10 font-semibold">Sitemap</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Main Pages */}
        <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
          <h3 className="text-lg mb-3 font-medium">Main Pages</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-slate-500 hover:text-rose-600 transition">Home</a></li>
            <li><a href="/corporate-info" className="text-slate-500 hover:text-rose-600 transition">Corporate Info</a></li>
            <li><a href="/media-kit" className="text-slate-500 hover:text-rose-600 transition">Media Kit</a></li>
            <li><a href="/press-releases" className="text-slate-500 hover:text-rose-600 transition">Press Releases</a></li>
          </ul>
        </div>

        {/* Legal (External Links) */}
        <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
          <h3 className="text-lg mb-3 font-medium">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://info.123greetings.com/company/copyright_policy.html" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-rose-600 font-light transition-all hover:translate-x-1 inline-block">
                Copyright Policy
              </a>
            </li>
            <li>
              <a href="https://info.123greetings.com/company/terms_of_use.html" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-rose-600 font-light transition-all hover:translate-x-1 inline-block">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="https://info.123greetings.com/company/privacy_policy.html" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-rose-600 font-light transition-all hover:translate-x-1 inline-block">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://info.123greetings.com/company/cookie_policy.html" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-rose-600 font-light transition-all hover:translate-x-1 inline-block">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="https://info.123greetings.com/company/contactus.html" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-rose-600 font-light transition-all hover:translate-x-1 inline-block">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
          <h3 className="text-lg mb-3 font-medium">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="/contact-us" className="text-slate-500 hover:text-rose-600 transition">
                Contact Us (Internal)
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}