import React from "react";
import "./Range.scss";

function Range({
  value = 5,
  min = 0,
  max = 10,
  onChange,
  color = "linear-gradient(to right, rgba(0,0,0,0) 0%, #ab47bc 100%)"
}) {
  return (
    <div className="Range">
      <input
        style={{ background: color }}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="Range__input"
      />
    </div>
  );
}

export default Range;
