import React from "react";
import { Body, BigDiamond, Diamond, DiamondLink } from "./Grid.Style";

function Grid() {
  return (
    <Body>
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
    </Body>
  );
}

export default Grid;
