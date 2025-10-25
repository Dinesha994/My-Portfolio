"use client";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaPython,
  FaCode,
  FaStar,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiPostman,
  SiMysql,
  SiPhp,
  SiHtml5,
  SiCss3,
  
} from "react-icons/si";
import SectionHeading from "@/components/SectionHeading";

type Skill = {
  name: string;
  icon: React.ReactNode;
  level: number; // 1–5
};

type SkillGroup = {
  category: "Frontend" | "Backend" | "Database" | "Tools & Platforms";
  skills: Skill[];
};

const allSkills: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" />, level: 3 },
      { name: "HTML", icon: <SiHtml5 color="#E34F26" />, level: 4 },
      { name: "CSS", icon: <SiCss3 color="#1572B6" />, level: 4 },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" />, level: 3 },
      { name: "React", icon: <FaReact color="#61DBFB" />, level: 2 },
      { name: "Next.js", icon: <SiNextdotjs color="#FFFFFF" />, level: 2 },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" />, level: 2 },
      
      
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs color="#68A063" />, level: 3 },
      { name: "Express.js", icon: <SiExpress color="#FFFFFF" />, level: 3 },
      { name: "PHP", icon: <SiPhp color="#777BB4" />, level: 2 },
      { name: "Java", icon: <FaJava color="#f89820" />, level: 3 },
      { name: "Python", icon: <FaPython color="#3776AB" />, level: 3 },
      { name: "REST APIs", icon: <FaCode color="#00BFFF" />, level: 4 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb color="#4DB33D" />, level: 4 },
      { name: "MySQL", icon: <SiMysql color="#00758F" />, level: 4 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt color="#F05032" />, level: 4 },
      { name: "Postman", icon: <SiPostman color="#FF6C37" />, level: 4 },
      { name: "VS Code", icon: <FaCode color="#007ACC" />, level: 5 },

    ],
  },
];

// small helper to render one category block
function CategoryBlock({ group }: { group: SkillGroup }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-semibold text-blue-300">{group.category}</h3>
        
      </div>

      <div
        className="
          grid gap-3
          grid-cols-1
          sm:grid-cols-2
        "
      >
        {group.skills.map((skill) => (
          <div
            key={`${group.category}-${skill.name}`}
            className="
              group rounded-xl border border-gray-800 bg-gradient-to-b from-black/40 to-black/20
              hover:border-gray-700 transition
              p-3 flex items-center justify-between
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  w-8 h-8 rounded-lg flex items-center justify-center
                  bg-white/5 ring-1 ring-white/10 group-hover:ring-blue-500/40 transition
                "
              >
                <span className="text-lg">{skill.icon}</span>
              </div>
              <div>
                <p className="font-medium">{skill.name}</p>
                
              </div>
            </div>

            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, idx) => (
                <FaStar
                  key={idx}
                  className={`text-sm ${
                    idx < skill.level ? "text-blue-400" : "text-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  // Pair them: (Frontend | Backend) on row 1, (Database | Tools) on row 2
  const row1 = [
    allSkills.find((g) => g.category === "Frontend")!,
    allSkills.find((g) => g.category === "Backend")!,
  ];
  const row2 = [
    allSkills.find((g) => g.category === "Database")!,
    allSkills.find((g) => g.category === "Tools & Platforms")!,
  ];

  return (
    <section id="skills" className="scroll-mt-24 py-20 bg-gray text-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Skills & Tech Stack" />
        <p className="text-center text-gray-300 mb-12">
        My growing stack of tools and technologies.
        </p>

        {/* Row 1: Frontend | Backend */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          {row1.map((group) => (
            <CategoryBlock key={group.category} group={group} />
          ))}
        </div>

        {/* Row 2: Database | Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {row2.map((group) => (
            <CategoryBlock key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
