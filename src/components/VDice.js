import React, { useState } from 'react';
import ModButton from './ModButton'
import SingleDice from './SingleDice'
import Backdrop from "./Backdrop";
import Credit from "./Credit"
import {generateRoll} from '../utils/rollUtils'
import './css/VDice.css'
import styled from 'styled-components';

const Title = styled.h1`
  margin-top: 10px;
  text-align: center;
  line-height: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 2em;
  user-select: none;
`

const ModContainer = styled.div`
  display: flex;
  flex-direction: rows;
  vertical-align: middle;
  @media screen and (min-width:300px) and (max-width:1000px) {
    flex-direction: column;
  }
`

const VDice = (props) => {
  const [dNumber, setDNumber] = useState(1)
  const [rollMod, setRollMod] = useState(0)
  const [rollResult, setRollResult] = useState('')
  const [diceArray, setDiceArray] = useState([4,6,8,10,12,20,100])

  const rollDice = (dSide, dNumber, rollMod) => {
    setRollResult(generateRoll(dSide,dNumber,rollMod))
  }

  const rollSettings = {
    rollMod: rollMod,
    dNumber: dNumber,
    rollDice: rollDice
  }

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
        <ModButton name={'Set number of dice'} value={dNumber} cbValue={setDNumber} min={1}></ModButton>
        <ModButton name={'Set roll modification'} value={rollMod} cbValue={setRollMod} min={false}></ModButton>
      </ModContainer>
      <Backdrop />
      <Credit/>
    </div>
  )

}

export default VDice;