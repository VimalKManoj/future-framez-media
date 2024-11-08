"use client";
import React from "react";

import NoiseEffect from "@/components/Noise";
import TeamSection from "@/components/AboutPage/TeamSection";
import Footer from "@/components/LandingPage/Footer";
import AboutBanner from "@/components/AboutPage/AboutBanner";
import HeaderNav from "@/components/HeaderNav";
import MobileNavBar from "@/components/MobileHeader";

function About() {
  return (
    <>
      <section className="w-screen min-h-screen  flex justify-center  flex-col items-center z-30  bg-white  m-0 ">
        <div className="fixed -top-96 left-0  h-[1380px] w-[560px] bg-hero-gradient z-0 -rotate-45 opacity-85"></div>
        <HeaderNav />
        <MobileNavBar />
        <NoiseEffect />
        <AboutBanner />
        <TeamSection />
      </section>
      <Footer />
    </>
  );
}

export default About;
