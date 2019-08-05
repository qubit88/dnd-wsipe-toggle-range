import React from "react";
import "./Confirm.css";

function Confirm() {
  return (
    <div className="Confirm">
      <button className="Confirm__delete Confirm__button">delete</button>
      <button className="Confirm__cancel Confirm__button">cancel</button>
    </div>
  );
}

export default Confirm;
