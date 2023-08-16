import React from "react";
import CenterSpot from "./CenterSpot";
import GoalInnerLine from "./GoalInnerLine";
import GoalOuterLine from "./GoalOuterLine";

type Props = {
  direction: string;
};

export default function GoalLine({ direction }: Props) {
  return (
    <div
      className={`absolute w-full h-full flex items-center ${
        direction === "left" ? "left-0" : "rotate-180 right-0"
      }`}
    >
      <GoalInnerLine />
      <GoalOuterLine />

      <div className="absolute w-full h-full flex items-center z-20">
        <div className="h-[10.57%] aspect-[12/8]" />
        <CenterSpot />
      </div>

      {/* Arc */}
      <div className="absolute h-full flex items-center translate-x-28">
        <div className="-translate-x-20 h-[26.912%] aspect-square border-2 rounded-full z-0" />
      </div>
    </div>
  );
}
