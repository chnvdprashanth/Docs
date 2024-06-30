import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import EditNotes from "./container/EditNotes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/edit/:noteId" element={<EditNotes />} />
      </Routes>
    </Router>
  );
};

export default App;
