"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type ProjectWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

function ProjectWrapper({ children, className }: ProjectWrapperProps) {
  const projectWrapperRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className={className} ref={projectWrapperRef}>
      {children}
    </div>
  );
}

export default ProjectWrapper;
