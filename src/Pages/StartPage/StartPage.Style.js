import styled from "styled-components";

//Container for whole page
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: grey;
  height: 100%;
  width: 100%;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    background-color: yellow;
  }
`;
//Container for WelcomeText
export const ListContainer = styled.div`
  flex: 2;
`;

export const WelcomeText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: Franklin Gothic Book;
`;

//Container for HexGrid
export const StatContainer = styled.div`
  flex: 3;
  border-top: 1px solid yellow;
  background-color: yellow;

  &::before {
    content: "";
  }

  @media screen and (min-width: 1024px) {
    background-color: none;
  }
`;
