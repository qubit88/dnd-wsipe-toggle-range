import React from "react";
import "./Item.css";

function Item({ item }) {
  return <div className="Item">{item.name}</div>;
}

export default Item;
