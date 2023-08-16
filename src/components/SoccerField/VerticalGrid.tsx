import React from "react";

export default function VerticalGrid() {
  return (
    <>
      <div className="absolute w-1/2 h-full bg-green-pattern z-0" />
      <div className="absolute left-1/2 w-1/2 h-full bg-green-pattern z-0 rotate-180" />
    </>
  );
}
