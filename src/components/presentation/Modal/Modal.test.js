import React from "react";
import { useState } from "react";
import styled from "styled-components";

function ModalStatus() {
  const [isPop1Open, setIsPop1Open] = useState(false);

  const hideNPo1Modal = () => {
    setIsPop2Open(false);
  };
}
return (
  <div>
    <span onClick={() => setIsPop1Open(!isPop1Open)}> click to open </span>
    <Modal show={isPop1Open} handleClose={hideNPo1Modal}>
      <h1>Modal 1</h1>
      <ul>
        <label>ctrl plans</label>
        <li>wrong 1</li>
      </ul>
    </Modal>
  </div>
);

const ModalDiv = styled.div`
  display: ${(p) => p.block && p.block};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: red;
`;

const contentDiv = styled.div`
  position: fixed;
  background-color: white;
  width: 50%;
  left: 50%;
  border-radius: 1em;
  padding: 2em;
  transform: translate(-50%, -50%);
`;

export const Modal = ({ handleClose, show, children }) => {
  return (
    <ModalDiv block={show ? "block" : "none"}>
      <contentDiv>
        {children}
        <button onClick={handleClose}> Close </button>
      </contentDiv>
    </ModalDiv>
  );
};

// export default Modal
