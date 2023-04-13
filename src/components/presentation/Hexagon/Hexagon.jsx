import React from "react";
import { HexBorder, HexContentContainer, Dot } from "./Hexagon.style";
import Flyout from "../Flyout/Flyout";

function Hexagon(
  className,
  { Label, amount, firstColor, secondColor, gradientDirection }
) {
  return (
    <>
      {/* <Flyout> */}
      <HexBorder
        firstColor={firstColor || "red"}
        secondColor={secondColor || "yellow"}
        direction={gradientDirection || "to left"}
      >
        <HexContentContainer>
          <Dot color={firstColor} />
          <h3>Antal {Label || "error"} Kontrollpunkter</h3>
          <b> {amount || "100"}</b>
        </HexContentContainer>
      </HexBorder>
      {/* </Flyout> */}
    </>
  );
}

export default Hexagon;
