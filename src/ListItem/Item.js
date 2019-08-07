import React from "react";
import "./Item.css";

function Item({ item, isActive }) {
  return (
    <div className={`Item ${isActive ? "isActive" : ""}`}>{item.name}</div>
  );
}

export default Item;
