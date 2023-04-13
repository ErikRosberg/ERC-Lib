import styled from "styled-components";

export const GridLayout = styled.div`
  display: grid;
  grid-template-areas: "top" "left right" "bottom"; 
   /* "top top"-
  "left right"
  "bottom bottom"; */
  
  .top {
    grid-area: top;
  }
  .left {
    grid-area: left;
  }
  .right {
    grid-area: right;
  }
  .bottom {
    grid-area: bottom;
  }
`;



import styled from 'styled-components';

const GridLayout = styled.div`
  display: grid;
  grid-template-areas: 
    "top"
    "left right"
    "bottom";
`;

const Top = styled.div`
  grid-area: top;
`;

const Left = styled.div`
  grid-area: left;
`;

const Right = styled.div`
  grid-area: right;
`;

const Bottom = styled.div`
  grid-area: bottom;
`;

// Use the className prop to pass a custom class name
<GridLayout className="grid-layout">
  <Top className="top">1</Top>
  <Left className="left">2</Left>
  <Right className="right">3</Right>
  <Bottom className="bottom">4</Bottom>
</GridLayout>
This will render a grid layout with four divs, each with a class name that matches its grid area. You can use these class names to style the components further with CSS or other styled components.

Alternatively, you can use the css helper function from styled-components to inject CSS classes into your styled components. For example:

import styled, { css } from 'styled-components';

const GridLayout = styled.div`
  display: grid;
  grid-template-areas: 
    "top"
    "left right"
    "bottom";

  ${props => props.className && css`
    // Use props.className to access the custom class name
    .${props.className}-top {
      background-color: palevioletred;
    }

    .${props.className}-left {
      background-color: palegreen;
    }

    .${props.className}-right {
      background-color: paleturquoise;
    }

    .${props.className}-bottom {
      background-color: palegoldenrod;
    }
  `}
`;

const Top = styled.div`
  grid-area: top;
`;

const Left = styled.div`
  grid-area: left;
`;

const Right = styled.div`
  grid-area: right;
`;

const Bottom = styled.div`
  grid-area: bottom;
`;

// Use the className prop to pass a custom class name
<GridLayout className="grid-layout">
  // Append the custom class name to each component's class name
  <Top className="grid-layout-top">1</Top>
  <Left className="grid-layout-left">2</Left>
  <Right className="grid-layout-right">3</Right>
  <Bottom className="grid-layout-bottom">4</Bottom>
</GridLayout>