import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* 🔝 Navbar */}
      <Navbar />


      {/* 📦 Dynamic Page Content */}
      <div className="flex-grow p-6">
        <Outlet />
      </div>

      {/* 🦶 Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;