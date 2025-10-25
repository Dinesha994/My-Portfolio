import { experiences } from "@/data/experience";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

type Props = { params: Promise<{ slug: string }> };

export default async function ExperienceDetail({ params }: Props) {
  const { slug } = await params; // Next.js 15
  const exp = experiences.find((e) => e.slug === slug);
  if (!exp) return notFound();

  return (
    <section className="min-h-screen py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto">
        <Link href="/#experience" className="text-blue-400 hover:underline">
          ← Back to Experience
        </Link>

        <h1 className="text-3xl md:text-4xl font-extrabold mt-4">{exp.role}</h1>
        <p className="text-blue-400 mt-1">{exp.company}</p>
        <p className="text-sm text-gray-400 mt-1">{exp.duration}</p>

        {exp.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {exp.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full border border-gray-700 bg-gray-800/70 text-gray-200"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <p className="text-gray-300 mt-6">{exp.summary}</p>

        {exp.content && (
          <div className="prose prose-invert prose-headings:text-white max-w-none mt-8">
            <ReactMarkdown
              components={{
                h3: (props) => <h3 className="text-2xl font-bold mt-8 mb-3" {...props} />,
                h4: (props) => <h4 className="text-xl font-semibold mt-6 mb-2" {...props} />,
                p:  (props) => <p className="text-gray-300 leading-relaxed" {...props} />,
                ul: (props) => <ul className="list-disc pl-6 space-y-2 text-gray-300" {...props} />,
                li: (props) => <li className="leading-relaxed" {...props} />,
                hr: () => <hr className="my-6 border-gray-800" />,
              }}
            >
              {exp.content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </section>
  );
}
