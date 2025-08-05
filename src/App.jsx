// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Research from "./components/Research";
import NewsEvents from "./components/NewsEvents";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/news-and-events" element={<NewsEvents />} />
      </Routes>
      <Footer />
    </>
  );
}
