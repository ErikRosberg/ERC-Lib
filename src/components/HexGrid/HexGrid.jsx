import React from "react";
import { HexContainer, Hex, HexagonContent } from "./HexGrid.style";

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
        <Hex left={2} top={1} color="red">
          <HexagonContent> Hexagon 1</HexagonContent>
        </Hex>
        <Hex left={1} top={2} color="green">
          <HexagonContent> Hexagon 2</HexagonContent>
        </Hex>
        <Hex left={3} top={2} color="blue">
          <HexagonContent> Hexagon 3</HexagonContent>
        </Hex>
        <Hex left={2} top={3} color="yellow">
          <HexagonContent> Hexagon 4</HexagonContent>
        </Hex>
      </HexContainer>
    </div>
  );
}

export default HexGrid;
