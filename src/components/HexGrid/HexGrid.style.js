import styled from "styled-components";
import Hexagon from "./HexGrid";

const HexSizing = {
  hexWith: "380px",
  hexHeight: "440px",
};

export const HexContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap:10px;
  width: 100%;
  height: 100%;
  border: 1px solid red;

  /* > span:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    background-color: red;
  }

  > span:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    background-color: green;
  }

  > span:nth-child(3) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    background-color: blue;
  }

  > span:nth-child(4) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    background-color: yellow;
  } */

  @media screen {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export const Hex = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column-start: ${(props) => props.left};
  grid-row-start: ${(props) => props.top};
  background-color: ${(props) => props.color};
  /* height: 380px;
  width: 440px; */
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
`;

export const HexagonContent = styled.span`
  color: white;
`;


// Old code to save 


// display: flex;
// justify-content: center;
// align-items: center;
// width: 100%;
// height: 100%;
// border: 1px solid red;

// > span:nth-child(1) {
//   /* position: absolute; */
//   /* background-color: red; */
// }
// > span:nth-child(2) {
//   /* position: absolute; */
//   background-color: green;
// }
// > span:nth-child(3) {
//   /* position: absolute; */
//   background-color: blue;
// }
// > span:nth-child(4) {
//   /* position: absolute; */
//   background-color: yellow;
// }



// .my-div {
//   clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
//   -webkit-mask-image: radial-gradient(
//     polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%) at center,
//     transparent 50%,
//     black 50%
//   );
//   mask-image: radial-gradient(
//     polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%) at center,
//     transparent 50%,
//     black 50%
//   );
//   border: 5px solid black;
// }