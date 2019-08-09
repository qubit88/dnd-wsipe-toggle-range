import React from "react";
import "./Confirm.css";

function Confirm({ onDelete }) {
  return (
    <div className="Confirm">
      <button
        onClick={() => onDelete()}
        className="Confirm__delete Confirm__button"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 46 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="2.70711"
            y1="1.29289"
            x2="44.8141"
            y2="43.3999"
            stroke="#DC3636"
            strokeWidth="3"
          />
          <line
            x1="1.61882"
            y1="43.4386"
            x2="43.7258"
            y2="1.33164"
            stroke="#DC3636"
            strokeWidth="3"
          />
        </svg>
      </button>
    </div>
  );
}

export default Confirm;
