import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

function Carousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className="relative flex justify-center items-center h-screen w-full overflow-hidden gap-6"
      ref={carouselRef}
    >
      <div className="w-[10%] h-[30%] overflow-hidden p-2 border border-dashed border-black">
        <Image
          src="/1.jpg"
          alt="carousel-icon-1"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[20%] h-[40%] overflow-hidden  p-2 border border-dashed border-black">
        <Image
          src="/3.jpg"
          alt="carousel-icon-1"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[40%] h-[50%] overflow-hidden p-2 border border-dashed border-black">
        <Image
          src="/5.jpg"
          alt="carousel-icon-1"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[20%] h-[40%] overflow-hidden  p-2 border border-dashed border-black">
        <Image
          src="/7.jpg"
          alt="carousel-icon-1"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[10%] h-[30%] overflow-hidden p-2 border border-dashed border-black">
        <Image
          src="/4.jpg"
          alt="carousel-icon-1"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Carousel;
