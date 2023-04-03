import React from "react";
import { HexContainer, HexBorder, HexagonContent } from "./HexGrid.style";

function HexGrid(className, Label) {
  return (
    <div
      style={{
        width: "50%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <HexContainer>
        <HexBorder
          left={2}
          top={1}
          direction="right"
          firstColor="white"
          secondColor="red"
        >
          <HexagonContent> Hexagon 1</HexagonContent>
        </HexBorder>
        <HexBorder left={1} top={2} color="green">
          <HexagonContent> Hexagon 2</HexagonContent>
        </HexBorder>
        <HexBorder left={3} top={2} color="blue">
          <HexagonContent> Hexagon 3</HexagonContent>
        </HexBorder>
        <HexBorder left={2} top={3} color="yellow">
          <HexagonContent> Hexagon 4</HexagonContent>
        </HexBorder>
      </HexContainer>
    </div>
  );
}

export default HexGrid;
