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

