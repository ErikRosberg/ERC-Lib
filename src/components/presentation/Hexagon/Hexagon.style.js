import styled from "styled-components";

// Used to controll the Hexagon Sizing in one place'¨
const hexSize = "150px";
const hexBorderSize = "0.5rem";
const fontSize = "24px";

const HexSizing = {
  width: `min("30rem", "150px")`,
  hexBackgroundSize: `calc(${hexSize} + ${hexBorderSize})`,
};

const Hexagon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${HexSizing.hexSize};
  height: ${HexSizing.hexSize};
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
`;

//Styling for the larger hexagon (border)
export const HexBorder = styled(Hexagon)`
  width: ${HexSizing.hexBackgroundSize};
  height: ${HexSizing.hexBackgroundSize};
  padding: ${hexBorderSize};
  background: ${(props) =>
    `linear-gradient(${props.direction}, ${props.firstColor}, ${props.secondColor})`};
`;

//Styling for the inner/smaller hexagon where the content is displayed
export const HexContentContainer = styled(Hexagon)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.bg ? props.bg : "white")};
  width: ${hexSize};
  height: ${hexSize};

  > h3 {
    text-align: center;
    font-size: 12px;
  }
  > b {
    text-align: center;
  }

  :hover {
    background-color: blue;
  }
`;

//Styling for the Dot inside the hexagon
export const Dot = styled.span`
  height: 1rem;
  width: 1rem;
  clip-path: circle(50% at 50% 50%);
  background-color: ${(props) => (props.color ? props.color : "red")};
`;
