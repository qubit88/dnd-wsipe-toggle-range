import React, { useState } from "react";
import "./VisibleView.css";

function VisibleView({ children }) {
  const [initialPos, setInitialPos] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const [translate, setTranslate] = useState(0);
  const [paused, setPaused] = useState(null);
  const threshold = 2;

  function onMouseDown(event) {
    if (!isSwiping) {
      setInitialPos({ x: event.clientX, y: event.clientY });
    }

    setPaused(false);
    console.log(initialPos);
  }

  function onMouseMove(event) {
    if (paused) {
      return;
    }
    const deltaX = initialPos ? initialPos.x - event.clientX : 0;

    console.log(deltaX);

    if (isSwiping) {
      // debugger;
      if (deltaX === 0) {
        setIsSwiping(false);
      }
      setTranslate(deltaX);
    } else if (deltaX > 10) {
      const deltaY = Math.abs(initialPos.y - event.clientY);
      const s = deltaX / deltaY;

      if (s > threshold) {
        setIsSwiping(true);
      }
    }
  }

  function onMouseUp(event) {
    // if (isSwiping) {
    setPaused(true);
    // }
    // setInitialPos(null);
    // setIsSwiping(false);
  }
  return (
    <div
      style={{ transform: `translateX(-${translate}px)` }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      className="VisibleView"
    >
      {children}
    </div>
  );
}

export default VisibleView;
