import { useSoccerFieldContext } from "@/contexts/SoccerFieldProvider";
import React from "react";

export default function GoalOuterLine() {
  const { showVerticalGrid } = useSoccerFieldContext();

  return (
    <div
      className={`h-[59.264%] aspect-[16.5/40.3]
    border-t-2 border-b-2 border-r-2 ${
      showVerticalGrid ? "bg-green-pattern" : "bg-green-field"
    } border-white z-20`}
    />
  );
}
