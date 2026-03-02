import React from "react";

// Types aren't strictly necessary in standard .jsx, but kept for structure
const adFormats = [
  {
    name: "Leaderboard",
    sizes: ["728×90", "970×90"],
    description: "High-visibility placement at the top of pages. Ideal for brand awareness campaigns.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/></svg>,
  },
  {
    name: "Medium Rectangle",
    sizes: ["300×250", "336×280"],
    description: "Versatile ad unit embedded within content. Strong engagement and click-through rates.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>,
  },
  {
    name: "Skyscraper",
    sizes: ["160×600", "300×600"],
    description: "Tall sidebar placements with extended visibility as users scroll through content.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>,
  },
  {
    name: "Mobile Banner",
    sizes: ["320×50", "320×100"],
    description: "Optimized for mobile devices. Reaches users on-the-go with a non-intrusive format.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>,
  },
  {
    name: "Interstitial",
    sizes: ["320×480", "768×1024"],
    description: "Full-screen immersive ads displayed during natural content transitions.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>,
  },
];

const MediaKitPage = () => {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-rose-100 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      {/* Adjusted padding to clear the fixed navbar */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-24 px-10 lg:px-20 bg-slate-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-slate-900 mb-8 leading-tight">
              Media <span className="font-serif italic text-rose-500">Kit.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mx-auto max-w-2xl">
              Reach millions of engaged users across 200+ countries. Explore our 
              advertising formats designed to maximize your brand's impact.
            </p>
          </div>
        </div>
      </section>

      {/* --- WHY ADVERTISE --- */}
      <section className="py-24 px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-16 text-center italic font-serif">
            Why Advertise with 123Greetings?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Engaged Audience",
                desc: "Users visit with high intent — to send heartfelt messages to loved ones. This emotional context drives attention and engagement.",
              },
              {
                title: "Seasonal Peaks",
                desc: "Massive traffic spikes during holidays like Valentine's Day, Christmas, Thanksgiving, and Mother's Day.",
              },
              {
                title: "Global Reach",
                desc: "Serving 15M+ monthly visitors from 200+ countries with strong presence in North America, Europe, and Asia.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                // Delaying animation based on index to create a staggered effect
                style={{ animationDelay: `${i * 150}ms` }}
                className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
              >
                <h3 className="text-2xl font-light text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AD FORMATS --- */}
      <section className="py-24 bg-slate-50/50 px-10 lg:px-20 border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-16 text-center italic font-serif">
            Ad Formats & Sizes
          </h2>
          <div className="space-y-6">
            {adFormats.map((format, i) => (
              <div
                key={format.name}
                style={{ animationDelay: `${i * 100}ms` }}
                className="flex flex-col sm:flex-row items-start gap-6 rounded-[2rem] border border-slate-100 bg-white p-8 hover:border-rose-200 transition-colors duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-both shadow-sm hover:shadow-md"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-500">
                  {format.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-slate-900 mb-2">{format.name}</h3>
                  <p className="text-slate-500 font-light mb-4 text-base">{format.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {format.sizes.map((size) => (
                      <span
                        key={size}
                        className="inline-flex items-center rounded-full border border-slate-100 bg-slate-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:bg-slate-100 transition-colors"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-10 lg:px-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-light text-slate-900 mb-6 italic font-serif">
            Interested in <span className="text-rose-500">advertising?</span>
          </h2>
          <p className="text-xl text-slate-500 font-light mb-10 leading-relaxed">
            Get in touch with our advertising team to discuss custom packages and 
            seasonal opportunities.
          </p>
          <a
            href="mailto:advertise@123greetings.com"
            className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-10 py-5 text-lg font-medium text-white shadow-xl hover:bg-rose-500 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Contact Our Ad Team
          </a>
        </div>
      </section>
    </main>
  );
};

export default MediaKitPage;