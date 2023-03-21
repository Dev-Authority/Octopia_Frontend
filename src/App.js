import React from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marketplace from "./Pages/Marketplace";
import EnrollMarket from "./Pages/EnrollMarket";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/marketplace"
          element={
            <Marketplace />
          }
        />
        <Route
          path="/enroll"
          element={
            <EnrollMarket/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
