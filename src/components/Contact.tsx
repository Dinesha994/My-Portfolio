"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { FiSend, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailto = `mailto:dineshabungatavula@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(
      message + "\n\nFrom: " + email
    )}`;
    window.open(mailto);
    setName("");
    setEmail("");
    setMessage("");
    setShowForm(false);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 bg-gray text-white flex flex-col items-center"
    >
      <div className="max-w-3xl mx-auto text-center px-6">
        <SectionHeading title="Contact" />
        <p className="text-gray-400 mb-8">
          Let’s connect and create something amazing together.
        </p>

        {/* 🌟 Get in touch button */}
        {!showForm && (
          <motion.button
            onClick={() => setShowForm(true)}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-purple-500 hover:to-blue-500 transform hover:-translate-y-1 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
          </motion.button>
        )}

        {/* ✨ Animated Form Reveal */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4 }}
              className="mt-10 w-full bg-gray-900/70 p-8 rounded-2xl border border-white/10 backdrop-blur-sm shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-black/40 text-white border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-black/40 text-white border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-black/40 text-white border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:bg-white/10 transition"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all"
                  >
                    <FiSend /> Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 👇 Quick links under the form */}
         {/* 👇 Quick links under the form */}
<div className="mt-12 flex justify-center gap-8">
  {[
    {
      href: "mailto:dineshabungatavula999@gmail.com",
      icon: <FiMail />,
      label: "Email",
      color: "hover:text-pink-400 hover:drop-shadow-[0_0_6px_rgba(244,114,182,0.7)]",
    },
    {
      href: "https://github.com/Dinesha994",
      icon: <FiGithub />,
      label: "GitHub",
      color: "hover:text-blue-400 hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.7)]",
    },
    {
      href: "https://www.linkedin.com/in/dineshabungatavula",
      icon: <FiLinkedin />,
      label: "LinkedIn",
      color: "hover:text-sky-400 hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.7)]",
    },
  ].map(({ href, icon, label, color }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`text-2xl text-gray-400 transition-all duration-300 transform hover:scale-125 ${color}`}
    >
      {icon}
    </a>
  ))}
</div>

      </div>
    </section>
  );
}
