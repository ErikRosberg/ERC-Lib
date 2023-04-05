import React from "react";
import styled from "styled-components";
import { ReactDOM } from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50% -50%)",
  backgroundColor: "white",
  padding: "2em",
  zIndex: 1000,
};

const OVERLAY_STYLE = {
  position: "fixed",
  top: "0",
  left: "0",
  rigth: "0",
  bottom: "0",
  transform: "translate(-50% -50%)",
  backgroundColor: "black70%",
  padding: "2em",
  zIndex: 1000,
};

function Modal(open, children, onClose) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLE} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
