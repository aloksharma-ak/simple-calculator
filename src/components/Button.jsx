import React from "react";
import style from "./Button.module.css";

function Button({ buttonName, buttonClicked }) {
  return (
    <button onClick={(e) => buttonClicked(e)} className={style.button}>
      {buttonName}
    </button>
  );
}

export default Button;
