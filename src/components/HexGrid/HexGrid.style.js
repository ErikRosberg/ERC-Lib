import styled from "styled-components";

const hexWidth = "280px";
const hexHeight = "280px";
const hexagon =
  "clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

const HexSizing = {
  hexWidth: hexWidth,
  hexHeight: hexHeight,
  hexBackgroundWidth: `calc(${hexWidth} + 1rem)`,
  hexBackgroundHeight: `calc(${hexHeight} + 1rem)`,

  // hexBackgroundWidth: `calc(${hexWidth} + ${(props) => props.border};)`,
  // hexBackgroundHeight: `calc(${hexHeight} + ${(props) => props.border};)`,
};

export const HexGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 3, 1fr);
  grid-template-rows: repeat(auto-fit, 3, 1fr);
  background-color: #2196f3;
  grid-row-gap: 0;
  grid-column-gap: 0;
  /* width: 100%; */
  /* height: 100%; */
  border: 1px solid red;

  /* @media screen {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  } */
`;

// Styling for the hexagon base shape
const Hexagon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${HexSizing.hexWidth};
  height: ${HexSizing.hexHeight};
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
`;

//Styling for the larger hexagon (border)
export const HexBorder = styled(Hexagon)`
  /* width: calc(${HexSizing.hexBackgroundWidth} + ${(props) =>
    props.border}); */
  /* width: calc(${HexSizing.hexBackgroundHeight} + ${(props) =>
    props.border}); */
  width: ${HexSizing.hexBackgroundWidth};
  height: ${HexSizing.hexBackgroundHeight};
  grid-column-start: ${(props) => props.left};
  grid-row-start: ${(props) => props.top};
  background: ${(props) =>
    `linear-gradient(${props.direction}, ${props.firstColor}, ${props.secondColor})`};
  /* background: linear-gradient(#e66465, #9198e5); */

  /* box-shadow: inset 0 0 0 5rem lightGreen; */
`;

//Styling for the inner/smaller hexagon where the content is displayed
export const HexContentContainer = styled(Hexagon)`
  background-color: ${(props) => (props.bg ? props.bg : "white")};

  :hover {
    background-color: blue;
  }
`;

export const Dot = styled.span`
  height: 25px;
  width: 25px;
  clip-path: circle(50% at 50% 50%);
  background-color: ${(props) => (props.color ? props.color : "blue")};
`;

//Inner Outer Hex variations
const iohex = styled.div`  
  -webkit-clip-path: ${hexagon}
  clip-path:  ${hexagon}
`;

const outside = styled(iohex)`
  position: relative;
  width: 70vmin;
  height: 70vmin;
  background: tomato;
`;

const inside = styled(iohex)`
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background: white;
`;

const content = styled.div``;
