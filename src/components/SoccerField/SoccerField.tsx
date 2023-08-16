"use client";
/**
 * SoccerField component
 * { size: field size, default = 105m * 68m }
 */

import React from "react";
import Goal from "./Goal";
import { useSoccerFieldContext } from "@/contexts/SoccerFieldProvider";
import VerticalGrid from "./VerticalGrid";
import HorizontalGrid from "./HorizontalGrid";
import MainSoccerField from "./MainSoccerField";
import PlayersPlayground from "../Player/PlayersPlayground";

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
          <MainSoccerField />

          {showVerticalGrid && <VerticalGrid />}

          {showHorizontalGrid && <HorizontalGrid />}

          <div className="space-center z-30">
            <PlayersPlayground />
          </div>
        </div>
      </div>

      <Goal direction="right" />
    </div>
  );
}
