import React from "react";

type Props = {
  direction: string;
};

export default function Goal({ direction }: Props) {
  return (
    <div
      className={`w-full h-full flex items-center ${
        direction === "left" ? "left-0" : "rotate-180 right-0"
      }`}
    >
      <div
        className="h-[10.76%] aspect-[2.44/7.32] translate-x-9 
      border-l-2 border-t-2 border-b-2 border-white"
      />
    </div>
  );
}
