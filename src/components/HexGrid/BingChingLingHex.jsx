import React from "react";
import styled from "styled-components";

// Define the hexagon component using styled-components
const Hexagon = styled.div`
  position: relative;
  width: 200px;
  height: 115px;
  background-color: #6c6;
  margin: 57.5px 0;

  // Add a border to the hexagon
  border: 5px solid black;

  // Use pseudo-elements to create the top and bottom triangles
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
  }

  &::before {
    top: -57.5px;
    border-bottom: 57.5px solid #6c6;
    border-bottom-color: inherit;
    border-bottom-width: calc(57.5px + 5px);
    border-left-width: calc(100px + 5px);
    border-right-width: calc(100px + 5px);
    margin-left: -5px;
  }

  &::after {
    bottom: -57.5px;
    border-top: 57.5px solid #6c6;
    border-top-color: inherit;
    border-top-width: calc(57.5px + 5px);
    border-left-width: calc(100px + 5px);
    border-right-width: calc(100px + 5px);
    margin-left: -5px;
  }
`;
// Define the button component using styled-components
const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 40%;
  background-color: white;
  border: none;
  font-size: large;

  // Add a hover effect to the button
  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;

// Define the container component using styled-components
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  // Center the container on the page
  justify-content: center;
  align-items: center;
  height: 100vh;

  // Rotate the container by 45 degrees
  transform: rotate(45deg);

  // Use pseudo-elements to create the square corners
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: calc(200px + (2 * (57.5px + (2 * (5px)))));
    height: calc(200px + (2 * (57.5px + (2 * (5px)))));
    background-color: transparent;
    border: none;
    box-shadow: inset -10px -10px black;
  }

  &::before {
    transform: rotate(-45deg);
  }

  &::after {
    transform: rotate(45deg);
  }
`;

// Define a React component that renders the hexagon and the button
const Hex = () => {
  return (
    // Return the JSX code for rendering the app
    <Container>
      <Hexagon>
        <Button>Button One</Button>
      </Hexagon>
      <Hexagon>
        <Button>Button Two</Button>
      </Hexagon>
      <Hexagon>
        <Button>Button Three</Button>
      </Hexagon>
      <Hexagon>
        <Button>Button Four</Button>
      </Hexagon>
    </Container>
  );
};

// Export the component
export default Hex;
