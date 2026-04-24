import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message Sent 🚀");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 py-10 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* 🔥 LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            Get In Touch 📩
          </h2>

          <p className="text-gray-600 mt-4">
            Feel free to contact me for any project or collaboration. 
            I’m always open to discussing new ideas.
          </p>

          <div className="mt-6 space-y-4 text-gray-700">

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              dileepshah0207@email.com
            </p>

            <p className="flex items-center gap-3">
              <FaPhone className="text-green-500" />
              +91 8818947345
            </p>

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              India
            </p>

          </div>
        </div>

        {/* 📄 FORM */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              required
            ></textarea>

            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition transform hover:scale-105">
              Send Message 🚀
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;