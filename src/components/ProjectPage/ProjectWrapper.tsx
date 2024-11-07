"use client";
import React, { useRef } from "react";

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
