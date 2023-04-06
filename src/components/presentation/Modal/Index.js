import React, { useState } from "react";
import Modal from "./Modal";

function Index() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Text inside here is children
        </Modal>
      </div>
      <div style={OTHER_CONTENT_STYLES}></div>
    </div>
  );
}

export default Modal;
