import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  // This prop controls the height of the navbar depending on whether it is extended or not
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: LightGrey;
  display: flex;
  flex-direction: column;
  text-align: center;

  // This media query applies when the screen width is at least 700px
  @media (min-width: 700px) {
    height: 80px;
    flex-direction: row; // Change the flex direction to row/*  */
    justify-content: space-between; // Align the items to the sides
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center; // Align the items to the left along the cross axis

  // This media query applies when the screen width is at least 700px
  @media (min-width: 700px) {
    justify-content: space-between; // Align the items to the sides
    align-items: flex-end; // Align the items to the right along the cross axis
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  // This media query applies when the screen width is at least 700px
  @media (min-width: 700px) {
    display: none; // Hide the extended navbar links on large screens
  }
`;

export const Logo = styled.img`
  margin: 10px;
  // Use min() to set the maximum width of the logo to 180px or 10% of the screen width, whichever is smaller
  max-width: min(180px, 10%);
  height: auto;

  // This media query applies when the screen width is at least 700px
  @media (min-width: 700px) {
    // Use max() to set the minimum width of the logo to 120px or 5% of the screen width, whichever is larger
    min-width: max(120px, 5%); // Reduce the logo size on large screens
  }
`;

// This is a styled component for the button that opens or closes the extended navbar
export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  // This media query applies when the screen width is at least 700px
  @media (min-width: 700px) {
    display: none; // Hide the button on large screens
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  // This media query applies when the screen width is at least 700px
  @media (min-width: 700px) {
    display: none; // Hide the extended navbar container on large screens
  }
`;
