import React, { useState } from "react";
import styled from 'styled-components';

const StyledLink = styled.a`
  font-size: 0.5em;
  text-align: right;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  :hover {
    color: rgba(255,255,255, 0.95);
  }
`

const StyledP = styled.p`
  font-size: 0.5em;
  text-align: right;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  display: inline;
`

const CreditDiv = styled.div`
  position: fixed;
  bottom: 0.5vw;
  right: 0.5vw;
`

const Credit = () => {

  return (
    <CreditDiv>
      <StyledLink
        href="https://wallpapersmug.com/w/download/1920x1080/cyberpunk-city-buildings-art-13377a25488"
        target="_blank"
        rel="noopener noreferrer"
      >
        background art source
    </StyledLink>
    <StyledP> | </StyledP>
      <StyledLink
        href="https://github.com/trailblazingfive"
        target="_blank"
        rel="noopener noreferrer"
      >
        app by trailblazingfive 2021
    </StyledLink>
    </CreditDiv>
  );
};

export default Credit;