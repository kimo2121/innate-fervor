import React from "react";
import "./App.css";

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
