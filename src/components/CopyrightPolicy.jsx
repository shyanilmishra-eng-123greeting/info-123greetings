import React from "react";

const CopyrightPolicy = () => {
  const dmcaRequirements = [
    "Physical or electronic signature of an authorized person.",
    "Identification of the copyrighted work claimed to have been infringed.",
    "Identification of the material that is to be removed or disabled.",
    "Contact information (Address, telephone, and email).",
    "A statement of good faith belief regarding the unauthorized use.",
    "A statement of accuracy, under penalty of perjury."
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-rose-100 overflow-x-hidden">
      
      {/* --- HERO / HEADER SECTION --- */}
      <section className="relative pt-28 pb-12 lg:pt-40 lg:pb-20 px-6 sm:px-10 lg:px-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-slate-100 mb-6 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-500">Legal Framework</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 leading-tight mb-6">
            Copyright & Intellectual <br />
            <span className="font-serif italic text-rose-500">Property Policy</span>
          </h1>
          <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            At 123Greetings, we respect the creative work of others and expect our community to do the same.
          </p>
        </div>
      </section>

      {/* --- CORE POLICY CONTENT --- */}
      <section className="py-20 px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          
          {/* General Policy Statement */}
          <div className="mb-20 space-y-6">
            <h2 className="text-2xl font-light text-slate-900 italic font-serif border-b border-slate-100 pb-4">Our Commitment</h2>
            <p className="text-slate-600 leading-relaxed font-light text-lg">
              123Greetings does not permit copyright infringing activities and infringement of intellectual property rights on its Website. 
              We will remove all Content if properly notified of infringement and reserve the right to remove Content without prior notice.
            </p>
            <div className="p-6 bg-rose-50/30 rounded-2xl border border-rose-100/50">
              <p className="text-sm text-slate-700 font-medium italic">
                Note: 123Greetings will terminate a User’s account if determined to be a repeat infringer of copyright at our sole discretion.
              </p>
            </div>
          </div>

          {/* DMCA Notification Section */}
          <div className="grid md:grid-cols-5 gap-12 items-start mb-20">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-light text-slate-900 italic font-serif mb-4">DMCA Notification</h2>
              <p className="text-slate-500 font-light leading-relaxed">
                If you believe your work has been copied in a way that constitutes copyright infringement, please provide our agent with the following written information.
              </p>
            </div>
            
            <div className="md:col-span-3 space-y-4">
              {dmcaRequirements.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl border border-slate-50 hover:border-rose-100 hover:bg-rose-50/10 transition-colors">
                  <span className="text-rose-400 font-serif italic font-bold">{index + 1}.</span>
                  <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Cards - Bento Style */}
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-light mb-10 italic font-serif">Reach Our Copyright Agent</h2>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="text-rose-400 uppercase text-[10px] font-bold tracking-[0.2em]">By Mail</h3>
                  <p className="text-slate-300 font-light leading-relaxed">
                    Copyright Agent, <br />
                    123Greetings.com, Inc. <br />
                    4052 S 124th Street, <br />
                    Greenfield, WI 53228
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-rose-400 uppercase text-[10px] font-bold tracking-[0.2em]">By Email</h3>
                    <a href="mailto:copyright@123greetings-inc.com" className="text-xl font-light hover:text-rose-300 transition-colors">
                      copyright@123greetings-inc.com
                    </a>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-rose-400 uppercase text-[10px] font-bold tracking-[0.2em]">By Fax</h3>
                    <p className="text-xl font-light text-slate-300">1 212 202 4738</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center border-t border-slate-100 pt-10">
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-4">
              Last Updated: February 24, 2026
            </p>
            <p className="text-slate-500 text-sm font-light max-w-xl mx-auto italic">
              Please note that under Section 512(f) of the US Copyright Act, misrepresenting infringement may lead to liability.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
};

export default CopyrightPolicy;