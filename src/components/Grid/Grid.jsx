import React from "react";
import styled from "styled-components";
import Hexagon from "../presentation/Hexagon/Hexagon";
// import { GridLayout } from "./Grid.style";

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-rows: repeat(auto-fit, 3, 1fr);
  height: fit-content;
  width: fit-content;
  overflow: hidden;
  background-color: #2196f3;
  /* grid-row-gap: 0;
  grid-column-gap: 0; */
  /* justify-content: center; */

  /* padding: 2rem; */
  border: 1px solid red;

  @media only screen and (max-width: 515px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }
`;

function Grid() {
  return (
    <GridLayout>
      <Hexagon
        label="kontrollerade"
        amount="10"
        firstColor="blue"
        secondColor="green"
        column="2"
        row="1"
      />
      <Hexagon
        label="misslyckade"
        amount="10"
        firstColor="red"
        secondColor="green"
        column="1"
        row="2"
      />
      <Hexagon
        label="gjorda"
        amount="10"
        firstColor="yellow"
        secondColor="green"
        column="3"
        row="2"
      />
      <Hexagon
        label="uppföljning"
        amount="10"
        firstColor="purple"
        secondColor="green"
        column="2"
        row="3"
      />
    </GridLayout>
  );
}

export default Grid;
