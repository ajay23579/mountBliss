import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className='min-h-screen font-[Montserrat] relative overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-900 flex items-center justify-center px-4 py-12'>
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md">
        {/* Logo */}
        <div className='mb-6'>
          <img src={logo} alt="Logo" className='h-20 w-auto mx-auto' />
        </div>

        {/* Animated Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#23272F] rounded-[24px] shadow-[0_4px_32px_rgba(0,0,0,0.7)] p-10 w-full flex flex-col text-white"
        >
          <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 font-medium">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="bg-[#2C2F36] border-[1.5px] border-[#3BA3A3] rounded-xl py-3 px-4 placeholder:text-[#B0B3B8] text-white outline-none focus:ring-2 focus:ring-[#3BA3A3]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="bg-[#2C2F36] border-[1.5px] border-[#3BA3A3] rounded-xl py-3 px-4 placeholder:text-[#B0B3B8] text-white outline-none focus:ring-2 focus:ring-[#3BA3A3]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject" className="mb-1 font-medium">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="bg-[#2C2F36] border-[1.5px] border-[#3BA3A3] rounded-xl py-3 px-4 placeholder:text-[#B0B3B8] text-white outline-none focus:ring-2 focus:ring-[#3BA3A3]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                className="bg-[#2C2F36] border-[1.5px] border-[#3BA3A3] rounded-xl py-3 px-4 placeholder:text-[#B0B3B8] text-white outline-none resize-none focus:ring-2 focus:ring-[#3BA3A3]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#3BA3A3] hover:bg-[#2D8C8C] transition-colors duration-200 py-3 rounded-xl font-semibold text-lg"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
