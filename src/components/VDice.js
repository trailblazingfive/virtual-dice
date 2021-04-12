import React, { useState, useEffect } from 'react';
import './css/VDice.css'

import ModButton from './ModButton'
import RollResult from './RollResult'
import SingleDice from './SingleDice'

const VDice = (props) => {

  const [dNumber, setDNumber] = useState(1)
  const [rollMod, setRollMod] = useState(0)
  const [rollResult, setRollResult] = useState(0)

  // https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const rollDice = (dSide, dNumber, rollMod) => {
    let result = 0
    for (let i = 1; i <= dNumber; i++) {
      result += getRandomIntInclusive(0, dSide)
      console.log(`${i}; ${result}`)
    }
    result += rollMod
    setRollResult(result)
  }


  return (
    <div className="VDice">
      <h1>Virtual Dice</h1>
      <SingleDice
        dSide={4}
        dNumber={dNumber}
        rollMod={rollMod}
        cbRollDice={rollDice}
      ></SingleDice>
      <SingleDice
        dSide={6}
        dNumber={dNumber}
        rollMod={rollMod}
        cbRollDice={rollDice}
      ></SingleDice>
      <SingleDice
        dSide={8}
        dNumber={dNumber}
        rollMod={rollMod}
        cbRollDice={rollDice}
      ></SingleDice>
      <SingleDice
        dSide={10}
        dNumber={dNumber}
        rollMod={rollMod}
        cbRollDice={rollDice}
      ></SingleDice>
      <SingleDice
        dSide={12}
        dNumber={dNumber}
        rollMod={rollMod}
        cbRollDice={rollDice}
      ></SingleDice>
      <SingleDice
        dSide={20}
        dNumber={dNumber}
        rollMod={rollMod}
        cbRollDice={rollDice}
      ></SingleDice>
      <SingleDice
        dSide={100}
        dNumber={dNumber}
        rollMod={rollMod}
        cbRollDice={rollDice}
      ></SingleDice>
      <ModButton name={'set dice N'} value={dNumber} cbValue={setDNumber}></ModButton>
      <ModButton name={'set roll mod'} value={rollMod} cbValue={setRollMod}></ModButton>
      <p>Roll result: {rollResult}</p>
    </div>
  )

}

export default VDice;