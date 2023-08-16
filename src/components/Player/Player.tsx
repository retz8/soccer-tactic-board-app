import React from "react";

type Props = {
  top: string; // need to be ?%
  left: string;
  number: number;
  name?: string;
};

export default function Player({ top, left, number, name = "" }: Props) {
  return (
    <div
      className="absolute flex items-center justify-center 
      w-9 h-9 bg-red-500 rounded-full z-30"
      draggable
      style={{ top, left }}
    >
      <p className="text-white text-xl font-bold">{number}</p>
    </div>
  );
}
