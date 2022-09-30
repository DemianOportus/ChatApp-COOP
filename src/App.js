import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/events" element={<Events />} /> */}
        </Routes>
      </Router>
    </>
  );
}
