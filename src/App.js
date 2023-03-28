import React, { Suspense } from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marketplace from "./Pages/Marketplace";
import EnrollMarket from "./Pages/EnrollMarket";
import Login from "./Pages/Login";

function App() {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>

        <Routes>
          <Route
            path="/"
            element={
              <Login />
            }
          />
          <Route
            path="/home"
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
              <EnrollMarket />
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
