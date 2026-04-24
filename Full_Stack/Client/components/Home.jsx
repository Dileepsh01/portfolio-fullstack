import React from "react";

const Home = () => {
  return (
    <div className="px-6">

      {/* 🔥 HERO SECTION */}
      <div className="text-center mt-16">
        <h1 className="text-5xl font-bold text-gray-800">
          Hi, I'm <span className="text-blue-600">Dileep 👋</span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Full Stack Developer (React + Node.js) passionate about building
          modern, responsive and user-friendly web applications.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/projects"
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="px-6 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* 💡 ABOUT SECTION */}
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">About Me</h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          I am a Computer Science Engineering student with strong interest in 
          web development. I have experience in building full stack applications 
          using React, Node.js, and modern tools. I love solving real-world 
          problems and continuously improving my skills.
        </p>
      </div>

      {/* ⚡ SKILLS SECTION */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          My Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
          
          <div className="p-6 shadow rounded bg-white hover:shadow-lg transition">
            <h3 className="font-bold text-lg">Frontend</h3>
            <p className="text-gray-600 mt-2">
              React, JavaScript, Tailwind CSS, HTML, CSS
            </p>
          </div>

          <div className="p-6 shadow rounded bg-white hover:shadow-lg transition">
            <h3 className="font-bold text-lg">Backend</h3>
            <p className="text-gray-600 mt-2">
              Node.js, Express.js, MongoDB, MySQL REST APIs
            </p>
          </div>

          <div className="p-6 shadow rounded bg-white hover:shadow-lg transition">
            <h3 className="font-bold text-lg">Tools</h3>
            <p className="text-gray-600 mt-2">
              Git, GitHub, VS Code, Postman
            </p>
          </div>

        </div>
      </div>

      {/* 🚀 PROJECT HIGHLIGHT */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Featured Projects
        </h2>

        <p className="text-gray-600 mt-2">
          Some of my recent work
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
          
          <div className="p-5 shadow rounded bg-white hover:shadow-xl transition">
            <h3 className="font-bold">Todo App</h3>
            <p className="text-sm text-gray-500">React + Tailwind</p>
          </div>

          <div className="p-5 shadow rounded bg-white hover:shadow-xl transition">
            <h3 className="font-bold">Weather App</h3>
            <p className="text-sm text-gray-500">API + Axios</p>
          </div>

          <div className="p-5 shadow rounded bg-white hover:shadow-xl transition">
            <h3 className="font-bold">User Management</h3>
            <p className="text-sm text-gray-500">Full Stack CRUD</p>
          </div>

        </div>
      </div>

      {/* 📞 CTA */}
      <div className="mt-20 text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          Let's Work Together 🤝
        </h2>

        <p className="text-gray-600 mt-3">
          Have a project in mind? Feel free to reach out!
        </p>

        <a
          href="/contact"
          className="inline-block mt-5 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Hire Me
        </a>
      </div>

    </div>
  );
};

export default Home;