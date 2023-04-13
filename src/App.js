import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import StartPage from "./Pages/StartPage/StartPage";
import styled from "styled-components";
import Hexagon from "./components/presentation/Hexagon/Hexagon";

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element="" />
          <Route path="products" element="" />
          <Route path="contact" element="" />
          <Route path="about" element="" />
        </Routes>
      </Router>
      <StartPage /> */}
      {/* <Hexagon Label="red" amount="100" firstColor="red" secondColor="yellow" /> */}
      <Hexagon />
    </Container>
  );
}

export default App;
