import React from "react";

type Props = {
  size?: string;
};

export default function CenterCircle({ size = "default" }: Props) {
  return (
    <div className="h-[26.912%] aspect-square border-2 border-white rounded-full" />
  );
}
