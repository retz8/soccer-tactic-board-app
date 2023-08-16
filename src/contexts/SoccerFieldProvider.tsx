"use client";

import { SoccerFieldContextType } from "@/types/ContextTypes";
import React, { ReactNode, useContext } from "react";
import { createContext, useState } from "react";

const SoccerFieldContext = createContext<SoccerFieldContextType | undefined>(
  undefined
);

type SoccerFieldProviderProps = {
  children: ReactNode;
};

export function SoccerFieldProvider({ children }: SoccerFieldProviderProps) {
  const [showVerticalGrid, setShowVerticalGrid] = useState(false);
  const [showHorizontalGrid, setShowHorizontalGrid] = useState(false);

  const toggleVerticalGridButton = () => {
    setShowVerticalGrid((showVerticalGrid) => !showVerticalGrid);
  };
  const toggleHorizontalGridButton = () => {
    setShowHorizontalGrid((showHorizontalGrid) => !showHorizontalGrid);
  };

  const contextValue: SoccerFieldContextType = {
    showVerticalGrid,
    toggleVerticalGridButton,
    showHorizontalGrid,
    toggleHorizontalGridButton,
  };

  return (
    <SoccerFieldContext.Provider value={contextValue}>
      {children}
    </SoccerFieldContext.Provider>
  );
}

export function useSoccerFieldContext() {
  const context = useContext(SoccerFieldContext);
  if (!context) {
    throw new Error(
      "useSoccerFieldContext must be used within a SoccerFieldProvider"
    );
  }
  return context;
}
