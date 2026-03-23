// src/App.jsx

import Navbar from './components/Navbar';
import CorporateInfoPage from './components/CorporateInfoPage';
import Footer from './components/Footer';
import MediaKitPage from './components/MediaKitPage';
import PressReleasesPage from './components/PressReleasesPage';
import Sitemap from "./components/Sitemap";

function App() {
  // Get current path
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "/";

  // Decide which page to render
  const renderCurrentPage = () => {
    switch (currentPath) {
      case "/media-kit":
        return <MediaKitPage />;

      case "/press-releases":
        return <PressReleasesPage />;

      case "/sitemap":
        return <Sitemap />;

      case "/":
      default:
        return <CorporateInfoPage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans antialiased">
      
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;