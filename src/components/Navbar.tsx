"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import localFont from "next/font/local";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../app/globals.css";
import Image from "next/image";
import ffmLogo from "../../public/FFMLogo.svg";

gsap.registerPlugin(useGSAP);

const myFont = localFont({ src: "./../app/fonts/IvyMode-Regular.woff" });

function Navbar() {
  const ref = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        // Create the GSAP timeline and store it in a ref
        tl.current = gsap
          .timeline({ paused: true }) // Create a paused timeline
          .to(".menu", {
            y: "-100%",
            duration: 0.4,
            ease: "power1.inOut",
          }) // Animate MENU
          .to(
            ".close",
            { y: "0%", duration: 0.4, ease: "power1.inOut" },
            "-=.2"
          ) // Animate CLOSE
          .to(
            ".navbar",
            { scaleY: 1, duration: 0.6, ease: "power1.inOut" },
            "-=.2"
          )
          .to(
            ".menu-items",
            {
              y: "0%",
              duration: 0.6,
              ease: "power1.inOut",
              stagger: 0.1,
            },
            "-=.4"
          );

        // Initial state
        gsap.set(".menu", { y: "0%" });
        gsap.set(".close", { y: "-100%" });
        gsap.set(".navbar", { scaleY: 0 });
        gsap.set(".menu-items", { y: "-100%" });
      }, ref);

      // Cleanup on unmount
      return () => ctx.revert();
    },
    { scope: ref }
  );

  const handleMenuClick = () => {
    if (tl.current) {
      if (!isMenuOpen) {
        tl.current.play(); // Play the timeline forward
      } else {
        tl.current.reverse(); // Reverse the timeline
      }
      setIsMenuOpen((prevState) => !prevState); // Toggle the menu state
    }
  };

  const handleLinkClick = () => {
    if (tl.current) {
      tl.current.reverse(); // Reverse the timeline
      setIsMenuOpen(false); // Set the menu state to false
    }
  };

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const links = gsap.utils.toArray(".heading") as HTMLElement[];

        links.forEach((link) => {
          const linkTl = gsap.timeline({
            defaults: { duration: 0.4, ease: "power1.inOut" },
          });

          const primary = link.querySelector(".primary") as HTMLElement | null;
          const secondary = link.querySelector(
            ".secondary"
          ) as HTMLElement | null;

          // Ensure primary and secondary elements exist
          if (primary && secondary) {
            // Set the initial position for the secondary element (below the view)
            gsap.set(secondary, { yPercent: 220 });

            // Create the hover animation timeline

            linkTl
              .to(
                primary,
                { yPercent: -100, duration: 0.4, ease: "power1.inOut" },
                "start"
              ) // Move primary up
              .to(
                secondary,
                { yPercent: 0, duration: 0.4, ease: "power1.inOut" },
                "start"
              ); // Move secondary into place

            linkTl.pause(); // Pause the timeline initially

            // Add mouseenter and mouseleave event listeners
            link.addEventListener("mouseenter", () => {
              linkTl.play(); // Play the timeline on hover
            });

            link.addEventListener("mouseleave", () => {
              linkTl.reverse(); // Reverse the timeline on hover out
            });
          }
        });
      }, linksRef); // Use linksRef for scoping

      // Cleanup on unmount
      return () => ctx.revert();
    },
    { scope: linksRef }
  );

  const links = [
    { href: "/", text: "HOME" },
    { href: "/works", text: "WORKS" },
    { href: "/about", text: "ABOUT" },
    { href: "/contact", text: "CONTACT" },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 w-full flex justify-between items-center flex-items-center px-8 py-4 z-50"
    >
      <div
        ref={linksRef}
        className="w-[100vw]  scale-y-0 origin-top h-screen absolute top-0 left-0 navbar z-10 bg-[#bcbeb3] overflow-hidden flex justify-center items-center flex-col "
      >
        {links.map((link) => (
          <div
            key={link.href}
            onClick={handleLinkClick}
            className="overflow-hidden relative w-[32rem] justify-center items-center flex heading mt-10"
          >
            <Link href={link.href}>
              <h1
                className={`text-9xl text-white font-mono font-bold menu-items absolute -translate-y-full inset-0 flex justify-center items-center secondary`}
              >
                {link.text}
              </h1>

              <h1
                className={`${myFont.className} text-8xl font-bold menu-items primary text-black`}
              >
                {link.text}
              </h1>
            </Link>
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden flex gap-1 z-20 .menu-close">
        (
        <h1 className="cursor-pointer menu" onClick={handleMenuClick}>
          MENU
        </h1>
        <h1
          className="cursor-pointer absolute inset-0 flex  justify-center  close translate-y-full"
          onClick={handleMenuClick}
        >
          CLOSE
        </h1>
        )
      </div>

      <Link
        href="/"
        className={`${myFont.className}  font-bold z-20 ffm-logo `}
      >
        <Image src={ffmLogo} width={60} height={60} alt="ffm-logo" />
      </Link>
      <Link href="/projects">WORKS</Link>
    </div>
  );
}

export default Navbar;
