import React from "react";
import "./Range.scss";

function Range({ value, min, max, onChange }) {
  return (
    <div className="Range">
      <input
        type="range"
        min={min || 0}
        max={max || 10}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="Range__input"
      />
    </div>
  );
}

export default Range;
