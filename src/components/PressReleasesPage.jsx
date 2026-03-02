import React from "react";

const pressReleases = [
  {
    id: "1",
    title: "123Greetings.com Celebrates 25 Years of Connecting Hearts Worldwide",
    date: "2024-10-15",
    summary:
      "123Greetings.com marks its 25th anniversary, having delivered over 2 billion ecards to users across 200+ countries since its launch in 1999.",
  },
  {
    id: "2",
    title: "123Greetings Launches New Mobile-Optimized Ecard Experience",
    date: "2024-06-20",
    summary:
      "The new mobile-first design delivers a seamless ecard browsing and sending experience across all devices, improving engagement by 35%.",
  },
  {
    id: "3",
    title: "Holiday Season 2023: 123Greetings Records Record Traffic",
    date: "2023-12-28",
    summary:
      "123Greetings.com saw a 20% increase in holiday season traffic, with Valentine's Day and Christmas being the highest traffic days of the year.",
  },
];

const PressReleasesPage = () => {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-rose-100 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      {/* Adjusted padding to clear the fixed navbar */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-24 px-10 lg:px-20 bg-slate-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white border border-slate-200">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-500"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Newsroom</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-slate-900 mb-8 leading-tight">
              Press <span className="font-serif italic text-rose-500">Releases.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mx-auto max-w-2xl">
              Stay up to date with the latest news, milestones, and 
              announcements from 123Greetings.
            </p>
          </div>
        </div>
      </section>

      {/* --- PRESS RELEASE LIST --- */}
      <section className="py-24 px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {pressReleases.length === 0 ? (
            <div className="text-center py-20 border-2 border-dashed border-slate-100 rounded-[3rem]">
              <p className="text-slate-400 font-light italic">
                No press releases yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {pressReleases.map((pr, i) => (
                <article
                  key={pr.id}
                  style={{ animationDelay: `${i * 150}ms` }}
                  className="group relative pb-12 border-b border-slate-100 last:border-0 cursor-pointer animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 transition-transform duration-500 group-hover:translate-x-2">
                    {/* Date Sidebar */}
                    <div className="shrink-0 pt-1">
                      <time 
                        dateTime={pr.date}
                        className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500 flex items-center gap-2"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                        {new Date(pr.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <h2 className="text-2xl md:text-3xl font-light text-slate-900 leading-snug group-hover:text-rose-500 transition-colors duration-300">
                        {pr.title}
                      </h2>
                      <p className="text-lg text-slate-500 font-light leading-relaxed">
                        {pr.summary}
                      </p>
                      <div className="flex items-center gap-2 text-slate-900 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                        Read Full Story 
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-500"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- NEWSLETTER / FOOTER CTA --- */}
      <section className="py-24 px-10 lg:px-20 text-center bg-slate-50/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-light text-slate-900 mb-6 italic font-serif">
            For Media Inquiries
          </h2>
          <p className="text-lg text-slate-500 font-light mb-8">
            Are you a member of the press? Reach out to our communications team 
            for interviews, assets, and more information.
          </p>
          <a
            href="mailto:press@123greetings.com"
            className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-10 py-5 text-white shadow-xl hover:bg-rose-500 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Contact PR Team
          </a>
        </div>
      </section>
    </main>
  );
};

export default PressReleasesPage;