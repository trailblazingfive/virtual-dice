import React from "react";
import styled from "styled-components";

const HistoryContainer = styled.div`
  height: 300px;
  overflow: auto;
  border: 1px solid white;
  padding: 10px;
  width: 80%;
`;

const RowCell = styled.div`
`;

const RowCellBold = styled.div`
  font-weight: bold;
`;

const SingleRow = styled.div`
  display: grid;
  border: 1px solid white;
  margin: 3px;
  grid-template-columns: repeat(5, 1fr);

  > * {
    font-family: Arial;
    padding: 5px;
    font-size: 0.7em;
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
      {props.allRolls.slice(0).reverse().map(el => (
        <SingleRow key={el.timestamp.getTime()}>
          <RowCell>{el.rollNumber}</RowCell>
          <RowCell>{el.timestamp.toLocaleTimeString()}</RowCell>
          <RowCell>{el.diceTypeStr}</RowCell>
          <RowCellBold>{el.total}</RowCellBold>
          <RowCell>{el.rollsStr}</RowCell>
        </SingleRow>
      ))}
    </HistoryContainer>
  );
};
