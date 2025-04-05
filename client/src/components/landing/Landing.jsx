import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import CTA from "./CTA";
import Footer from "./Footer";
import ElectionTimeline from "../ElectionTimeline.jsx";

const LandingPage = () => {
  return (
    <div className="bg-[#121212] text-white min-h-screen">
      {/* <Header /> */}
      <main>
        <Hero />
        <ElectionTimeline />
        <HowItWorks />
        <Features />
        <CTA />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
