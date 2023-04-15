import React from "react";
import { Body, BigDiamond, Diamond, DiamondLink } from "./Grid.Style";
// import Hexagon from "../presentation/Hexagon/Hexagon";

function Grid() {
  return (
    <div>
      <BigDiamond>
        <Diamond>
          <DiamondLink> Text</DiamondLink>
        </Diamond>
        <Diamond>
          <DiamondLink></DiamondLink>
        </Diamond>
        <Diamond>
          <DiamondLink></DiamondLink>
        </Diamond>
        <Diamond>
          <DiamondLink></DiamondLink>
        </Diamond>
      </BigDiamond>
    </div>
  );
}

export default Grid;
