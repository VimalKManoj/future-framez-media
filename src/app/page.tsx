import HeroBanner from "@/components/LandingPage/HeroBanner";
import HeroWrapper from "@/components/LandingPage/HeroWrapper";
import NoiseEffect from "@/components/Noise";
import Video from "@/components/Video";
import LandingProjectSection from "@/components/LandingPage/LandingProjectSection";
import WhyAndService from "@/components/LandingPage/WhyAndService";
import Footer from "@/components/LandingPage/Footer";
import HeaderNav from "@/components/HeaderNav";
import LandingAboutSection from "@/components/LandingPage/LandingAboutSection";
import MobileHeader from "@/components/MobileHeader";

export default function Home() {
  return (
    <HeroWrapper className="relative flex min-h-screen w-screen flex-col items-center justify-center  text-white main-container">
      <div className="fixed -top-96 left-0  h-[1380px] w-[560px] bg-hero-gradient z-0 -rotate-45 opacity-85"></div>
      <HeaderNav />
      <MobileHeader />
      <NoiseEffect />
      <HeroBanner />
      <Video />
      <LandingProjectSection />
      <LandingAboutSection />
      <WhyAndService />
      <Footer />
    </HeroWrapper>
  );
}
