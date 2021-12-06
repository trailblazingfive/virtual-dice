import React, { useState } from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  font-family: UbuntuMono;
  font-size: 0.6em;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  :hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const StyledP = styled.p`
  font-size: 0.6em;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  display: inline;
`;

const CreditDiv = styled.div`
  text-align: right;
  position: absolute;
  bottom: 0.5vw;
  right: 0.5vw;
  @media screen and (min-width: 300px) and (max-width: 1000px) {
    position: static;
    width: 100%;
    text-align: right;
    vertical-align: bottom;
  }
`;

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
