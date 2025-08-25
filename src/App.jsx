// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection.jsx";
import ResearchCards from "./components/ResearchCards.jsx";
import Home from "./components/Home.jsx";




export default function App() {
    return (
        <>
            <Navbar />
            <Home />  {/* 这里包含了 Hero、Research、AboutUs 等内容 */}
            <Footer />
        </>
    );
}

