"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import localFont from "next/font/local";
import TransitionLink from "@/libs/TransitionLink";
import Image from "next/image";
import { cn } from "@/libs/util";
const secondary = localFont({
  src: "./../app/fonts/BlauerNue-Regular.woff",
});

type ButtonProps = {
  className?: string;
  placeholder: string;
  href: string;
};

function Button({ className, placeholder, href }: ButtonProps) {
  const ButtonRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const Buttons = gsap.utils.toArray(".about-button") as HTMLElement[];

        Buttons.forEach((button) => {
          if (button) {
            const ButtonTl = gsap.timeline({ paused: true });

            ButtonTl.set(".button-icon", {
              transformOrigin: "center",
              scale: 0.2,
            });

            ButtonTl.set(".botton-icon-arrow", {
              yPercent: 100,
              xPercent: -100,
              scale: 0.4,
              display: "hidden",
            });

            ButtonTl.to(".button-icon", {
              scale: 1,
              duration: 0.4,
              ease: "power4.inOut",
            }).to(
              ".botton-icon-arrow",
              {
                display: "block",
                yPercent: 0,
                xPercent: 0,
                duration: 0.6,
                scale: 1,
                ease: "power4.inOut",
              },
              "<"
            );

            ButtonTl.pause();

            button.addEventListener("mouseenter", () => {
              ButtonTl.play();
            });

            button.addEventListener("mouseleave", () => {
              ButtonTl.reverse();
            });
          }
        });
      });
      return () => ctx.revert();
    },
    { scope: ButtonRef }
  );

  return (
    <div
      className={cn(
        `overflow-hidden about-button ${secondary.className} z-10`,
        className
      )}
      ref={ButtonRef}
    >
      <TransitionLink
        href={href}
        className="flex  justify-between items-center w-full h-10 "
      >
        <div className="w-10 h-10 mr-4 origin-center flex justify-center items-center rounded-full bg-red-600 button-icon scale-[.2] overflow-hidden">
          <Image
            src="/arrow.svg"
            width={20}
            height={20}
            alt="arrow"
            className="w-[70%] h-[70%] object-contain hidden botton-icon-arrow "
          />
        </div>
        {placeholder}
      </TransitionLink>
    </div>
  );
}

export default Button;
