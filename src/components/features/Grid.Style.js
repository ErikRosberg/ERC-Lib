import styled from "styled-components";

export const theme = {
  DiamondSize: "35%",
};

export const Body = styled.body`
  /* background: #000; */
`;

export const BigDiamond = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 25%;
  width: 50%;
  margin: 15% auto;
  overflow: hidden;
  transform: rotate(45deg);
`;

export const Diamond = styled.div`
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

export const DiamondLink = styled.p`
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
