import React from "react";
import "./Range.scss";

function RangeNumbers({ min = 0, max = 10, value, onClick }) {
  let numbers = Array.from({ length: max - min + 1 }, (x, n) => min + n);
  console.log("numbers");

  return (
    <div className="Range__number-row">
      {numbers.map(n => (
        <div
          key={n}
          onClick={e => onClick(n)}
          className={`Range__number ${value === n ? "Range__active" : ""}`}
        >
          {n}
        </div>
      ))}
    </div>
  );
}

export default RangeNumbers;
