import {convertRollArrayToString} from '../utils/conversionUtils'


export const generateRoll = (dSide, dNumber, rollMod, rollCounter) => {
  let result = 0
  let rolls = []
  let rollModStr = ''
  for (let i = 1; i <= dNumber; i++) {
    rolls.push(getRandomIntInclusive(1, dSide))
    result += rolls[rolls.length - 1]
  }
  result += rollMod
  if (rollMod === 0) {
    rollModStr = ""
  } else if (rollMod > 0) {
    rollModStr = `+${rollMod}`
  } else if (rollMod < 0) {
    rollModStr = `${rollMod}`
  }

  return {
    timestamp: new Date(),
    total: result,
    rolls: rolls,
    rollNumber: rollCounter,
    rollsString: convertRollArrayToString(rolls),
    diceTypeString: `${dNumber}d${dSide}${rollModStr}`
  }
}

  // https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }