import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element="#" />
          <Route path="products" element="#" />
          <Route path="contact" element="#" />
          <Route path="about" element="#" />
        </Routes>
      </Router>
  );
}

export default App;
