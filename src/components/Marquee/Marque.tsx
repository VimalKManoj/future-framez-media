import React, { CSSProperties } from "react";
import Image from "next/image";
import "./styles.css";
import { cn } from "@/libs/util";

interface MarqueeProps {
  images: string[];
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ images, className }) => {
  return (
    <div
      className="marquee fadeout-horizontal"
      style={{ "--num-items": images.length } as CSSProperties}
    >
      <div className="marquee-track">
        {images.map((image, index) => (
          <div
            key={index}
            className="marquee-item"
            style={{ "--item-position": index + 1 } as CSSProperties}
          >
            <Image
              src={image}
              alt=""
              width={1500}
              height={1500}
              className={cn(`w-full h-full object-cover z-0`, className)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
