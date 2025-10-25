import { FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 bg-gray border-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Projects" />
        <p className="text-center text-gray-300 mb-12">
          Showcasing my personal projects.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="bg-gray border-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md mb-4 w-full"
              />
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-white mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-900/30 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-800/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center bg-black hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
