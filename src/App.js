import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import HexGrid from "./components/HexGrid/HexGrid";
import ModalPopup from "./components/presentation/ModalPopup/ModalPopup";

import styled from "styled-components";

const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh; */
`;

function App() {
  return (
    <Container>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element="" />
          <Route path="products" element="" />
          <Route path="contact" element="" />
          <Route path="about" element="" />
        </Routes>
      </Router>
      {/* <HexGrid /> */}
      {/* <ModalPopup /> */}
    </Container>
  );
}

export default App;
