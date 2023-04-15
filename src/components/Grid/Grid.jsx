import React from "react";
import styled from "styled-components";
import Hexagon from "../presentation/Hexagon/Hexagon";
// import { GridLayout } from "./Grid.style";

const GridLayout = styled.div`
  display: grid;
  grid-template-areas: "top top top" "left mid right" "bottom bottom bottom";
  grid-template-columns: repeat (200px);
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  background-color: blue;

  > div {
  }

  .top {
    height: 100%;
    width: 100%;
    border: 1px solid red;
    grid-area: top;
  }
  .left {
    height: 100%;
    width: 20rem;
    border: 1px solid red;
    grid-area: left;
  }
  .right {
    height: 100%;
    width: 20rem;
    border: 1px solid red;
    grid-area: right;
  }
  .bottom {
    height: 100%;
    width: 100%;
    border: 1px solid red;
    grid-area: bottom;
  }
`;

function Grid() {
  return (
    <GridLayout>
      <div className="top">
        <Hexagon />
      </div>
      <div className="left">
        <Hexagon />
      </div>
      <div className="right">
        <Hexagon />
      </div>
      <div className="bottom">
        <Hexagon />
      </div>
    </GridLayout>
  );
}

export default Grid;
