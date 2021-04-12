import React, {useState} from 'react';
import './css/ModButton.css'

const ModButton = (props) => {

  const [value, setValue] = useState(props.value)

  let incValue = () => {
    setValue(value+1)
    props.cbValue(value+1)
  }

  let decValue = () => {
    setValue(value-1)
    props.cbValue(value-1)
  }


  return (
    <div className="ModButton">
      <h1>{props.name}</h1>
      <button onClick={()=>decValue()}>-</button>
      <p>{value}</p>
      <button onClick={()=>incValue()}>+</button>
    </div>
  )
}

export default ModButton