import React, { useState } from 'react';
import './css/ModButton.css'

const ModButton = (props) => {

  const [value, setValue] = useState(props.value)

  let incValue = (min) => {
    if (min === false) {
      setValue(value + 1)
      props.cbValue(value + 1)
    } else {
      if ((value+1) >= min) {
        setValue(value + 1)
        props.cbValue(value + 1)
      }
    }

  }

  let decValue = (min) => {
    if (min === false) {
      setValue(value - 1)
      props.cbValue(value - 1)
    } else {
      if ((value-1) >= min) {
        setValue(value - 1)
        props.cbValue(value - 1)
      }
    }
  }


  return (
    <div className="ModButton">
      <h1>{props.name}</h1>
      <div className="Controls">
        <button onClick={() => decValue(props.min)}>-</button>
        <div>{value}</div>
        <button onClick={() => incValue(props.min)}>+</button>
      </div>
    </div>
  )
}

export default ModButton