import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const linkClass =
    "px-3 py-2 rounded-md text-sm font-medium transition";

  // 🔴 Logout Logic
  const handleLogout = () => {
    localStorage.removeItem("token"); // token remove
    navigate("/login"); // redirect
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* 🔥 Logo */}
        <h1 className="text-xl font-bold text-blue-600">
          Dileep.dev 🚀
        </h1>

        {/* 🔗 Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          
          <NavLink to="/" className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`
          }>
            Home
          </NavLink>

          <NavLink to="/projects" className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`
          }>
            Projects
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`
          }>
            Contact
          </NavLink>

          {/* 📄 Resume */}
          <a
            href="/resume.pdf"
            download
            className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Resume
          </a>

          {/* 🌐 Social Icons */}
          <div className="flex gap-4 text-xl text-gray-700">
            <a
              href="https://github.com/Dileepsh01"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/dileep-shah-184bb0267/?skipRedirect=true"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* 🔴 Logout Button */}
          <button
            onClick={handleLogout}
            className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* 📱 Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white">
          
          <NavLink to="/" className="block">Home</NavLink>
          <NavLink to="/projects" className="block">Projects</NavLink>
          <NavLink to="/contact" className="block">Contact</NavLink>

          <a href="/resume.pdf" download className="block text-green-500">
            Resume
          </a>

          <div className="flex gap-4 text-xl mt-2">
            <a href="https://github.com"><FaGithub /></a>
            <a href="https://linkedin.com"><FaLinkedin /></a>
          </div>

          {/* 🔴 Mobile Logout */}
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-2 rounded mt-2"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;