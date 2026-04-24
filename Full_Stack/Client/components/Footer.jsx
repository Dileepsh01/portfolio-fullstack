import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-6 mt-10">
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* 🔥 Brand */}
        <h2 className="text-xl font-semibold tracking-wide">
          Dileep.dev 🚀
        </h2>

        {/* 📄 Text */}
        <p className="text-gray-400 mt-2 text-sm">
          © 2026 All Rights Reserved | Built with ❤️ using React
        </p>

        {/* 🌐 Social Icons */}
        <div className="flex justify-center gap-6 mt-4 text-2xl">
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

        </div>

        {/* 🔻 Bottom Line */}
        <div className="mt-4 border-t border-gray-700 pt-3 text-xs text-gray-500">
          Designed & Developed by Dileep
        </div>
      </div>
    </footer>
  );
};

export default Footer;