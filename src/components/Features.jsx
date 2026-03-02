export default function Features() {
  const features = [
    { title: "Lightning Fast", desc: "Optimized for speed and performance to give users the best experience." },
    { title: "Fully Responsive", desc: "Looks great on any device, automatically adapting from mobile to desktop." },
    { title: "Modern Design", desc: "Clean aesthetics powered by a utility-first CSS framework." }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why choose this architecture?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl mb-6 flex items-center justify-center text-blue-600 font-bold text-lg">
                {idx + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}