import React from "react";

export default function HorizontalGrid() {
  return (
    <>
      <div className="absolute flex flex-col w-full top-[20.35%] z-[5]">
        <div className="w-full border border-white/20" />
      </div>
      <div className="absolute flex flex-col w-full top-[36.53%] z-[20]">
        <div className="w-full border border-white/20" />
      </div>
      <div className="absolute flex flex-col w-full bottom-[36.53%] z-[20]">
        <div className="w-full border border-white/20" />
      </div>
      <div className="absolute flex flex-col w-full bottom-[20.35%] z-[5]">
        <div className="w-full border border-white/20" />
      </div>
    </>
  );
}
