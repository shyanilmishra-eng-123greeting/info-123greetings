import React, { useState } from "react";

// Added a 'content' field to simulate the full story text
const pressReleases = [
  {
    id: "1",
    title: "123Greetings.com Celebrates 25 Years of Connecting Hearts Worldwide",
    date: "2024-10-15",
    summary:
      "123Greetings.com marks its 25th anniversary, having delivered over 2 billion ecards to users across 200+ countries since its launch in 1999.",
    content:
      "NEW YORK, NY — October 15, 2024 — 123Greetings.com, the world's leading destination for free ecards, proudly announces its 25th anniversary. Since its inception in 1999, the platform has revolutionized the way people express emotions, successfully delivering over 2 billion ecards globally. \n\nTo commemorate this silver jubilee, the company is rolling out a special collection of animated anniversary cards and launching a community storytelling initiative. 'We are humbled to have been a part of millions of birthdays, anniversaries, and holidays over the past two and a half decades,' said the CEO. The company plans to continue its mission of fostering human connection through digital innovation for years to come.",
  },
  {
    id: "2",
    title: "123Greetings Launches New Mobile-Optimized Ecard Experience",
    date: "2024-06-20",
    summary:
      "The new mobile-first design delivers a seamless ecard browsing and sending experience across all devices, improving engagement by 35%.",
    content:
      "NEW YORK, NY — June 20, 2024 — Recognizing the shift in consumer behavior towards mobile devices, 123Greetings has officially rolled out its entirely revamped mobile-optimized website. The new interface prioritizes speed, ease of use, and a touch-friendly design. \n\nEarly metrics indicate a 35% increase in user engagement and a significant drop in bounce rates. 'Our users are on the go, and they want to send a heartfelt message to a loved one within seconds from their phones,' noted the Product Team. The update also includes faster loading times for heavy multimedia ecards and simplified sharing options directly to social media and messaging apps.",
  },
  {
    id: "3",
    title: "Holiday Season 2023: 123Greetings Records Record Traffic",
    date: "2023-12-28",
    summary:
      "123Greetings.com saw a 20% increase in holiday season traffic, with Valentine's Day and Christmas being the highest traffic days of the year.",
    content:
      "NEW YORK, NY — December 28, 2023 — As the 2023 holiday season comes to a close, 123Greetings reports a record-breaking year in digital greetings. The platform experienced a massive 20% year-over-year increase in web traffic during the final quarter. \n\nChristmas Day and Valentine's Day remain the undisputed champions of ecard sending, but the company also noted a surprising 40% uptick in 'Just Because' and 'Thinking of You' cards throughout the year. This trend suggests a growing desire for continuous digital connection beyond traditional holidays. The server infrastructure handled the peak loads flawlessly, ensuring 100% uptime during the busiest hours.",
  },
];

const PressReleasesPage = () => {
  // State to track which press release is currently open in the modal
  const [selectedPR, setSelectedPR] = useState(null);

  // Function to close the modal
  const closeModal = () => setSelectedPR(null);

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-rose-100 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 pb-16 lg:pt-44 lg:pb-24 px-6 sm:px-10 lg:px-20 bg-slate-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white border border-slate-200">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-500"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Newsroom</span>
            </div>
            <h1 className="text-4xl md:text-8xl font-light tracking-tight text-slate-900 mb-8 leading-tight">
              Press <span className="font-serif italic text-rose-500">Releases.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 font-light leading-relaxed mx-auto max-w-2xl">
              Stay up to date with the latest news, milestones, and 
              announcements from 123Greetings.
            </p>
          </div>
        </div>
      </section>

      {/* --- PRESS RELEASE LIST --- */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {pressReleases.length === 0 ? (
            <div className="text-center py-20 border-2 border-dashed border-slate-100 rounded-[2rem] sm:rounded-[3rem]">
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
                  onClick={() => setSelectedPR(pr)}
                  className="group relative pb-10 sm:pb-12 border-b border-slate-100 last:border-0 cursor-pointer animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
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
                      <p className="text-base sm:text-lg text-slate-500 font-light leading-relaxed">
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
      <section className="py-20 lg:py-24 px-6 sm:px-10 lg:px-20 text-center bg-slate-50/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-light text-slate-900 mb-6 italic font-serif">
            For Media Inquiries
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-light mb-8">
            Are you a member of the press? Reach out to our communications team 
            for interviews, assets, and more information.
          </p>
          <a
            href="mailto:press@123greetings.com"
            className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-10 py-4 sm:px-10 sm:py-5 text-white shadow-xl hover:bg-rose-500 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Contact PR Team
          </a>
        </div>
      </section>

      {/* --- POPUP MODAL --- */}
      {selectedPR && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-[2rem] p-6 md:p-12 max-w-3xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-colors z-10"
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {/* Modal Content */}
            <div className="md:pr-8">
              <time className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500 block mb-3 md:mb-4">
                {new Date(selectedPR.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <h2 className="text-2xl md:text-4xl font-light text-slate-900 mb-4 md:mb-6 leading-tight">
                {selectedPR.title}
              </h2>
              <div className="w-12 h-1 bg-rose-200 mb-6 md:mb-8 rounded-full"></div>
              
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-600 font-light leading-relaxed">
                {selectedPR.content.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default PressReleasesPage;