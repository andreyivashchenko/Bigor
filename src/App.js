import "./App.scss";
import React from "react";
import Start from "./pages/Start/Start";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Thesaurus from "./pages/Thesaurus/Thesaurus";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Thesaurus" element={<Thesaurus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
