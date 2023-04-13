import React from "react";
import { GridLayout } from "./Grid.style";

function Grid() {
  return (
    <GridLayout>
      <div className="top"> 1 </div>
      <div className="left"> 2 </div>
      <div className="right"> 3 </div>
      <div className="bottom"> 4 </div>
    </GridLayout>
  );
}

export default Grid;
