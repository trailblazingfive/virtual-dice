import React from "react";
import "./css/SingleDice.css";

const SingleDice = props => {
  return (
    <button
      className="SingleDice"
      onClick={() => {
        props.rollSettings.rollDice(
          props.dSide,
          props.rollSettings.dNumber,
          props.rollSettings.rollMod,
          props.rollSettings.rollCounter
        );
      }}
    >
      d{props.dSide}
    </button>
  );
};

export default SingleDice;
