import React from "react";
import "./Item.css";

function Item({ item, isActive, isDraggedOver }) {
  return (
    <div
      className={`Item ${isActive ? "isActive" : ""} ${
        isDraggedOver ? "isDraggedOver" : ""
      }`}
    >
      {item.name}
    </div>
  );
}

export default Item;
