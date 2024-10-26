import LandingAbout from "@/components/LandingPage/LandingAbout";
import HeroBanner from "@/components/LandingPage/HeroBanner";
import HeroWrapper from "@/components/LandingPage/HeroWrapper";
import Navbar from "@/components/Navbar";
import NoiseEffect from "@/components/Noise";
import Video from "@/components/Video";
import LandingProjectSection from "@/components/LandingPage/LandingProjectSection";
import WhyAndService from "@/components/LandingPage/WhyAndService";

export default function Home() {
  return (
    <HeroWrapper className="flex min-h-screen w-screen flex-col items-center justify-center bg-black text-white main-container ">
      <div className="fixed -top-96 left-0  h-[1380px] w-[560px] bg-hero-gradient z-0 -rotate-45 opacity-85"></div>
      <Navbar />
      <NoiseEffect />
      <HeroBanner />
      <Video />
      <LandingProjectSection />
      <LandingAbout />
      <WhyAndService />
      {/* <Why /> */}
      {/* <WhyUs /> */}
      {/* <WorkSectionHero /> */}
      <section className="h-screen w-full"></section>
    </HeroWrapper>
  );
}
