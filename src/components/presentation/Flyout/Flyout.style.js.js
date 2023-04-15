import styled from "styled-components";

export const Card = styled.span`
  position: absolute;
  z-index: 1;
  min-width: 5rem;
  background-color: red;
  /* border: 1px solid grey; */
  top: 1rem;
  left: 1rem;
  padding: 0.2rem;
  font-size: 0.9rem;
  border-radius: 5px;

  &::before {
    content: "";
    position: absolute;
    width: 150%;
    height: 150%;
    top: -50%;
    left: -50%;
    z-index: -1;
    /* border: 1px solid green; */
  }
`;
