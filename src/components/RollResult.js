import React, {useState} from 'react';

const RollResult = (props) => {

  const [result, setResult] = useState()

  // https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const rollDice = (dSide, dNumber, rollMod) => {
    let rollResult = 0
    for (let i = 0; i++; i <= dNumber){
      rollResult += getRandomIntInclusive(0, dSide)
    }
    rollResult += rollMod
    return rollResult
  }

  

  return (
    <div>
      {result}
    </div>
  )
}

export default RollResult