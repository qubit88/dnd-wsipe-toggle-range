import React from "react";
import "./HiddenView.css";

function HiddenView({ children }) {
  return <div className="HiddenView">{children}</div>;
}

export default HiddenView;
