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
  /* gap: 10px; */
  width: 100%;
  height: 100%;
  border: 1px solid red;

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
  width: ${HexSizing.hexWidth};
  height: ${HexSizing.hexHeight};
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
`;

const Hex2 = styled(Hex)``;

export const HexBorder = styled.span`
  width: ${HexSizing.hexBackgroundWidth};
  height: ${HexSizing.hexBackgroundHeight};
  background-color: ${(props) => props.color};
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
`;

export const HexagonContent = styled.span`
  color: white;
`;
