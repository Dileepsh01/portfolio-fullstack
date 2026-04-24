import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁️

  const navigate = useNavigate()

  const handlechange = (e) => {
    const { name, value } = e.target;

    setFormdata({
      ...formdata,
      [name]: value
    });

    if (name === "confirmPassword") {
      if (formdata.password !== value) {
        setError("Passwords do not match");
      } else {
        setError("");
      }
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (formdata.password !== formdata.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: formdata.name,
          email: formdata.email,
          password: formdata.password
        }
      );
        console.log("API success"); // 👈 add this


      alert("Registered successfully");

      setFormdata({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

      setError("");

      navigate('/')

    } catch (error) {
      setError("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form className="space-y-4" onSubmit={handlesubmit}>
          
          <input
            type="text"
            name="name"
            value={formdata.name}
            onChange={handlechange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-md"
          />

          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handlechange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md"
          />

          {/* 🔐 Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formdata.password}
              onChange={handlechange}
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-md pr-16"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 cursor-pointer text-blue-500 text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          {/* 🔐 Confirm Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formdata.confirmPassword}
              onChange={handlechange}
              placeholder="Confirm password"
              className="w-full px-4 py-2 border rounded-md pr-16"
            />
         
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button className="w-full bg-blue-600 text-white py-2 rounded-md">
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-500">
            Login
          </NavLink>
        </p>

      </div>
    </div>
  );
};

export default Register;