"use client";
import React, { useRef } from "react";


type HeroWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

function HeroWrapper({ children, className }: HeroWrapperProps) {
  const ref = useRef<HTMLDivElement | null>(null);

 

  return (
    <div className={className} ref={ref}>
      {children}
      <div className="fixed bottom-10 w-2/3 h-px bg-white/60 origin-left scale-x-0 progress z-40 rounded-xl" />
    </div>
  );
}

export default HeroWrapper;




 // useGSAP(
  //   () => {
  //     const ctx = gsap.context(() => {
  //       // Animation setup...
  //       const timeline = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: ref.current,
  //           start: "top top",
  //           end: "bottom bottom",
  //           scrub: true,
  //           // markers: true, // Debugging markers
  //         },
  //       });

  //       timeline.to(".progress", {
  //         scaleX: 1,
  //         duration: 1,
  //         ease: "power1.inOut",
  //       });
  //     }, ref); // Pass the reference to the context scope

  //     ScrollTrigger.create({
  //       trigger: ".work-section-hero",
  //       start: "top center",
  //       end: "bottom center",
  //       scrub: true,
  //       markers: true,
  //       onEnter: () => {
  //         gsap.to(ref.current, {
  //           backgroundColor: "white", // Change background to white
  //           color: "black", // Optional: Change text color to black
  //           duration: 1,
  //           ease: "power1.inOut",
  //         });
  //         gsap.to(".progress", {
  //           backgroundColor: "black",
  //           duration: 1,
  //           ease: "power1.inOut",
  //         });
  //       },
  //       onLeaveBack: () => {
  //         gsap.to(ref.current, {
  //           backgroundColor: "black", // Change background back to black
  //           color: "white", // Optional: Change text color back to white
  //           duration: 1,
  //           ease: "power1.inOut",
  //         });
  //         gsap.to(".progress", {
  //           backgroundColor: "white",
  //           duration: 1,
  //           ease: "power1.inOut",
  //         });
  //       },
  //     });

  //     // Cleanup on component unmount
  //     return () => ctx.revert();
  //   },
  //   { scope: ref }
  // );