import React from "react";
import "./Toggle.css";

function Toggle({ checked, onChange, color }) {
  return (
    <>
      <input
        id={`Toggle-checkbox`}
        className="Toggle-checkbox__input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label
        style={{ backgroundColor: checked && color ? color : null }}
        htmlFor={`Toggle-checkbox`}
        className="Toggle-checkbox__label"
      >
        <span className="Toggle-checkbox__handle" />
      </label>
    </>
  );
}

export default Toggle;
