"use client";

export default function Navbar() {
  return (
    <nav
      className="
        fixed top-0 inset-x-0 z-50 h-16
        bg-gray-900 
        border-b border-white/10
      "
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-lg font-bold">Dinesha Bungatavula</h1>

        <ul className="flex items-center gap-6">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
