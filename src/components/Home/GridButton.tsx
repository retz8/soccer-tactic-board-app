"use client";

import { useSoccerFieldContext } from "@/contexts/SoccerFieldProvider";
import React from "react";

type Props = {
  direction: "vertical" | "horizontal";
};

export default function GridButton({ direction }: Props) {
  const {
    toggleVerticalGridButton,
    showVerticalGrid,
    toggleHorizontalGridButton,
    showHorizontalGrid,
  } = useSoccerFieldContext();

  return (
    <button
      onClick={
        direction === "vertical"
          ? toggleVerticalGridButton
          : toggleHorizontalGridButton
      }
      className="w-56 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-2"
    >
      {`Show ${direction} grid: ${
        (direction === "vertical" && showVerticalGrid) ||
        (direction === "horizontal" && showHorizontalGrid)
          ? "ON"
          : "OFF"
      }`}
    </button>
  );
}
