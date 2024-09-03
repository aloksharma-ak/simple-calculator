import React, { useEffect, useState } from "react";
import style from "./BoxContainer.module.css";
import ButtonsGroup from "./ButtonsGroup";
import DisplayBox from "./DisplayBox";

function BoxContainer({ button_names, keyMap }) {
  const [display, setDisplay] = useState("0");
  const [result, setResult] = useState("");

  const buttonClicked = (input) => {
    let newInput;

    if (typeof input === "string") {
      newInput = input;
    } else {
      newInput = input.target.innerHTML;
    }

    if (newInput === "AC") {
      setDisplay("0");
      setResult("");
    } else if (newInput === "=") {
      try {
        const result = eval(display);
        setResult(result);
      } catch (error) {
        setResult("Error");
      }
    } else if (newInput === "⌫") {
      if (display.length === 1) {
        setDisplay("0");
      } else {
        setDisplay(display.slice(0, -1));
      }
    } else {
      let totalInput = display === "0" ? newInput : display + newInput;
      setDisplay(totalInput);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const value = keyMap[e.key];
      if (value) {
        buttonClicked(value);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [display, keyMap]);

  return (
    <div className={style.boxContainer}>
      <DisplayBox display={display} result={result} />
      <ButtonsGroup button_names={button_names} buttonClicked={buttonClicked} />
    </div>
  );
}

export default BoxContainer;
