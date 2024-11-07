import React from "react";
import "./styles.css";

interface TextMarqueeProps {
  texts: string[];
}

const TextMarquee: React.FC<TextMarqueeProps> = ({ texts }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full py-2">
      <div className="marquee inline-block animate-marquee">
        {texts
          .concat(texts)
          .concat(texts)
          .map(
            (
              item,
              index // Duplicate the array for seamless looping
            ) => (
              <span key={index} className="mx-4">
                {item}
              </span>
            )
          )}
      </div>
    </div>
  );
};

export default TextMarquee;
