import React from 'react';
import styled from 'styled-components';

const SelectViewContainer = styled.div`
  display: flexbox;
  flex-direction: rows;
  vertical-align: middle;
  padding: 5px;
  width: 50%;
`

const ViewButton = styled.div`
  background: black;
  border-radius: 2px;
  border: 2px white solid;
  padding: 10px;
  width: 100px;
  :hover {
    background: white;
    color: black;
    border: 2px black solid;
  }
`

const SelectView = (props) => {

  return (
    <SelectViewContainer>
      <ViewButton>Dice roll</ViewButton>
      <ViewButton>History</ViewButton>
    </SelectViewContainer>
  )
}

export default SelectView