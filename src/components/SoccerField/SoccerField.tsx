"use client";
/**
 * SoccerField component
 * { size: field size, default = 105m * 68m }
 */

import React, { useContext } from "react";
import CenterCircle from "./CenterCircle";
import CenterSpot from "./CenterSpot";
import CornerArcs from "./CornerArcs";
import CenterLine from "./CenterLine";
import GoalLine from "./GoalLine";
import Goal from "./Goal";
import { useSoccerFieldContext } from "@/contexts/SoccerFieldProvider";
import VerticalGrid from "./VerticalGrid";
import HorizontalGrid from "./HorizontalGrid";

type Props = {
  size?: string; // need to add options instead of simple string
};

// NOTE: maybe need to add width and height display

export default function SoccerField({ size = "default" }: Props) {
  const { showVerticalGrid, showHorizontalGrid } = useSoccerFieldContext();

  return (
    <div className="flex items-center w-full bg-[#8cc63e] p-5 rounded-xl">
      <Goal direction="left" />
      <div
        className={`grow min-w-[1024px] 
        ${size === "direct" ? "aspect-[110/68]" : "aspect-[105/68]"}
        `}
      >
        <div className="relative w-full h-full border-2 border-white">
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

          {showVerticalGrid && <VerticalGrid />}

          {showHorizontalGrid && <HorizontalGrid />}
        </div>
      </div>

      <Goal direction="right" />
    </div>
  );
}
