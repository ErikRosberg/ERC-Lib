import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: grey;
  height: 100%;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    background-color: yellow;
  }
`;

export const ListContainer = styled.div`
  flex: 1;
`;

export const WelcomeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3.75em;
  font-family: Franklin Gothic Book;

  > h4 {
    font-size: 16px;
  }

  > span {
    margin: 0;
  }

  > span > h1 {
    font-size: 43px;
  }

  > p {
    font-size: 22px;
  }

  @media screen and (min-width: 1024px) {
    gap: 3.75em;

    > h4 {
      font-size: 16px;
    }

    > span {
      margin: 0;
    }

    > span > h1 {
      font-size: 43px;
    }

    > p {
      font-size: 22px;
    }
  }
`;

export const StatContainer = styled.div`
  flex: 1;

  @media screen and (min-width: 1024px) {
    background-color: yellow;
  }
`;
