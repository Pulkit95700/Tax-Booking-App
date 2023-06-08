import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axiosInstance from "../config/axiosInstance";
import Sidebar from "../components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="Admin flex">
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
