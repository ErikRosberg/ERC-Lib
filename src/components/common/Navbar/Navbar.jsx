import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./Navbar.style";
import LogoImg from "../../../assets/logo.png";

// This is a functional component for the navbar
function Navbar({ handleChangeTab, selectedTab }) {
  // This is a state variable for extending the navbar
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={LogoImg} alt="Sybra Logotype" />
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            {/* These are the navbar links that change the selected tab */}
            <NavbarLink
              to="/products"
              style={
                selectedTab === "start"
                  ? {
                      fontWeight: "bold",
                      backgroundColor: "#FCE13B",
                    }
                  : {}
              }
              onClick={() => handleChangeTab("start")}
            >
              Start
            </NavbarLink>
            <NavbarLink
              to="/contact"
              style={
                selectedTab === "profile"
                  ? {
                      fontWeight: "bold",
                      backgroundColor: "#F7A70E",
                    }
                  : {}
              }
              onClick={() => handleChangeTab("profile")}
            >
              Företag
            </NavbarLink>
            <NavbarLink
              to="/about"
              style={
                selectedTab === "statistics"
                  ? {
                      fontWeight: "bold",
                      backgroundColor: "#D01A34",
                    }
                  : {}
              }
              onClick={() => handleChangeTab("statistics")}
            >
              Statistik
            </NavbarLink>

            {/* This is a button that toggles the extendNavbar state */}
          </NavbarLinkContainer>
          <OpenLinksButton
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
          </OpenLinksButton>
        </RightContainer>
      </NavbarInnerContainer>
      {/* This is a conditional rendering of the extended navbar */}
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/products"> Products</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"> Contact Us</NavbarLinkExtended>
          <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
