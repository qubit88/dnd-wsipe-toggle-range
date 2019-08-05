import React, { useState } from "react";
import "./VisibleView.css";

function VisibleView({ children }) {
  const [initialPos, setInitialPos] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const [translate, setTranslate] = useState(0);
  const threshold = 2;

  function onMouseDown(event) {
    setInitialPos({ x: event.clientX, y: event.clientY });
    console.log(initialPos);
  }

  function onMouseMove(event) {
    const deltaX = initialPos ? initialPos.x - event.clientX : 0;

    console.log(deltaX);

    if (isSwiping) {
      // debugger;
      setTranslate(deltaX);
    } else if (deltaX > 20) {
      const deltaY = Math.abs(initialPos.y - event.clientY);
      const s = deltaX / deltaY;

      if (s > threshold) {
        setIsSwiping(true);
      }
    }
  }

  function onMouseUp(event) {
    setInitialPos(null);
    setIsSwiping(false);
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
