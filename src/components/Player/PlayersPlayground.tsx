"use client";
// This is for testing

import React, { useEffect, useRef, useState } from "react";
import Draggable, { DraggableData } from "react-draggable";
import Player from "./Player";

// export interface DraggableData {
//     node: HTMLElement,
//     x: number, y: number,
//     deltaX: number, deltaY: number,
//     lastX: number, lastY: number
//   }

export default function PlayersPlayground() {
  // 현재 box의 제한선을 측정
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0); // right
  const [containerHeight, setContainerHeight] = useState(0); // bottom
  const playerSizeOffset = 36;

  // Player의 위치를 저장해줄것
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const containerRect = container.getBoundingClientRect();
      console.log(containerRect);
      setContainerWidth(containerRect.width - playerSizeOffset);
      setContainerHeight(containerRect.height - playerSizeOffset);
    }
  }, []);

  /** Check whether Player or Ball is inside the field */
  const isInsideField = (x: number, y: number) => {
    // need to change 0 to threshold value for corner kick
    if (x < 0 || y < 0 || x > containerWidth || y > containerHeight)
      return false;
    return true;
  };

  // 드래그 되는동안 컴포넌트의 위치를 업데이트 해준다.
  const handleOnDrag = (data: DraggableData) => {
    console.log(data);
    if (!isInsideField(data.x, data.y)) {
      setPosition({ x: prevPosition.x, y: prevPosition.y });
    } else {
      setPrevPosition({ x: data.x, y: data.y });
      setPosition({ x: data.x, y: data.y });
    }
  };

  return (
    <div className="relative w-full h-full" ref={containerRef}>
      <Draggable
        position={{ x: position.x, y: position.y }} // 업데이트된 컴포넌트의 위치를 설정해준다.
        onDrag={(_, data) => handleOnDrag(data)} // 드래그 되는동안 컴포넌트의 위치를 업데이트 해준다.
      >
        <div
          className="absolute flex items-center justify-center 
      w-9 h-9 bg-red-500 rounded-full z-30 cursor-pointer"
        >
          <p className="text-white text-xl font-bold">1</p>
        </div>
      </Draggable>
    </div>
  );
}

// <drag시 발생하는 이벤트들>
// dragstart: 사용자가 객체를 드래그하려고 시작할때 발생함
// drag: 대상 객체를 드래그하면서 마우스를 움직일때 발생함
// dragenter: 마우스가 대상 객체의 위로 처음 진입할때 발생함
// dragover: 마우스가 대상 객체 위에 있을때 발생함
// drop: 사용자가 객체를 드롭했을때 발생함, 객체를 놓는 장소에 위치한 객체에서 발생함
// dragleave: 드래그가 끝나서 마우스가 대상 객체를 벗어날때 발생함
// dragend: 드래그하다가 마우스 버튼을 놓는 순간 발생함
