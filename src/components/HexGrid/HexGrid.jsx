import React from "react";
import {
  HexGridContainer,
  HexBorder,
  HexContentContainer,
  Dot,
} from "./HexGrid.style";
import Flyout from "../presentation/Flyout/Flyout";

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
      <HexGridContainer>
        <HexBorder
          top={1}
          left={2}
          firstColor="red"
          secondColor="yellow"
          direction="to left"
        >
          <Flyout>
            <HexContentContainer>
              <Dot color="blue" />
              <h3>
                Antal Kontrollpunkter <b>100</b>
              </h3>
            </HexContentContainer>
          </Flyout>
        </HexBorder>
        <HexBorder
          top={2}
          left={1}
          firstColor="white"
          secondColor="red"
          direction="to left"
        >
          <HexContentContainer>
            <Dot color="red" />
            <Flyout>
              <h3>
                Antal Kontrollpunkter <b>100</b>
              </h3>
            </Flyout>
          </HexContentContainer>
        </HexBorder>
        <HexBorder
          top={2}
          left={3}
          firstColor="white"
          secondColor="red"
          direction="to left"
        >
          <HexContentContainer>
            <Dot color="yellow" />
            <h3>
              Antal Kontrollpunkter <b>100</b>
            </h3>
          </HexContentContainer>
        </HexBorder>
        <HexBorder
          top={3}
          left={2}
          firstColor="white"
          secondColor="red"
          direction="to left"
        >
          <HexContentContainer>
            <Dot color="green" />
            <h3>
              Antal Kontrollpunkter <b>100</b>
            </h3>
          </HexContentContainer>
        </HexBorder>
      </HexGridContainer>
    </div>
  );
}

export default HexGrid;
