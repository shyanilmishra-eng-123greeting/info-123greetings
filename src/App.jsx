import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'; // Ensure the reset CSS is imported

// Page Imports
import CorporateInfoPage from './components/CorporateInfoPage';
import MediaKitPage from './components/MediaKitPage';
import PressReleasesPage from './components/PressReleasesPage';
import Sitemap from "./components/Sitemap";
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import TermsofUse from './components/TermsofUse';
import CopyrightPolicy from './components/CopyrightPolicy';
import ContactUs from './components/ContactUs';

function App() {
  return (
    /* w-full and overflow-x-hidden are key to preventing the "side-scroll" bug on mobile */
    <div className="flex flex-col min-h-screen w-full bg-white font-sans antialiased overflow-x-hidden">
      <Navbar />
      
      <ScrollToTop /> 

      {/* Added w-full to main to ensure it fills the viewport */}
      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<CorporateInfoPage />} />
          <Route path="/media-kit" element={<MediaKitPage />} />
          <Route path="/press-releases" element={<PressReleasesPage />} />
          <Route path="/sitemap" element={<Sitemap />} />
          
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms-of-use" element={<TermsofUse />} />
          <Route path="/copyright-policy" element={<CopyrightPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;