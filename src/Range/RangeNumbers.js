import React from "react";
import "./Range.scss";

function RangeNumbers({
  min = 0,
  max = 10,
  value = 5,
  onChange,
  color,
  activeColor
}) {
  let numbers = Array.from({ length: max - min + 1 }, (x, n) => min + n);

  return (
    <div className="Range__number-row">
      {numbers.map(n => (
        <div
          style={{
            background:
              (value === n && activeColor) ||
              (value === n && "#AED581") ||
              color ||
              "black"
          }}
          key={n}
          onClick={e => onChange(n)}
          className="Range__number"
        >
          {n}
        </div>
      ))}
    </div>
  );
}

export default RangeNumbers;
