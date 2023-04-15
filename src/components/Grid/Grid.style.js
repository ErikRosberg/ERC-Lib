import styled from "styled-components";

export const GridLayout = styled.div`
  display: grid;
  grid-template-areas: "top" "left right" "bottom";
  width: 50vw;
  height: 50vh;
  background-color: blue;

  .top {
    height: 100px;
    width: 100px;
    border: 1px solid red;
    grid-area: top;
  }
  .left {
    height: 100px;
    width: 100px;
    border: 1px solid red;
    grid-area: left;
  }
  .right {
    height: 100px;
    width: 100px;
    border: 1px solid red;
    grid-area: right;
  }
  .bottom {
    height: 100px;
    width: 100px;
    border: 1px solid red;
    grid-area: bottom;
  }
`;
