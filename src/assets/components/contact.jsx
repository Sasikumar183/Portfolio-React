import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope ,FaGithub } from 'react-icons/fa';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    window.location.href = `mailto:sasikumar@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
  };

  return (
    <section className="w-full bg-gray-800 pt-12">
      <h2 className="text-3xl font-semibold text-center text-white mb-12">Contact</h2><hr className='w-[80%] border-[2px] rounded mx-auto mb-10'/>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start mb-12 md:mb-0">
          <p className="text-white text-xl mb-4 text-center md:text-left">
            Feel free to reach out for collaborations. You can also check out my resume below.
          </p>
          <button className="bg-white border-black p-3 mb-8 text-md rounded shadow-lg shadow-black hover:bg-gray-300 transition duration-300">
            <a href="https://drive.google.com/file/d/1WP9hw4hFON8Dghj0PEkTgLYA4ByB0vOv/view">Look at my resume</a>
          </button>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/sasikumar-n-04344024a/" data-aos="fade-right" data-aos-duration="2500" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-600 transition duration-300">
              <FaLinkedin />
            </a>
            <a href="mailto:sasikumar.n2021it@gmail.com" data-aos="fade-right" data-aos-duration="1500" className="text-white text-2xl hover:text-red-400 transition duration-300">
              <FaEnvelope />
            </a>
            
            <a href="https://github.com/Sasikumar183" data-aos="fade-right" data-aos-duration="1000" className="text-white text-2xl hover:text-black transition duration-300">
              <FaGithub />
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-duration="3000" className="w-full max-w-md bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg font-thin shadow-black transform transition-all duration-300 ">
          <div className="mb-4">
            <label className="block text-white text-md font-semibold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              required
            />
          <div className="mb-4">
            <label className="block text-white text-md font-semibold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              required
            />
          </div>
          </div>
          <div className="mb-4">
            <label className="block text-white text-md font-semibold mb-2" htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-md font-semibold mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button type="submit" className="bg-white px-4 py-2  shadow-xl shadow-black rounded font-semibold text-md hover:bg-gray-200 transition duration-300">Send Email</button>
          </div>
        </form>
      </div>
      <footer className="text-center text-white mt-12 bg-black p-5 text-xl">&copy; All rights are reserved 2024</footer>
    </section>
  );
};
