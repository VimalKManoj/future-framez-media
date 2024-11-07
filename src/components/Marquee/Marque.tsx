import React, { CSSProperties } from "react";
import Image from "next/image";
import "./styles.css";

interface MarqueeProps {
  images: string[];
}

const Marquee: React.FC<MarqueeProps> = ({ images }) => {
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
              className=" w-full h-full object-cover z-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
