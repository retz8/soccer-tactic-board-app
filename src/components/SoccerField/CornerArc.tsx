import React from "react";

type Props = {
  direction: string;
};

export default function CornerArc({ direction }: Props) {
  return (
    <div
      className={`h-2 aspect-square 
      border-r-2 border-t-2 border-white 
      rounded-tr-full z-20
      ${
        direction === "tl"
          ? "rotate-90"
          : direction === "tr"
          ? "rotate-180"
          : direction === "br"
          ? "rotate-[270deg]"
          : "rotate-0"
      }`}
    />
  );
}
