import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import Success from "./pages/Success";
import ProtectedRoutes from "./components/ProtectedRoutes";
import DataPrivacy from "./pages/DataPrivacy";
import AboutUs from "./pages/AboutUs";
import JoinAsAPatient from "./pages/JoinAsAPatient";
import JoinAsADoctor from "./pages/JoinAsADoctor";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/success" element={<Success />} />
        </Route>
        <Route path="/data-privacy" element={<DataPrivacy />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/join-as-a-patient" element={<JoinAsAPatient />} />
        <Route path="/join-as-a-doctor" element={<JoinAsADoctor />} />
      </Routes>
    </>
  );
}
