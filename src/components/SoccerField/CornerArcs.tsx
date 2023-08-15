import React from "react";
import CornerArc from "./CornerArc";

const cornerDirections = [
  {
    direction: "tl",
    className: "top-0 left-0",
  },
  {
    direction: "tr",
    className: "top-0 right-0",
  },
  {
    direction: "bl",
    className: "bottom-0 left-0",
  },
  {
    direction: "br",
    className: "bottom-0 right-0",
  },
];

export default function CornerArcs() {
  return (
    <div className="relative h-full w-full">
      {cornerDirections.map(({ direction, className }) => (
        <div
          key={direction}
          className={`absolute ${className} 
          `}
        >
          <CornerArc direction={direction} />
        </div>
      ))}
    </div>
  );
}
