import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formdata, setFormdata] = useState({
    email: "",
    password: ""
  });
  const[remember, setRemember] = useState(false)
const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formdata
      );

      console.log(res.data);

  // ✅ remember me logic
    if (remember) {
      localStorage.setItem("token", res.data.token);
    } else {
      sessionStorage.setItem("token", res.data.token);
    }

      alert("Login successful");

      // ✅ reset form
      setFormdata({
        email: "",
        password: ""
      });
      navigate("/");

    } catch (error) {
      console.log("error", error.response?.data || error.message);
      alert("Login failed");
    }
  };




  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>

        <form className="space-y-4" onSubmit={handlesubmit}>
          
          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handlechange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formdata.password}
              onChange={handlechange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked= {remember} onChange={(e)=>setRemember(e.target.checked)} />
              Remember me
            </label>

            <span className="text-blue-500 cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>

        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className="text-blue-500 hover:underline font-medium"
          >
            Register
          </NavLink>
        </p>

      </div>
    </div>
  );
};

export default Login;