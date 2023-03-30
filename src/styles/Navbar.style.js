import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100vh;
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

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarInnerContainer = styled.div`
  width: 100vh;
  height: 80px;
  display: flex;
`;
export const NavbarExtendedContainer = styled.div``;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: 80px;
`;
