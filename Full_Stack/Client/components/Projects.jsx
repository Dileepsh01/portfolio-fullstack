import React from "react";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-blue-50 to-gray-100 py-10">

      {/* 🔥 Heading */}
      <h2 className="text-4xl font-bold text-center text-gray-800">
        My Projects 🚀
      </h2>

      <p className="text-center text-gray-600 mt-2">
        Here are some of my best works
      </p>

      {/* 📦 Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-10 px-6 max-w-7xl mx-auto">

        {/* 🔹 Project 1 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <h3 className="text-xl font-bold text-blue-600">
            User Management System
          </h3>

          <p className="text-gray-600 mt-2 text-sm">
            A full stack CRUD application where users can be added, updated,
            deleted and searched. Includes authentication and protected routes.
          </p>

          <p className="text-xs text-gray-500 mt-3">
            Tech: React, Node.js, Express, MongoDB
          </p>

          <div className="flex gap-3 mt-4">
            <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
              Live
            </button>
            <button className="px-4 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white">
              Code
            </button>
          </div>
        </div>

        {/* 🔹 Project 2 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <h3 className="text-xl font-bold text-blue-600">
            Portfolio Website
          </h3>

          <p className="text-gray-600 mt-2 text-sm">
            Personal portfolio website showcasing my skills, projects and contact
            details with responsive UI and modern design.
          </p>

          <p className="text-xs text-gray-500 mt-3">
            Tech: React, Tailwind CSS
          </p>

          <div className="flex gap-3 mt-4">
            <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
              Live
            </button>
            <button className="px-4 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white">
              Code
            </button>
          </div>
        </div>

        {/* 🔹 Project 3 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <h3 className="text-xl font-bold text-blue-600">
            E-commerce Website
          </h3>

          <p className="text-gray-600 mt-2 text-sm">
            Full stack e-commerce platform with product listing, cart system,
            authentication and order management features.
          </p>

          <p className="text-xs text-gray-500 mt-3">
            Tech: React, Node.js, MongoDB
          </p>

          <div className="flex gap-3 mt-4">
            <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
              Live
            </button>
            <button className="px-4 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white">
              Code
            </button>
          </div>
        </div>

        {/* 🔹 Project 4 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <h3 className="text-xl font-bold text-blue-600">
            Weather App
          </h3>

          <p className="text-gray-600 mt-2 text-sm">
            Weather application that fetches real-time data using API and shows
            temperature, humidity and conditions of any city.
          </p>

          <p className="text-xs text-gray-500 mt-3">
            Tech: React, Axios, API
          </p>

          <div className="flex gap-3 mt-4">
            <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
              Live
            </button>
            <button className="px-4 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white">
              Code
            </button>
          </div>
        </div>

        {/* 🔹 Project 5 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <h3 className="text-xl font-bold text-blue-600">
            Todo App
          </h3>

          <p className="text-gray-600 mt-2 text-sm">
            Task management app with add, edit, delete and complete features
            built using React hooks.
          </p>

          <p className="text-xs text-gray-500 mt-3">
            Tech: React, Tailwind
          </p>

          <div className="flex gap-3 mt-4">
            <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
              Live
            </button>
            <button className="px-4 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white">
              Code
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;