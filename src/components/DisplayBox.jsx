import React from "react";
import style from "./DisplayBox.module.css";

function DisplayBox({ display, result }) {
  return (
    <div className={style.displayBox}>
      <div className={style.displayText}>{display}</div>
      <div className={style.displayResult}>{result}</div>
    </div>
  );
}

export default DisplayBox;
