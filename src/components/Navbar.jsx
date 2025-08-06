// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import logo from "../assets/images/navbar/Logo.svg"; // Import logo as URL
import backgroundImage from "../assets/images/navbar/bg_vetor.png"; // Import background image

export default function Navbar() {
  return (
    <nav
      className="bg-[#141E27] text-white px-2 py-4 relative overflow-hidden"
      style={{ height: "140px" }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "100% auto", // Slightly smaller background image
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.04, // 4% opacity
        }}
      />
      <div className="max-w-8xl px-22 flex items-center justify-between relative z-20 h-full">
        <div className="flex items-center">
          <img src={logo} alt="Awamangi Research Group Logo" className="h-15" />
        </div>
        <div className="link-container relative flex items-center gap-8 text-sh4">
          <Link to="/" data-path="/">
            Home
          </Link>
          <Divider />
          <Link to="/research" data-path="/research">
            Research
          </Link>
          <Divider />
          <Link to="/about-us" data-path="/about-us">
            About us
          </Link>
          <Divider />
          <Link to="/news-and-events" data-path="/news-and-events">
            News and Events
          </Link>
        </div>
      </div>
    </nav>
  );
}

// Divider Component
const Divider = () => (
  <span
    className="text-white flex items-center"
    style={{
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
      width: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    |
  </span>
);
