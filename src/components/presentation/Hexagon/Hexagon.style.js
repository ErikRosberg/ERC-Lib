import styled from "styled-components";

// Used to controll the Hexagon Sizing in one place'¨
const hexSize = "100%";
const hexBorderSize = "0.5rem";

const HexSizing = {
  minHexSize: "150px",
  fontSize: "24px",
  hexBackgroundSize: `calc(${hexSize} + ${hexBorderSize})`,
  innerHexSize: `calc(${hexSize} - ${hexBorderSize})`,
};

const Hexagon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  width: ${HexSizing.hexSize};
  height: ${HexSizing.hexSize};
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  margin: 0 auto;

  @media only screen and (max-width: 515px) {
    width: ${HexSizing.hexSize};
    height: ${HexSizing.hexSize};
    max-width: ${HexSizing.minHexSize};
    max-height: ${HexSizing.minHexSize};
  }
`;

//Styling for the larger hexagon (border)
export const HexBorder = styled(Hexagon)`
  grid-column-start: ${(props) => props.column};
  grid-row-start: ${(props) => props.row};
  width: ${HexSizing.hexBackgroundSize};
  height: ${HexSizing.hexBackgroundSize};
  padding: ${hexBorderSize}; // denna padding sabbar för grid fit dvs overflow hur ska jag visa bakgrunden utan sätt padding?
  background: ${(props) =>
    `linear-gradient(${props.direction}, ${props.firstColor}, ${props.secondColor})`};
`;

//Styling for the inner/smaller hexagon where the content is displayed
export const HexContentContainer = styled(Hexagon)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.bg ? props.bg : "white")};
  /* max-width: ${HexSizing.innerHexSize}; */
  /* max-height: ${HexSizing.innerHexSize}; */
  width: ${hexSize};
  height: ${hexSize};
  text-align: center;

  > h3 {
    font-size: 12px;
  }

  > b {
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
