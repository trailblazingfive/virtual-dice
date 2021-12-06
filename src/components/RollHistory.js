import React from "react";
import styled from "styled-components";

const HistoryContainer = styled.div`
  height: 30vh;
  overflow: auto;
  border: 1px solid white;
  padding: 5px;
  width: 90%;
  @media screen and (min-width: 300px) and (max-width: 1000px) {
    width: 80%;
    height: 20vh;
  }
`;

const RowCell = styled.p``;

const RowCellBold = styled.p`
  font-weight: bold;
`;

const SingleRow = styled.div`
  display: grid;
  border: 1px solid white;
  margin: 3px;
  grid-template-columns: 1fr 2fr 2fr 1fr 4fr;

  > * {
    font-family: UbuntuMono;
    padding: 5px;
    font-size: 0.7em;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 300px) and (max-width: 1000px) {
      padding: 0px;
      margin: 0px;
    }
  }
`;

export const RollHistory = props => {
  return (
    <HistoryContainer>
      <SingleRow>
        <RowCell>No</RowCell>
        <RowCell>Timestamp</RowCell>
        <RowCell>Roll type</RowCell>
        <RowCellBold>Result</RowCellBold>
        <RowCell>Single rolls</RowCell>
      </SingleRow>
      {props.allRolls
        .slice(0)
        .reverse()
        .map(el => (
          <SingleRow key={el.timestamp.getTime()}>
            <RowCell>{el.rollNumber}</RowCell>
            <RowCell>{el.timestamp.toLocaleTimeString()}</RowCell>
            <RowCell>{el.diceTypeString}</RowCell>
            <RowCellBold>{el.total}</RowCellBold>
            <RowCell>{el.rollsString}</RowCell>
          </SingleRow>
        ))}
    </HistoryContainer>
  );
};
