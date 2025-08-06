import React, { useState } from "react";
import aboutImage from "../AwamatangiFiles/AboutUs/img1.png"; // Adjust path if needed

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("team"); // Track active tab

  return (
    <section className="bg-white text-gray-800 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Tabs Header */}
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 font-semibold border-b-4 ${
              activeTab === "team" ? "border-teal-500 text-teal-700" : "border-transparent"
            }`}
            onClick={() => setActiveTab("team")}
          >
            THE TEAM
          </button>
          <button
            className={`px-4 py-2 font-semibold border-b-4 ml-4 ${
              activeTab === "contact" ? "border-teal-500 text-teal-700" : "border-transparent"
            }`}
            onClick={() => setActiveTab("contact")}
          >
            CONTACT
          </button>
        </div>

        {/* === TEAM TAB CONTENT === */}
        {activeTab === "team" && (
          <>
            {/* WHO WE ARE Section with Image and Team */}
            <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-12">
              {/* IMAGE on Right */}
              <img
                src={aboutImage}
                alt="Our Work"
                className="w-full md:w-1/2 rounded-lg shadow-md object-cover"
              />

              {/* TEXT + TEAM MEMBERS on Left */}
              <div className="md:w-1/2 text-left">
                <h2 className="text-2xl font-semibold mb-4">WHO WE ARE</h2>
                <p className="text-lg mb-4">
                  Te Rā: The Māori Sail is a collaborative research initiative bringing together experts in Māori weaving, cultural heritage, and material culture to study Te Rā, the only known surviving customary Māori sail. Led by Dr. Donna Campbell, Ranui Ngarimu, and Dr. Catherine Smith...
                </p>
                <p className="text-lg mb-6">
                  Our team is passionate, experienced, and driven by a shared vision of creating equitable opportunities...
                </p>

                {/* Team Members List */}
                <div className="flex gap-6">
                  {["Donna Campbell", "Ranui Ngarimu", "Catherine Smith"].map((name, i) => (
                    <div key={i} className="text-center">
                      <img
                        src={`https://i.pravatar.cc/150?img=${i + 10}`}
                        alt={name}
                        className="rounded-full w-24 h-24 object-cover mx-auto shadow-md"
                      />
                      <p className="mt-2 text-sm font-semibold">{name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* === CONTACT TAB CONTENT === */}
        {activeTab === "contact" && (
          <div className="max-w-3xl mx-auto text-left">
            <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input type="text" id="name" className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input type="email" id="email" className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium mb-1">Contact</label>
                <input type="tel" id="contact" className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea id="message" rows="4" className="w-full border rounded px-3 py-2"></textarea>
              </div>
              <button
                type="submit"
                className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
