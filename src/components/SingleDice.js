import React from 'react'

const SingleDice = (props) => {

  return (
    <button onClick={()=>{props.cbRollDice(
      props.dSide,
      props.dNumber,
      props.rollMod
    )
  }}>D{props.dSide}</button>
  )
}

export default SingleDice;