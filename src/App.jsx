// src/App.jsx
import Navbar from './components/Navbar';
import CorporateInfoPage from './components/CorporateInfoPage';
import Footer from './components/Footer';
import MediaKitPage from './components/MediaKitPage';
import PressReleasesPage from './components/PressReleasesPage';

function App() {
  // 1. Get the current URL path
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : "/";

  // 2. Create a simple function to decide which page to render
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/media-kit':
        return <MediaKitPage />;
      case '/press-releases':
        return <PressReleasesPage />;
      case '/':
      default:
        // Default to home page if path is "/" or unrecognized
        return <CorporateInfoPage />; 
    }
  };

  return (
    // Added flex flex-col to ensure the footer stays at the bottom
    <div className="flex flex-col min-h-screen bg-white font-sans antialiased">
      {/* Header stays constant at the top */}
      <Navbar />
      
      {/* Main content area switches based on URL */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Footer stays constant at the bottom */}
      <Footer />
    </div>
  );
}

export default App;