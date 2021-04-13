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
// const RollResult = styled.h1`
//   margin-top: 10px;
//   text-align: center;
//   line-height: 50px;
//   padding-top: 5px;
//   padding-bottom: 5px;
//   font-size: 2em;
// `

const RollResult = styled.div`
  margin-top: 10px;
  text-align: center;
  line-height: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 2em;
`

const ModContainer = styled.div`
  display: flex;
  flex-direction: rows;
  vertical-align: middle;
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
    let rolls = []
    let rollModStr = ''
    for (let i = 1; i <= dNumber; i++) {
      rolls.push(getRandomIntInclusive(1, dSide))
      result += rolls[rolls.length - 1]
    }
    result += rollMod
    console.log(rolls)
    if (rollMod === 0) {
      rollModStr = ""
    } else if (rollMod > 0) {
      rollModStr = `+${rollMod}`
    } else if (rollMod < 0) {
      rollModStr = `${rollMod}`
    }
    setRollResult({
      total: result,
      rolls: rolls,
      rollsStr: arrToStr(rolls),
      diceTypeStr: `${dNumber}d${dSide}${rollModStr}`
    })
  }

  const arrToStr = (arr) => {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
      str += `${arr[i]},`
    }
    return str.slice(0, -1)
  }

  const rollSettings = {
    rollMod: rollMod,
    dNumber: dNumber,
    rollDice: rollDice
  }

  return (
    <div className="VDice">
      <Title>Virtual Dice</Title>
      <RollResult>
        <p>{rollResult.diceTypeStr}</p>
        <p>{rollResult.total}</p>
        <p>{rollResult.rollsStr}</p>
      </RollResult>
      <SingleDice dSide={4} rollSettings={rollSettings}></SingleDice>
      <SingleDice dSide={6} rollSettings={rollSettings}></SingleDice>
      <SingleDice dSide={8} rollSettings={rollSettings}></SingleDice>
      <SingleDice dSide={10} rollSettings={rollSettings}></SingleDice>
      <SingleDice dSide={12} rollSettings={rollSettings}></SingleDice>
      <SingleDice dSide={20} rollSettings={rollSettings}></SingleDice>
      <SingleDice dSide={100} rollSettings={rollSettings}></SingleDice>
      <ModContainer>
        <ModButton name={'Set number of dice'} value={dNumber} cbValue={setDNumber}></ModButton>
        <ModButton name={'Set roll modification'} value={rollMod} cbValue={setRollMod}></ModButton>
      </ModContainer>
    </div>
  )

}

export default VDice;