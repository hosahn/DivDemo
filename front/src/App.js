import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main.js";
import AnalysisPage from "./pages/analysis.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/analysis" exact element={<AnalysisPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
