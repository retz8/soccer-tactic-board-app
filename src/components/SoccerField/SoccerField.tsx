/**
 * SoccerField component
 * { size: field size, default = 105m * 68m }
 */

import React from "react";
import CenterCircle from "./CenterCircle";
import CenterSpot from "./CenterSpot";
import CornerArcs from "./CornerArcs";
import CenterLine from "./CenterLine";
import GoalLine from "./GoalLine";
import Goal from "./Goal";

type Props = {
  size?: string; // need to add options instead of simple string
};

// NOTE: maybe need to add width and height display

export default function SoccerField({ size = "default" }: Props) {
  return (
    <div className="relative flex w-full bg-green-field">
      <div className="absolute h-full">
        <Goal direction="left" />
      </div>

      <div
        className={`w-full min-w-[1024px] 
        ${size === "direct" ? "aspect-[110/68]" : "aspect-[105/68]"}
        p-16`}
      >
        <div className="relative w-full h-full border-2 border-white">
          {/* Corner Arcs */}
          <div className="absolute w-full h-full">
            <CornerArcs />
          </div>

          {/* Left Goal Line */}
          <div className="absolute w-full h-full">
            <GoalLine direction="left" />
          </div>

          {/* Center Line */}
          <div className="space-center">
            <CenterLine />
          </div>

          {/* Center Circle */}
          <div className="space-center">
            <CenterCircle />
          </div>

          <div className="space-center">
            <CenterSpot />
          </div>

          {/* Right Goal Line */}
          <div className="absolute w-full h-full">
            <GoalLine direction="right" />
          </div>
        </div>
      </div>

      <div className="absolute w-full h-full">
        <Goal direction="right" />
      </div>
    </div>
  );
}