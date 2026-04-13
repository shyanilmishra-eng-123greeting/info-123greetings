import React from "react";

const adFormats = [
  {
    name: "Standard Banners",
    description: "High-visibility Leaderboards (728x90) and Medium Rectangles (300x250) integrated into content.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="12" x="2" y="6" rx="2"/></svg>,
  },
  {
    name: "High Impact Formats",
    description: "Anchor ads and Interstitials with 5-second mandatory watch for maximum recall.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  },
  {
    name: "Mobile App & Web",
    description: "Optimized units for iOS and Android, including rewarded interstitials and non-intrusive banners.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/></svg>,
  },
];

const stats = [
  { label: "Unique Monthly Visitors", value: "15M+" },
  { label: "Monthly Page Views", value: "85M+" },
  { label: "Monthly Impressions", value: "250M+" },
  { 
    label: "Email Database", 
    value: "1M+", 
    description: "500K US, 500K ROW with GEO targeting" 
  },
  { label: "Social Reach", value: "2.5M+" },
];

const MediaKitPage = () => {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-rose-100 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 px-6 sm:px-10 lg:px-20 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-4xl md:text-7xl font-light tracking-tight text-slate-900 mb-6 leading-tight">
              Advertise with <span className="font-serif italic text-rose-500">123Greetings.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 font-light leading-relaxed mx-auto max-w-2xl mb-10">
              Reach millions of users sharing emotions worldwide. Partner with the premier destination for digital connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/123Greetings%20Media%20Kit.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-3 rounded-full bg-rose-500 px-8 py-4 sm:px-10 sm:py-5 text-lg font-medium text-white shadow-lg hover:bg-rose-600 transition-all hover:scale-105 active:scale-95"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                View Media Kit (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- KEY STATISTICS --- */}
      <section className="py-12 sm:py-16 bg-white border-y border-slate-100 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group flex flex-col items-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-1 group-hover:text-rose-500 transition-colors">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="mt-2 text-[10px] sm:text-xs text-slate-500 font-light leading-relaxed max-w-[140px]">
                    {stat.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AUDIENCE INSIGHTS --- */}
      <section className="py-20 lg:py-24 px-6 sm:px-10 lg:px-20 bg-slate-50/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-12 sm:mb-16 text-center italic font-serif">Audience Insights</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "Country Split", data: "60% USA, 15% UK/CAN, 25% ROW", icon: "🌎" },
              { title: "Device Split", data: "75% Mobile, 25% Desktop", icon: "📱" },
              { title: "OS Split", data: "55% iOS, 40% Android, 5% Other", icon: "⚙️" },
              { title: "Engaged Users", data: "Average 4.5 mins session duration", icon: "❤️" },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 font-light text-sm sm:text-base">{item.data}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ADVERTISING OPPORTUNITIES --- */}
      <section className="py-20 lg:py-24 px-6 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-8 sm:mb-10 text-center lg:text-left italic font-serif leading-tight">
                High-Impact Ad <br className="hidden lg:block"/> Opportunities.
              </h2>
              <div className="space-y-6 sm:space-y-8">
                {adFormats.map((format) => (
                  <div key={format.name} className="flex gap-4 sm:gap-6">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                      {format.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium text-slate-900 mb-1 sm:mb-2">{format.name}</h3>
                      <p className="text-sm sm:text-base text-slate-500 font-light leading-relaxed">{format.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Visual Placeholder for Ad Placements */}
            <div className="bg-slate-100 rounded-[2rem] lg:rounded-[3rem] aspect-video flex items-center justify-center border-4 border-white shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 to-slate-200/50 group-hover:scale-105 transition-transform duration-700"></div>
              <p className="relative text-slate-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs">Visual Ad Placement Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY ADVERTISE --- */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white px-6 sm:px-10 lg:px-20 rounded-[2.5rem] sm:rounded-[4rem] mx-4 mb-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-12 sm:mb-16 italic font-serif">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {[
              { t: "Emotional Context", d: "Users send cards to loved ones, creating a positive mindset for your brand." },
              { t: "Seasonal Spikes", d: "Massive scale during Mother's Day, Valentine's, and Global Festivals." },
              { t: "Global Scale", d: "Reach a diverse, multi-cultural audience across 200+ territories." }
            ].map(item => (
              <div key={item.t} className="space-y-3">
                <h4 className="text-lg sm:text-xl font-semibold text-rose-400">{item.t}</h4>
                <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 lg:py-24 px-6 sm:px-10 lg:px-20 text-center">
        <div className="max-w-3xl mx-auto bg-rose-50 rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-20">
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 sm:mb-8 italic font-serif">
            Ready to grow your brand?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light mb-8 sm:mb-10">
            Get the full breakdown of demographics, placement rates, and custom seasonal packages.
          </p>
          <div className="flex flex-col items-center gap-6">
            <a 
              href="/123Greetings%20Media%20Kit.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 px-10 py-4 sm:px-12 sm:py-5 text-lg font-medium text-white hover:bg-rose-500 transition-all shadow-xl"
            >
               View Full Media Kit
            </a>
            <p className="text-xs sm:text-sm text-slate-400">Questions? Email us at <a href="mailto:advertise@123greetings.com" className="text-rose-500 underline decoration-rose-200 underline-offset-4">advertise@123greetings.com</a></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MediaKitPage;