export default function Hero() {
  return (
    <div className="pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
          Build faster with <span className="text-blue-600">React & Tailwind</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 mb-10">
          Create stunning, responsive web applications quickly and efficiently using modern development tools and clean architecture.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
            Start Building
          </button>
          <button className="bg-white text-gray-900 px-8 py-3.5 rounded-xl text-lg font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors">
            View Documentation
          </button>
        </div>
      </div>
    </div>
  );
}