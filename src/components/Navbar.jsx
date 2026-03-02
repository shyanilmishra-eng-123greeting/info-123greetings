export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Logo
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <div>
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}