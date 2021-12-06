import React, { useState } from "react";
import ModButton from "./ModButton";
import SingleDice from "./SingleDice";
import Backdrop from "./Backdrop";
import Credit from "./Credit";
import { RollHistory } from "./RollHistory"
import { generateRoll } from "../utils/rollUtils";
import { DEFAULT_DICE_SET } from "../utils/config"
import "./css/VDice.css";
import styled from "styled-components";

import { useSelector, useDispatch } from 'react-redux'
import { addRoll, advanceRoll } from "../redux/rollSlice";

const Title = styled.h1`
  margin-top: 10px;
  text-align: center;
  line-height: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 2em;
  user-select: none;
`;

const ModContainer = styled.div`
  display: flex;
  flex-direction: rows;
  vertical-align: middle;
  @media screen and (min-width: 300px) and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const VDice = props => {
  const [dNumber, setDNumber] = useState(1);
  const [rollMod, setRollMod] = useState(0);
  const [rollResult, setRollResult] = useState("");
  const [diceArray, setDiceArray] = useState(DEFAULT_DICE_SET);

  const dispatch = useDispatch()
  const allRolls = useSelector((state) => state.roll.rolls)

  const rollSettings = {
    rollMod: rollMod,
    dNumber: dNumber,
    rollCounter: useSelector((state) => state.roll.rollCounter),
    rollDice: (dSide, dNumber, rollMod, rollCounter) => {
      let result = generateRoll(dSide, dNumber, rollMod, rollCounter)
      dispatch(addRoll(result))
      dispatch(advanceRoll())
      setRollResult(result);
    }
  };

  const resetDiceSet = () => {
    setDiceArray(DEFAULT_DICE_SET);
  };

  return (
    <div className="VDice">
      <Title>Virtual dice</Title>
      <div className="RollResults">
        <p>{rollResult.diceTypeStr}</p>
        <p id="DiceTotal">{rollResult.total}</p>
        <p id="DiceRolls">{rollResult.rollsStr}</p>
      </div>
      {diceArray.map(element => (
        <SingleDice dSide={element} rollSettings={rollSettings}></SingleDice>
      ))}
      <ModContainer>
        <ModButton
          name={"Set number of dice"}
          value={dNumber}
          cbValue={setDNumber}
          min={1}
        ></ModButton>
        <ModButton
          name={"Set roll modification"}
          value={rollMod}
          cbValue={setRollMod}
          min={false}
        ></ModButton>
      </ModContainer>
      <RollHistory allRolls={allRolls}/>
      <Backdrop />
      <Credit />
    </div>
  );
};

export default VDice;
