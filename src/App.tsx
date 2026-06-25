import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import WhyMatters from './components/WhyMatters';
import Ambition from './components/Ambition';
import WhatWeExplore from './components/WhatWeUnderstand';
import HowWeWork from './components/HowWeWork';
import RoleOfLeeds from './components/RoleOfLeeds';
import WhoInvolved from './components/WhoInvolved';
import Success from './components/Success';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="top" className="bg-[#faf9f6] text-[#1a2521] min-h-screen selection:bg-[#FF9900]/15 selection:text-[#1a2521] font-sans leading-relaxed antialiased">
      {/* Premium Regional Navigation */}
      <Header />

      <main>
        {/* Dynamic Interactive Hero Section with Leeds and West Yorkshire copy */}
        <Hero />

        {/* Project Ethos & Regional Ambition banner */}
        <Introduction />

        {/* Why this work matters section */}
        <WhyMatters />

        {/* Our Ambition Section / Stakeholders Alliance */}
        <Ambition />

        {/* What we want to understand: Six inquiry nodes with top colored borders */}
        <WhatWeExplore />

        {/* How we will work section */}
        <HowWeWork />

        {/* The Role of Leeds & broader Yorkshire strategical flow */}
        <RoleOfLeeds />

        {/* Who we need involved (7 sector categories to bring together) */}
        <WhoInvolved />

        {/* What success could look like */}
        <Success />

        {/* Be part of the project (Bullet list + Interactive Intake Form) */}
        <InquiryForm />
      </main>

      {/* Sister Hub linked footer */}
      <Footer />
    </div>
  );
}
