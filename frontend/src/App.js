import "./App.scss";

import React from "react";
import Start from "./pages/Start/Start";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Thesaurus from "./pages/Thesaurus/Thesaurus";
import Courses from "./pages/Courses/Courses";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Thesaurus" element={<Thesaurus />} />
          <Route path="/Courses" element={<Courses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
