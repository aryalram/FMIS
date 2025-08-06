// src/App.jsx

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ResearchCards from "./components/ResearchCards";
import AboutUs from "./components/AboutUs";

// Placeholder components for pages you haven't built yet
function NewsAndEvents() {
  return <div className="p-10 text-center">News and Events Page (Coming Soon)</div>;
}

function ResearchPage() {
  return (
    <div>
      <HeroSection />
      <ResearchCards />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/news-and-events" element={<NewsAndEvents />} />
      </Routes>
      <Footer />
    </>
  );
}
