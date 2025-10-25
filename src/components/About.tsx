import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 bg-gray text-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="About Me" />

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* Left: narrative */}
          <div>
            <p className="text-gray-300 leading-relaxed">
              I’m a <span className="font-semibold text-white">Software Developer</span> with hands-on
              experience in building clean, responsive, and user-friendly web applications using{" "}
              <span className="font-medium text-shadow-white">JavaScript, React, Next.js, Express.js and REST APIs</span>.
              I’ve worked on developing and improving dynamic interfaces, enhancing performance, and collaborating closely with teams to deliver high-quality software.
            </p>

            <p className="text-gray-300 leading-relaxed mt-4">
              I bring a calm, problem solving mindset and a bias for clear, simple solutions and I'm a recent graduate in MSC Advanced Computer Science from University of Leicester.
        
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
  {/* GitHub */}
  <Link
    href="https://github.com/Dinesha994"
    target="_blank"
    className="rounded-lg bg-blue-900 text-white border border-blue-500 px-4 py-2 text-sm font-medium shadow-md hover:brightness-110 transition"
  >
    GitHub
  </Link>

  {/* LinkedIn */}
  <Link
    href="https://www.linkedin.com/in/dineshabungatavula"
    target="_blank"
    className="rounded-lg bg-blue-900 text-white border border-blue-500 px-4 py-2 text-sm font-medium shadow-md hover:brightness-110 transition"
  >
    LinkedIn
  </Link>

  {/* Resume */}
  <Link
    href="/Dinesha_Bungatavula_Resume.pdf"
    target="_blank"
    className="rounded-lg border border-white/20 bg-white text-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition"
  >
    View Resume
  </Link>
</div>


          </div>

          {/* Right: quick facts / skills */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/50 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:border-blue-500/50">
           <h3 className="text-lg font-semibold text-white mb-4">Quick Facts</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong className="text-gray">Focus:</strong> full stack development, clean APIs, user focused applications.</li>
              <li>• <strong className="text-gray">Experience:</strong> Accenture (Application Development Associate).</li>
              <li>• <strong className="text-gray">Comfortable with:</strong> JavaScript, Rest APIs, Express.js, Node.js and Agile Collaboration</li>
              <li>• <strong className="text-gray">Soft skills:</strong> teamwork, ownership, clear communication.</li>
            </ul>

            <div className="mt-6">
    <h4 className="text-sm font-semibold text-gray-400 mb-2">Core Skills</h4>
    <div className="flex flex-wrap gap-2">
      {[ "JavaScript", "Express.js", "Node.js", "REST APIs", "MongoDB"].map((skill) => (
        <span
          key={skill}
          className="bg-blue-900/30 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-800/50"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>

  <div className="mt-6">
    <h4 className="text-sm font-semibold text-gray-400 mb-2">Currently Exploring</h4>
    <div className="flex flex-wrap gap-2">
      {["Cloud Deployment", "DevOps Basics", "Testing best practices"].map((topic) => (
        <span
          key={topic}
          className="bg-purple-900/30 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-800/50"
        >
          {topic}
        </span>
      ))}
    </div>
  </div>
          </div>
        </div>
      </div>
    </section>
  );
}
