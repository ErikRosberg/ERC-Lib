import styled from "styled-components";

export const NavbarContainer = styled.nav`
  /* width: 100vh; */
  height: 80px;
  background-color: lightcoral;
  display: flex;
  flex-direction: column;
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: auto;
`;
export const NavbarExtendedContainer = styled.div``;
