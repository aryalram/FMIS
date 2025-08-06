import React from "react";
import logo from "../AwamatangiFiles/Logo/PNG/LogoWhite.png";
import pattern from "../AwamatangiFiles/websiteAsset/bigpatternv1.jpg";
import linkedinIcon from "../AwamatangiFiles/Logo/JPG/Linkedin.png";
import twitterIcon from "../AwamatangiFiles/Logo/JPG/Twitter.png";
import facebookIcon from "../AwamatangiFiles/Logo/JPG/Facebook.png";

export default function Footer() {
  return (
    <footer className="relative bg-[#141E27] text-white w-full overflow-hidden font-[Poppins]">
      {/* Background pattern */}
      <img
        src={pattern}
        alt="pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />

      <div className="relative max-w-[1280px] mx-auto px-8 pt-24 pb-20 min-h-[624px]">
        {/* Logo */}
        <div
          className="absolute"
          style={{
            width: "382.64px",
            height: "81.47px",
            top: "80px", // Adjusted to match screenshot placement
            left: "120px",
          }}
        >
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>

        {/* Quote */}
        <div
          className="absolute"
          style={{
            top: "180px", // Adjusted for gap between logo and quote
            left: "120px",
            width: "382.64px",
          }}
        >
          <p className="text-[20px] font-bold leading-[100%]">
            Whakaarahia anō te rā kaihau!
          </p>
          <p className="text-xs leading-[100%]">
            Raise up again the billowing sail!
          </p>
        </div>

        {/* Gradient Line */}
        <div
          className="absolute"
          style={{
            top: "260px", // Adjusted for gap between quote and line
            left: "120px",
            width: "536px",
            height: "4px",
            background:
              "linear-gradient(to right, #3373BA, #68C5B2, #14B6D3, #00A7A7)",
          }}
        />

        {/* Social Icons */}
        <div
          className="absolute flex gap-6"
          style={{
            top: "414px",
            left: "120px",
          }}
        >
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter" className="w-8 h-8" />
          </a>
        </div>

        {/* Navigation - Where To? */}
        <div
          className="absolute text-left"
          style={{
            top: "224px",
            right: "0px",
            width: "248px",
          }}
        >
          <h2
            className="text-xl font-semibold border-b-4 pb-2 mb-6"
            style={{ borderColor: "#00A7A7" }}
          >
            Where to?
          </h2>

          <ul className="space-y-[18px] text-lg font-semibold flex flex-col items-start">
            <li className="flex items-center">
              <span className="mr-2">|</span>
              <a href="#">Home</a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">|</span>
              <a href="#">Research</a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">|</span>
              <a href="#">About us</a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">|</span>
              <a href="#">News and Events</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="w-full text-center text-sm flex items-center justify-center"
        style={{
          height: "40px",
          background:
            "radial-gradient(98.1% 1186.15% at 1.9% 50.34%, #3373BA 4.33%, #68C5B2 27.88%, #14B6D3 61.06%, #00A7A7 84.62%)",
        }}
      >
        &copy; 2025 Awamatangi Research Group. All rights reserved.
      </div>
    </footer>
  );
}
