import styled from "styled-components";

const HexSizing = {
  hexWidth: "380px",
  hexHeight: "440px",
  hexBackgroundWidth: `calc(${HexSizing.hexWidth} + 1rem)`,
  hexBackgroundHeight: `calc(${HexSizing.hexHeight} + 1rem)`,
};

export const HexContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 0;
  grid-column-gap: 0;
  width: 100%;
  height: 100%;
  border: 1px solid red;

  @media screen {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export const HexBorder = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${HexSizing.hexBackgroundWidth};
  height: ${HexSizing.hexBackgroundHeight};
  grid-column-start: ${(props) => props.left};
  grid-row-start: ${(props) => props.top};
  background-color: ${(props) => `linear-gradient(${props.direction}, ${props.firstColor}, ${props.secondColor})`};
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
`;

export const HexContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.bg ? props.bg : "white")};
  width: ${HexSizing.hexWidth};
  height: ${HexSizing.hexHeight};
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);

  > p {
    color: white;
  }
`;

const Hex2 = styled(Hex)``;
