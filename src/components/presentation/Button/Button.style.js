import styled from "styled-components";
import Button from "./Button";

export const StyledButton = styled(Button)`
  width: ${(props) => (props.w ? props.w : "200px")};
  height: ${(props) => (props.h ? props.h : "50px")};
  background-color: ${(props) => (props.bg ? props.bg : "red")};
  border-radius: 25px;

  :hover {
    background-color: blue;

    label {
      color: green;
    }
  }
`;

export const ButtonLabel = styled.label`
  font-size: 20px;
  color: white;
`;
