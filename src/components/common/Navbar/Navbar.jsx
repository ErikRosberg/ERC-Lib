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
import LogoImg from "../../../assets/Hexagon.svg";

function Navbar({ handleChangeTab, selectedTab }) {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        {/* <LeftContainer> */}
        <NavbarLinkContainer>
          <Logo src={LogoImg} alt="Sybra Logotype" />
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
          <OpenLinksButton
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
          </OpenLinksButton>
          Profile
        </NavbarLinkContainer>
        {/* </LeftContainer> */}

        {/* <RightContainer> */}
        {/* <Logo src={LogoImg}></Logo> */}
        {/* </RightContainer> */}
      </NavbarInnerContainer>

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
