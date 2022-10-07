import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import Success from "./pages/Success";
import ProtectedRoutes from "./components/ProtectedRoutes";
import DataPrivacy from "./pages/DataPrivacy";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/success" element={<Success />} />
          </Route>

          <Route path="/dataprivacy" element={<DataPrivacy />} />
          {/* <Route path="/events" element={<Events />} /> */}
        </Routes>
      </Router>
    </>
  );
}
