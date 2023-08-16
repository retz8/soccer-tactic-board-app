import React from "react";
import CornerArcs from "./CornerArcs";
import GoalLine from "./GoalLine";
import CenterLine from "./CenterLine";
import CenterCircle from "./CenterCircle";
import CenterSpot from "./CenterSpot";

export default function MainSoccerField() {
  return (
    <>
      {/* Corner Arcs */}
      <div className="absolute w-full h-full z-[5]">
        <CornerArcs />
      </div>
      {/* Left Goal Line */}
      <div className="absolute w-full h-full">
        <GoalLine direction="left" />
      </div>
      {/* Center Line */}
      <div className="space-center z-[5]">
        <CenterLine />
      </div>
      {/* Center Circle */}
      <div className="space-center z-[5]">
        <CenterCircle />
      </div>
      <div className="space-center z-[5]">
        <CenterSpot />
      </div>
      {/* Right Goal Line */}
      <div className="absolute w-full h-full z-10">
        <GoalLine direction="right" />
      </div>
    </>
  );
}
