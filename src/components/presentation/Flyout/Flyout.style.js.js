import styled from "styled-components";

export const container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .modal-window {
    position: fixed;
    background-color: rgba(255, 255, 255, 0.25);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    &:target {
      visibility: visible;
      opacity: 1;
      pointer-events: auto;
    }
    & > div {
      width: 400px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 2em;
      background: white;
      border-radius: 1rem;
    }
    header {
      font-weight: bold;
    }
    h1 {
      font-size: 150%;
      margin: 0 0 15px;
    }
  }

  .modalClose {
    color: #aaa;
    line-height: 50px;
    font-size: 80%;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    width: 70px;
    text-decoration: none;
    &:hover {
      color: black;
    }
  }

  #open-modal {
  }
`;

export const card = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  min-width: 5rem;
  background-color: whitesmoke;
  border: 1px solid grey;
  top: 1rem;
  left: 1rem;
  padding: 0.2rem;
  font-size: 0.9rem;
  border-radius: 5px;

  &::before {
    content: "";
    position: absolute;
    width: 150%;
    height: 150%;
    top: -50%;
    left: -50%;
    z-index: -1;
    /* border: 1px solid green; */
  }
`;

export const content = styled.div``;
