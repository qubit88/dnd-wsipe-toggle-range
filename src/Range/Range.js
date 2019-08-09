import React from "react";
import "./Range.scss";

function Range({ value, min, max, onChange, color }) {
  const style = {
    background: color
      ? color
      : "linear-gradient(to right, rgba(0,0,0,0) 0%, #ab47bc 100%)"
  };
  return (
    <div className="Range">
      <input
        style={style}
        type="range"
        min={min || 0}
        max={max || 10}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="Range__input"
      />
    </div>
  );
}

export default Range;
