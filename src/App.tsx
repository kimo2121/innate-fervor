import React from "react";
import "./App.css";
// import CustomizedAccordions from "./components/FAQ/FAQ";
// import Features from "./components/Features/Features";
// import Footer from "./components/Footer/Footer";
// import LizardMen from "./components/LizardMen/LizardMen";
// import Navbar from "./components/Navbar/Navbar";
// import Roadmap from "./components/Roadmap/Roadmap";
// import Team from "./components/Team/Team";
// import Tokenomics from "./components/Tokenomics/Tokenomics";
// import Welcome from "./components/Welcome/Welcome";

import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Market from "./Pages/Market/Market";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </div>
  );
}

export default App;
