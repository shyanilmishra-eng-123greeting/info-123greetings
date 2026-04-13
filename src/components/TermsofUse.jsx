import React from "react";

const TermsofUse = () => {
  const sections = [
    { id: "acceptance", title: "Acceptance" },
    { id: "access", title: "Website Access" },
    { id: "property", title: "Intellectual Property" },
    { id: "submissions", title: "User Submissions" },
    { id: "disclaimers", title: "Disclaimers & Liability" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-rose-100 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 px-10 lg:px-20 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-slate-100 mb-6 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-500 underline underline-offset-4">User Agreement</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 leading-tight mb-6">
            Terms of <span className="font-serif italic text-rose-500">Service</span>
          </h1>
          <p className="text-lg text-slate-500 font-light max-w-2xl leading-relaxed">
            Please read these terms carefully before using our platform. By accessing 123Greetings, you agree to be bound by these provisions.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT AREA --- */}
      <section className="py-20 px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Quick Nav Sidebar */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-32 space-y-6">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Jump to Section</h3>
              <nav className="flex flex-col gap-4">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className="text-left text-sm font-medium text-slate-600 hover:text-rose-500 transition-colors border-l-2 border-transparent hover:border-rose-200 pl-4"
                  >
                    {sec.title}
                  </button>
                ))}
              </nav>
              <div className="pt-8 border-t border-slate-100">
                <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-tighter">
                  Last Updated<br />
                  <span className="text-slate-900 font-bold">February 24, 2026</span>
                </p>
              </div>
            </div>
          </aside>

          {/* Legal Text */}
          <div className="lg:w-3/4 space-y-20">
            
            {/* 1. Acceptance */}
            <section id="acceptance" className="scroll-mt-32">
              <h2 className="text-3xl font-light text-slate-900 italic font-serif mb-6">1. Your Acceptance</h2>
              <div className="prose prose-slate max-w-none font-light text-slate-600 leading-relaxed">
                <p>
                  By using or visiting this Website, you enter into a User Agreement with 123Greetings.com, Inc. 
                  This includes assent to these Terms of Use and our <a href="/privacy-policy" className="text-rose-500 hover:underline">Privacy Policy</a>. 
                  If you do not agree, please discontinue use of the Website immediately.
                </p>
                <div className="p-6 bg-slate-900 rounded-3xl text-white mt-8">
                  <p className="text-sm italic opacity-90">
                    "The Website" refers to all content available via 123Greetings.com, 123invitations.com, and other controlled domains.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Access */}
            <section id="access" className="scroll-mt-32">
              <h2 className="text-3xl font-light text-slate-900 italic font-serif mb-6">2. Website Access & Accounts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-xs uppercase tracking-widest text-rose-500 mb-4">Permissions</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    Usage is granted for personal, non-commercial use only. You agree not to copy, modify, or distribute content without authorization, or disrupt servers and networks.
                  </p>
                </div>
                <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-xs uppercase tracking-widest text-rose-500 mb-4">Account Security</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    You are solely responsible for account activity. You must provide accurate info and keep your password secure. Notify us immediately of any security breaches.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Intellectual Property */}
            <section id="property" className="scroll-mt-32">
              <h2 className="text-3xl font-light text-slate-900 italic font-serif mb-6">3. Intellectual Property Rights</h2>
              <p className="text-slate-600 font-light leading-relaxed mb-6">
                All text, software, scripts, graphics, and trademarks ("Marks") are owned by or licensed to 123Greetings. Content is provided "AS IS" for personal use.
              </p>
              <ul className="space-y-3">
                {['No commercial exploitation without consent', 'Retain all proprietary notices on downloads', 'No circumvention of security features'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-500 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" /> {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Submissions */}
            <section id="submissions" className="scroll-mt-32">
              <h2 className="text-3xl font-light text-slate-900 italic font-serif mb-6">4. User Submissions</h2>
              <div className="p-10 border border-rose-100 rounded-[3rem] bg-rose-50/20">
                <p className="text-slate-600 font-light leading-relaxed italic mb-6">
                  "You retain ownership of your submissions, but grant 123Greetings a worldwide, non-exclusive, transferable license to use, edit, and display your content in connection with our business."
                </p>
                <p className="text-sm text-slate-500 font-light">
                  You represent that you have all necessary permissions for any identifiable persons or copyrighted material in your submissions.
                </p>
              </div>
            </section>

            {/* 5. Disclaimers */}
            <section id="disclaimers" className="scroll-mt-32">
              <h2 className="text-3xl font-light text-slate-900 italic font-serif mb-6">5. Disclaimers & Liability</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-slate-900">
                  <h4 className="font-bold text-slate-900 mb-2 uppercase text-[10px] tracking-widest">Warranty Disclaimer</h4>
                  <p className="text-sm text-slate-600 font-light italic uppercase">
                    Use of the website is at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied.
                  </p>
                </div>
                <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-rose-500">
                  <h4 className="font-bold text-rose-500 mb-2 uppercase text-[10px] tracking-widest">Limitation of Liability</h4>
                  <p className="text-sm text-slate-600 font-light italic uppercase">
                    In no event shall 123Greetings be liable for any direct, indirect, or consequential damages resulting from errors in content, personal injury, or unauthorized server access.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer / Jurisdiction */}
            <footer className="pt-20 border-t border-slate-100 space-y-8">
              <div className="grid sm:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-slate-900 font-medium mb-2">Governing Law</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    These terms are governed by the laws of the State of New York. Any disputes shall be decided exclusively in New York courts.
                  </p>
                </div>
                <div>
                  <h4 className="text-slate-900 font-medium mb-2">Time Limit</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed uppercase font-bold text-rose-500">
                    Any cause of action must commence within one (1) year after it accrues, or it is permanently barred.
                  </p>
                </div>
              </div>
              <div className="text-center pt-10">
                <p className="text-[10px] text-slate-400 tracking-[0.3em] uppercase">123Greetings.com, Inc. • Greenfield, WI 53228</p>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsofUse;