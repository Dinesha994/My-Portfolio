// src/app/projects/[slug]/page.tsx
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Experience from "@/components/Experience";

type Props = { params: Promise<{ slug: string }> };

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params; // Next 15+ requirement
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <section className="min-h-screen py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/#projects"
          className="text-blue-500 hover:underline inline-block mb-6"
        >
          ← All Projects
        </Link>

        {/* Project Date */}
        {project.date && <p className="text-gray-400 text-sm">{project.date}</p>}

        {/* Title */}
        <h1 className="text-4xl font-extrabold mt-2 mb-4 text-white">
          {project.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-900/30 text-blue-400 text-sm px-3 py-1 rounded-full border border-blue-800/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Image */}
        {project.image && (
          <div className="mb-8">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={630}
              className="rounded-xl shadow-lg border border-gray-800"
              priority
            />
          </div>
        )}

<p className="text-lg text-white leading-relaxed mb-6">
  {project.description}
</p>

{project.content && (
  <ReactMarkdown
    components={{
      h3: ({node, ...props}) => (
        <h3 className="text-2xl font-bold text-blue-400 mt-10 mb-3" {...props} />
      ),
      h4: ({node, ...props}) => (
        <h4 className="text-xl font-semibold text-blue-300 mt-6 mb-2" {...props} />
      ),
      p: ({node, ...props}) => (
        <p className="text-white leading-relaxed" {...props} />
      ),
      strong: ({node, ...props}) => (
        <strong className="text-white font-semibold" {...props} />
      ),
      ul: ({node, ...props}) => (
        <ul className="list-disc pl-6 space-y-2 text-white" {...props} />
      ),
      li: ({node, ...props}) => <li className="leading-relaxed" {...props} />,
      hr: () => <hr className="my-6 border-gray-800" />,
    }}
  >
    {project.content}
  </ReactMarkdown>
)}

      </div>
    </section>


  );

  <Experience />
}
