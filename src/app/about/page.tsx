"use client";
import React from "react";

import Navbar from "@/components/Navbar";
import NoiseEffect from "@/components/Noise";
import TeamSection from "@/components/AboutPage/TeamSection";
import { Bebas_Neue, Hanken_Grotesk } from "next/font/google";
import Footer from "@/components/LandingPage/Footer";
import Carousel from "@/components/AboutPage/Carousal";
import Image from "next/image";
import AboutBanner from "@/components/AboutPage/AboutBanner";
import AboutUs from "@/components/AboutPage/AboutUs";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

function About() {
  return (
    <>
      <section className="w-screen min-h-screen  flex justify-center  flex-col items-center z-30  bg-white  m-0 ">
        <div className="fixed -top-96 left-0  h-[1380px] w-[560px] bg-hero-gradient z-0 -rotate-45 opacity-85"></div>
        <Navbar />
        <NoiseEffect />
        <AboutBanner />
     
        <TeamSection />
        
      </section>
      <Footer />
    </>
  );
}

export default About;
