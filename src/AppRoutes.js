import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "Pages/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/team" element={<Home />}></Route>
    </Routes>
  );
}

export default AppRoutes;
