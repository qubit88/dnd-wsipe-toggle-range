import React, { useState } from "react";
import "./VisibleView.css";

function VisibleView({ children }) {
  const [initialPos, setInitialPos] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const [translate, setTranslate] = useState(0);
  const [paused, setPaused] = useState(null);
  const threshold = 2;

  function onSwipeStart(event) {
    // event.preventDefault();
    event = event.changedTouches ? event.changedTouches[0] : event;

    setInitialPos({ x: event.clientX, y: event.clientY });
    setPaused(false);
  }

  function onSwipeMove(event) {
    // event.preventDefault();
    event = event.changedTouches ? event.changedTouches[0] : event;

    if (paused || !initialPos) {
      return;
    }
    const deltaX = initialPos ? initialPos.x - event.clientX : 0;
    let deltaY = Math.abs(initialPos.y - event.clientY);
    deltaY = deltaY ? deltaY : 1;
    const s = Math.abs(deltaX / deltaY);

    if (s > threshold) {
      if (deltaX > 10) {
        setIsSwiping(true);
        setTranslate("-25");
      } else if (deltaX < -10) {
        setIsSwiping(false);
        setTranslate("0");
      }
    }
  }

  function onSwipeEnd(event) {
    // if (isSwiping) {
    setPaused(true);
    // }
    // setInitialPos(null);
    // setIsSwiping(false);
  }
  return (
    <div
      style={{ transform: `translateX(${translate}%)` }}
      onMouseDown={onSwipeStart}
      onTouchStart={onSwipeStart}
      onMouseMove={onSwipeMove}
      onTouchMove={onSwipeMove}
      onMouseUp={onSwipeEnd}
      onTouchEnd={onSwipeEnd}
      className="VisibleView"
    >
      {children}
    </div>
  );
}

export default VisibleView;
