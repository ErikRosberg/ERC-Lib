import styled from "styled-components";

export const HexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border: 1px solid red;
  display: flex;
  border: 1px solid red;

  > span:nth-child(1) {
    position: absolute;
    background-color: red;
    top: calc(6em + ${(theme) => theme.theme.navBarHeight});
  }
  > span:nth-child(2) {
    position: absolute;
    right: 5em;
  }
  > span:nth-child(3) {
    position: absolute;
    bottom: 7em;
  }
  > span:nth-child(4) {
    position: absolute;
    right: 45em;
  }
`;

export const Hexagon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 380px;
  width: 440px;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
`;

export const HexagonContent = styled.span`
  color: white;
`;
