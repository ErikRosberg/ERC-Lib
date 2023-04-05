import styled from "styled-components";

export const Container = styled.div``;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  min-height: 10rem;
  min-width: 15rem;
  padding: 1em;
  border-radius: 25px;
  background-color: whitesmoke;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
  border: 1px dashed black;

  label {
    font-size: 24px;
  }

  div {
    padding: 10px;
    flex: 1;
  }
`;
