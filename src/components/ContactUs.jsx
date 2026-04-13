import React from "react";

const contactOptions = [
  {
    title: "Business Opportunities",
    description: "Explore new ventures and commercial growth with 123Greetings.",
    link: "http://help.123greetings.com/contact_us.html?22",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  },
  {
    title: "Content Partnerships",
    description: "Collaborate with us to showcase creative content to millions.",
    link: "http://help.123greetings.com/contact_us.html?25",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h.01"/><path d="M7 20h.01"/><path d="M17 20h.01"/><path d="M2 20h.01"/><path d="M22 20h.01"/><path d="M7 16h10V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v12Z"/></svg>
  },
  {
    title: "Distribution Partnerships",
    description: "Expand the reach of digital expressions through our network.",
    link: "http://help.123greetings.com/contact_us.html?26",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  },
  {
    title: "Marketing Opportunities",
    description: "Connect your brand with our highly engaged global audience.",
    link: "http://help.123greetings.com/contact_us.html?28",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12V2"/><path d="M12 12l8.5 8.5"/><path d="M12 12l-8.5 8.5"/><circle cx="12" cy="12" r="2"/><path d="M20 12h2"/><path d="M2 12h2"/><path d="M12 20v2"/></svg>
  },
  {
    title: "Strategic Partnerships",
    description: "Form long-term alliances to shape the future of digital greetings.",
    link: "http://help.123greetings.com/contact_us.html?29",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 11 2-2-2-2"/><path d="M11 13l4-4"/><path d="m15 17 2-2-2-2"/><path d="M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"/></svg>
  },
  {
    title: "Other Enquiries",
    description: "Have something else in mind? We'd love to hear from you.",
    link: "http://help.123greetings.com/contact_us.html?30",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  }
];

const ContactUs = () => {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-rose-100 overflow-x-hidden">
      
      {/* --- HEADER SECTION --- */}
      {/* Reduced padding for mobile (pt-24) vs desktop (lg:pt-40) */}
      <section className="relative pt-24 pb-12 lg:pt-40 lg:pb-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-500 underline underline-offset-4">Get In Touch</span>
            </div>
            
            {/* Fluid typography: text-3xl for mobile, text-6xl for large screens */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 leading-tight">
              Let's start a <br className="hidden sm:block" />
              <span className="font-serif italic text-rose-500">conversation.</span>
            </h1>
            
            <p className="text-base md:text-xl text-slate-500 font-light max-w-2xl leading-relaxed">
              Thank you for your interest in 123Greetings. To help us route your request to the right team, please select the most relevant subject below.
            </p>
          </div>
        </div>
      </section>

      {/* --- CONTACT GRID --- */}
      <section className="pb-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {contactOptions.map((option, index) => (
              <a 
                key={option.title}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-slate-50 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-[0px_30px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 flex flex-col items-start text-left"
              >
                <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white group-hover:bg-rose-500 group-hover:text-white transition-all duration-500 text-slate-900 mb-4 md:mb-6 shadow-sm">
                  {option.icon}
                </div>
                
                <h3 className="text-lg md:text-xl font-medium text-slate-900 mb-2 md:mb-3 group-hover:text-rose-500 transition-colors">
                  {option.title}
                </h3>
                
                <p className="text-slate-500 font-light text-sm leading-relaxed mb-6 md:mb-8 flex-grow">
                  {option.description}
                </p>

                <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-rose-600 transition-colors">
                  Write to us
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </a>
            ))}
          </div>

          {/* HELP CENTER CALLOUT */}
          {/* Rounded corners reduced for mobile (rounded-[2rem]) */}
          <div className="mt-12 md:mt-20 p-8 md:p-10 lg:p-16 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-light font-serif italic">Need immediate help?</h2>
              <p className="text-slate-400 font-light text-sm md:text-base">Check our help center for quick answers to common questions.</p>
            </div>
            {/* Full-width button on mobile */}
            <a 
              href="http://help.123greetings.com" 
              className="w-full md:w-auto text-center px-8 py-4 bg-white text-slate-900 rounded-full font-medium hover:bg-rose-500 hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              Visit Help Center
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;