// src/App.jsx

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// From your version
import HeroSection from "./components/HeroSection";
import ResearchCards from "./components/ResearchCards";
import AboutUs from "./components/AboutUs";

// From teammate's version
import Home from "./components/Home";
import Research from "./components/Research";
import NewsEvents from "./components/NewsEvents";

// Optional: Use your placeholder pages if teammate's pages don't exist
// You can comment out Home/Research/NewsEvents above if needed

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* You can swap <HeroSection /> for <Home /> depending on which version you prefer */}
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/news-and-events" element={<NewsEvents />} />
      </Routes>
      <Footer />
    </>
  );
}
