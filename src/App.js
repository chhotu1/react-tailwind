import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Route, Routes } from "react-router-dom";

import SideBar from "./Components/SideBar"
import Dashboard from "./Pages/Dashboard";
export default function App() {
  return (
    <React.Fragment>
      <Router>
        <SideBar />
        <Routes>
          <Route exact={true} path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}