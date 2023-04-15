import React from "react";
import styled from "styled-components";

const theme = {
  DiamondSize: "35%",
};

const Body = styled.div`
  background: #000;
`;

const BigDiamond = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 25%;
  width: 50%;
  margin: 15% auto;
  overflow: hidden;
  transform: rotate(45deg);
`;

const Diamond = styled.div`
  position: relative;
  float: left;
  flex-basis: 35%;
  padding-bottom: 35%;
  margin: 1%;
  background: #fff;
  transition: background-color 0.4s;

  &:hover {
    background-color: darkorange;
  }
`;

const DiamondLink = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-45deg);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 24px;
`;

function Grid() {
  return (
    <Body>
      <BigDiamond>
        <Diamond>
          <DiamondLink> Text</DiamondLink>
        </Diamond>
        <Diamond>
          <DiamondLink></DiamondLink>
        </Diamond>
        <Diamond>
          <DiamondLink></DiamondLink>
        </Diamond>
        <Diamond>
          <DiamondLink></DiamondLink>
        </Diamond>
      </BigDiamond>
    </Body>
  );
}

export default Grid;
