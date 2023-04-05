import { ThemeProvider, createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`

body {  
  font-family: ${(theme) => theme.theme.font};
  color: ${(theme) => theme.theme.colorBlack};
}

`;

const SybraColors = {
  // Hexagon Gradients
  SybraRed: "#D01A34",
  sybraYellow: "#ffcc00",
  sybraDarkYellow: "#f7a600",
  sybraOrange: "#f16b2f",
  sybraDarkGreen: "#669933",
  sybraLightGreen: "#8dc63f",

  // Controlplan Dots
  SybraRed: "#D01A34",
  sybraYellow: "#ffcc00",
  sybraDarkYellow: "#f7a600",
  sybraOrange: "#f16b2f",
  sybraDarkGreen: "#669933",
  sybraLightGreen: "#8dc63f",

  //Marie Ek's colors
  SybraYellow: "#FFDD0D80",
  SybraOrange: "#F7A70E",
  SybraRed: "#D01A34",
  SybraGrey: "#CDCCCC",
  SybraLightGreen: "#A9CC65",
  SybraDarkBlue: "#024872",
};
