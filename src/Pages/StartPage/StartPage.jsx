import React from "react";
import HexGrid from "../../components/HexGrid/HexGrid";
import {
  Container,
  Content,
  ListContainer,
  WelcomeText,
  StatContainer,
} from "./StartPage.Style";

function StartPage() {
  return (
    <Container>
      <ListContainer>
        <WelcomeText>
          <h4> Sybra</h4>
          <span>
            <h1> Välkommen </h1>
            <h1> {"Erik Rosberg"} </h1>
          </span>
          <p>Systematiskt brandskyddsarbete samlad på ett och samma ställe</p>
        </WelcomeText>
      </ListContainer>
      <StatContainer>
        <HexGrid />
      </StatContainer>
    </Container>
  );
}

export default StartPage;
