import React from "react";
import style from "./ButtonsGroup.module.css";
import Button from "./Button";

function ButtonsGroup({ button_names, buttonClicked }) {
  return (
    <div className={style.buttons}>
      {button_names.map((buttonName, i) => {
        return <Button key={i} buttonName={buttonName} buttonClicked={buttonClicked} />;
      })}
    </div>
  );
}

export default ButtonsGroup;
