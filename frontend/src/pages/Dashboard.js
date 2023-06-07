import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axiosInstance from "../config/axiosInstance";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosInstance.get("/user/");
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <h1>Dashboard</h1>
      {data.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </Layout>
  );
};

export default Dashboard;
