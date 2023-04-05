import React from "react";
import { Container, ModalContent } from "./ModalPopup.style";

function ModalPopup(className, Label) {
  return (
    <Container>
      <button>ModalPopup</button>
      <ModalContent>
        <label> ${(props) => (props.label ? props.label : "Pop up")}</label>
        <div> Data to show </div>
        <h2> General List </h2>
        <ul>
          <li>
            <span>
              Missed amount and in wich ControlPlan
              <a> antal kontroller kvar med hover för att se vilka </a>
            </span>
          </li>
        </ul>
      </ModalContent>
    </Container>
  );
}

export default ModalPopup;
