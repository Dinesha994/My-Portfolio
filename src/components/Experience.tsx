"use client";

import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/data/experience";
import { motion } from "framer-motion";

export default function ExperienceList() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 bg-gray text-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Experience" />

        <div className="flex flex-col gap-8 mt-12">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
              className="rounded-xl border border-gray-800 bg-gray p-6 hover:-translate-y-1 hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-white">
                {exp.role}
              </h3>
              <p className="text-blue-400">{exp.company}</p>
              <p className="text-sm text-gray-400 mt-1">{exp.duration}</p>

              <p className="text-gray-300 mt-3">{exp.summary}</p>

              {exp.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-purple-900/30 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-800/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-5">
                <Link
                  href={`/experience/${exp.slug}`}
                  className="rounded-xl bg-blue-600 text-white border border-blue-600 px-4 py-2 text-xs font-medium shadow-md hover:brightness-110 transition"
                >
                  View Details
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
