import React, { useState } from 'react';
import './css/VDice.css'

import ModButton from './ModButton'
import SingleDice from './SingleDice'

import styled from 'styled-components';


const Title = styled.h1`
  margin-top: 10px;
  text-align: center;
  line-height: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 2em;
`
const RollResult = styled.h1`
  margin-top: 10px;
  text-align: center;
  line-height: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 2em;
`

const VDice = (props) => {

  const [dNumber, setDNumber] = useState(1)
  const [rollMod, setRollMod] = useState(0)
  const [rollResult, setRollResult] = useState('')

  // https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const rollDice = (dSide, dNumber, rollMod) => {
    let result = 0
    for (let i = 1; i <= dNumber; i++) {
      result += getRandomIntInclusive(1, dSide)
    }
    result += rollMod
    setRollResult(result)
  }

  const rollSettings = {
    rollMod: rollMod,
    dNumber: dNumber,
    rollDice: rollDice
  }

  return (
    <div className="VDice">
      <Title>Virtual Dice</Title>
      <SingleDice dSide={4} rollSettings={rollSettings}></SingleDice>
      <SingleDice dSide={6} rollSettings={rollSettings}></SingleDice>
      <SingleDice dSide={8} rollSettings={rollSettings}></SingleDice>
      <SingleDice dSide={10} rollSettings={rollSettings}></SingleDice>
      <SingleDice dSide={12} rollSettings={rollSettings}></SingleDice>
      <SingleDice dSide={20} rollSettings={rollSettings}></SingleDice>
      <SingleDice dSide={100} rollSettings={rollSettings}></SingleDice>
      <ModButton name={'Set number of dice'} value={dNumber} cbValue={setDNumber}></ModButton>
      <ModButton name={'Set roll modification'} value={rollMod} cbValue={setRollMod}></ModButton>
      <RollResult>{rollResult}</RollResult>
    </div>
  )

}

export default VDice;