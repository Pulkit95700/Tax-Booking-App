import React, { useEffect, useContext } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Auth from "./pages/Auth";
import Bookings from "./pages/Bookings";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AuthContext from "./context/AuthContext";

const App = () => {
  let { isAuthenticated, role } = useContext(AuthContext);
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/user" element={<Bookings />} />

        <Route path="/" element={<Home />} />

        <Route
          path="/auth"
          element={
            isAuthenticated ? (
              role === "admin" ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="/user" />
              )
            ) : (
              <Auth />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
