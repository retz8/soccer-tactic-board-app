import React from "react";

type Props = {
  direction: string;
};

export default function Goal({ direction }: Props) {
  return (
    <div
      className={`h-[10.76%] aspect-[2.44/7.32] 
      ${direction === "left" ? "rotate-0" : "rotate-180"}
      border-l-2 border-t-2 border-b-2 border-white`}
    />

  );
}
