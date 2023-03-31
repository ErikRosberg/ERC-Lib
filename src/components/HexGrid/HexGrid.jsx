import React from "react";
import { HexContainer, Hexagon, HexagonContent } from "./HexGrid.style";

function HexGrid() {
  return (
    <HexContainer>
      <Hexagon>
        <HexagonContent> Hexagon 1</HexagonContent>{" "}
      </Hexagon>
    </HexContainer>
  );
}

export default HexGrid;
