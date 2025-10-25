"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ResumeButton from "@/components/ResumeButton";


export default function Home() {
  return (
    <section
  id="home"
  className="scroll-mt-24 flex flex-col items-center justify-center min-h-[85vh] pt-10 pb-20"
>
  <div className="text-center">
    {/* Profile Image */}
    <div className="w-50 h-50 rounded-full border-4 border-black flex items-center justify-center mx-auto mb-10 overflow-hidden">
      <img
        src="/profile.jpeg"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Intro */}
    <h1 className="text-3xl md:text-5xl  mb-6">
      Hi, I’m <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold">
  Dinesha Bungatavula
</span> 👋
    </h1>
    <p className="text-lg text-gray mb-8 max-w-xl mx-auto">
      Software Developer passionate about building modern, user-friendly, and
      scalable applications.
    </p>

    {/* Buttons */}
    <div className="flex justify-center gap-4 mt-8 flex-wrap">
  <a
    href="#projects"
    className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-purple-500 hover:to-blue-500 transform hover:-translate-y-1 transition-all duration-300"
  >
    View My Work
  </a>

  <a
    href="#contact"
    className="px-6 py-3 rounded-lg border border-blue-400 text-blue-400 font-semibold hover:bg-blue-500 hover:text-white shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
  >
    Contact Me
  </a>
</div>


  </div>
</section>

  );
}
