import React from "react";

const PrivacyPolicy = () => {
  const highlights = [
    { title: "Data Security", text: "We use encryption and strict access controls to safeguard your info.", icon: "🔒" },
    { title: "Transparency", text: "We only share PII with your consent or for legal requirements.", icon: "👁️" },
    { title: "Control", text: "You can modify or delete your data at any time via Account Settings.", icon: "⚙️" },
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-rose-100 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 sm:px-10 lg:px-20 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-slate-100 mb-6 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-500">Effective Feb 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 leading-tight mb-6">
            Your Privacy is <br />
            <span className="font-serif italic text-rose-500">Our Priority.</span>
          </h1>
          <p className="text-lg text-slate-500 font-light max-w-2xl leading-relaxed">
            This policy outlines how 123Greetings collects, protects, and utilizes your data across our platforms.
          </p>
        </div>
      </section>

      {/* --- POLICY BODY --- */}
      <section className="py-20 px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar Highlights */}
          <aside className="lg:w-1/3 space-y-8">
            <div className="sticky top-32 space-y-8">
              <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
                <h3 className="text-rose-400 uppercase text-[10px] font-bold tracking-[0.2em] mb-6">Policy Highlights</h3>
                <div className="space-y-6">
                  {highlights.map((item) => (
                    <div key={item.title} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span>{item.icon}</span>
                        <h4 className="font-medium text-sm">{item.title}</h4>
                      </div>
                      <p className="text-slate-400 text-xs font-light leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-rose-50 rounded-[2.5rem] border border-rose-100">
                <h3 className="text-rose-500 uppercase text-[10px] font-bold tracking-[0.2em] mb-4">Questions?</h3>
                <p className="text-slate-600 text-sm font-light mb-4">Our Privacy Agent is here to help with any data-related queries.</p>
                <a href="mailto:privacy@123greetings-inc.com" className="text-rose-600 font-bold text-sm hover:underline">
                  privacy@123greetings-inc.com
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content Text */}
          <div className="lg:w-2/3 space-y-12 prose prose-slate prose-lg max-w-none">
            
            <section>
              <h2 className="text-3xl font-light text-slate-900 italic font-serif">1. Overview & Agreement</h2>
              <p className="text-slate-600 font-light leading-relaxed">
                Use of 123Greetings website(s) and software is subject to this Privacy Policy. By accessing the Website, you agree to the collection and use of your personal information as described here. If you are under 13, you are not eligible to use the Website.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light text-slate-900 italic font-serif">2. Information Collection</h2>
              <div className="grid md:grid-cols-2 gap-8 not-prose mt-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-3">Personally Identifiable</h4>
                  <p className="text-sm text-slate-600 font-light">Name, email address, UserID, date of birth, and transaction details. We may also collect recipient info when you send an ecard.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-3">Non-Personal Data</h4>
                  <p className="text-sm text-slate-600 font-light">IP addresses, browser types, and usage patterns collected via cookies and web analytics tools like Google Analytics.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light text-slate-900 italic font-serif">3. Ecard Communications</h2>
              <p className="text-slate-600 font-light leading-relaxed">
                Ecards are treated as <span className="text-rose-500 italic">private correspondence</span>. We do not monitor or edit messages unless necessary for technical processing or network maintenance. Note: Your IP address is included in the ecard source to prevent anonymous abuse.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light text-slate-900 italic font-serif">4. Data Usage & Sharing</h2>
              <p className="text-slate-600 font-light leading-relaxed">
                We use information to improve our features, personalize advertisements, and fulfill your requests. While we share aggregate data with advertisers, your PII is never shared with third parties for their marketing without your explicit consent.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light text-slate-900 italic font-serif">5. Your Controls</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <div>
                    <strong className="block text-slate-900">Modification</strong>
                    <p className="text-sm text-slate-500 font-light">Update your info through the "My Account" or "Account Settings" section.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <div>
                    <strong className="block text-slate-900">Deletion (Opt-Out)</strong>
                    <p className="text-sm text-slate-500 font-light">Email <span className="text-rose-500">support@123greetings.com</span> to request data removal from our active databases.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-12 border-t border-slate-100">
              <h2 className="text-3xl font-light text-slate-900 italic font-serif mb-6">6. Third-Party Advertising</h2>
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                We work with NAI and DAA members for interest-based advertising. You can opt-out of targeted ads via:
                <br />
                <a href="http://www.aboutads.info/choices/" className="text-rose-500 hover:underline">www.aboutads.info/choices/</a>
              </p>
            </section>

            <div className="bg-slate-50 p-10 rounded-[2.5rem] space-y-4">
              <h2 className="text-xl font-medium text-slate-900">Parental Oversight</h2>
              <p className="text-slate-600 text-sm font-light italic">
                123Greetings does not knowingly collect information from children under 13. If we discover such data has been collected without parental consent, it will be deleted immediately.
              </p>
            </div>

            <footer className="pt-8 text-slate-400 text-[10px] uppercase tracking-widest text-center lg:text-left">
              Last Updated: February 24, 2026 • 123Greetings.com, Inc. • Greenfield, WI
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;