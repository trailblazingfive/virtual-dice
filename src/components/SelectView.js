import React from 'react';
import styled from 'styled-components';

const SelectViewContainer = styled.div`
  display: flexbox;
  flex-direction: rows;
  vertical-align: middle;
`

const ViewButton = styled.div`
  background: black;
  border-radius: 2px;
  border: 2px white solid;
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
      <ViewButton disabled={true}>History</ViewButton>
    </SelectViewContainer>
  )
}

export default SelectView