import React from "react";
import style from "./App.module.css";
import BoxContainer from "./components/BoxContainer";

function App() {
  const button_names = [
    "AC",
    "/",
    "*",
    "⌫",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
    ".",
    "",
  ];

  const keyMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "/": "/",
    "*": "*",
    "-": "-",
    "+": "+",
    Enter: "=",
    Backspace: "⌫",
    Escape: "AC",
  };

  return (
    <section className={style.sectionContainer}>
      <BoxContainer button_names={button_names} keyMap={keyMap} />
    </section>
  );
}

export default App;
