export default function Footer() {
    return (
      <footer className="bg-gray text-white py-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Dinesha. All rights reserved.</p>
  
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="https://github.com/Dinesha994"
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dineshabungatavula"
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:dineshabungatavula999@gmail.com"
              className="hover:text-blue-600 transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    );
  }
  