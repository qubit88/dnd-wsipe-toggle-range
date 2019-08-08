import React, { useState } from "react";
import "./VisibleView.css";

function VisibleView({ children, swipable }) {
  const [initialPos, setInitialPos] = useState(null);
  const [translate, setTranslate] = useState(0);
  const [paused, setPaused] = useState(null);
  const threshold = 2;

  function onSwipeStart(event) {
    event = event.changedTouches ? event.changedTouches[0] : event;

    setInitialPos({ x: event.clientX, y: event.clientY });
    setPaused(false);
  }

  function onSwipeMove(event) {
    if (event.changedTouches) {
      event = event.changedTouches[0];
      document.addEventListener("touchend", onSwipeEnd);
    } else {
      document.addEventListener("mouseup", onSwipeEnd);
    }

    if (paused || !initialPos) {
      return;
    }
    const deltaX = initialPos ? initialPos.x - event.clientX : 0;
    let deltaY = Math.abs(initialPos.y - event.clientY);
    deltaY = deltaY ? deltaY : 1;
    const s = Math.abs(deltaX / deltaY);

    if (s > threshold) {
      if (deltaX > 10) {
        setTranslate("-25");
      } else if (deltaX < -10) {
        setTranslate("0");
      }
    }
  }

  function onSwipeEnd(event) {
    setPaused(true);
    setInitialPos(null);
    document.removeEventListener("touchend", onSwipeEnd);
    document.removeEventListener("mouseup", onSwipeEnd);
  }
  return (
    <div
      style={{ transform: `translateX(${translate}%)` }}
      onMouseDown={swipable ? onSwipeStart : undefined}
      onTouchStart={swipable ? onSwipeStart : undefined}
      onMouseMove={onSwipeMove}
      onTouchMove={onSwipeMove}
      className="VisibleView"
    >
      {children}
    </div>
  );
}

export default VisibleView;
