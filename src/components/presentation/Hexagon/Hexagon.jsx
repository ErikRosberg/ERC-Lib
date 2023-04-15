import React from "react";
import { HexBorder, HexContentContainer, Dot } from "./Hexagon.style";
import Flyout from "../Flyout/Flyout";

function Hexagon({
  className,
  label,
  amount,
  firstColor,
  secondColor,
  gradientDirection,
  dotColor,
  column,
  row,
}) {
  return (
    <>
      <HexBorder
        firstColor={firstColor || "red"}
        secondColor={secondColor || "yellow"}
        direction={gradientDirection || "to left"}
        column={column}
        row={row}
      >
        {/* <Flyout> */}
        <HexContentContainer>
          <Dot color={dotColor || firstColor} />
          <h3>Antal {label || "label"} Kontrollpunkter </h3>
          <b> {amount || "100"}</b>
        </HexContentContainer>
        {/* </Flyout> */}
      </HexBorder>
    </>
  );
}

export default Hexagon;
