import React, { useEffect, useContext } from "react";
import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Auth from "./pages/Auth";
import Bookings from "./pages/Bookings";
import Admin from "./pages/Admin";
import PrivateRoute from "./PrivateRoute";
import AuthContext from "./context/AuthContext";
import Dashboard from "./components/Dashboard/Dashboard";
import Booking from "./components/Dashboard/Bookings";
import Customers from "./components/Dashboard/Customers";
import Drivers from "./components/Dashboard/Drivers";
import Reviews from "./components/Dashboard/Reviews";
import Transactions from "./components/Dashboard/Transactions";
import Report from "./components/Dashboard/Report";


const App = () => {
  let { isAuthenticated, role } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="bookings" element={<Booking />} />
          <Route path="customers" element={<Customers />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="reports" element={<Report />} />
        </Route>
        <Route path="/user" element={<Bookings />} />

        <Route path="/" element={<Home />} />

        <Route
          path="/auth"
          element={
            isAuthenticated ? (
              role === "admin" ? (
                <Navigate to="/dashboard" />
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
