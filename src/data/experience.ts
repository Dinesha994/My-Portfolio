import dedent from "ts-dedent";

export type ExperienceItem = {
  slug: string;
  role: string;
  company: string;
  duration: string;
  summary: string;      // brief shown on list
  tags?: string[];
  content?: string;     // full detail (markdown)
};

export const experiences: ExperienceItem[] = [
  {
    slug: "accenture-ada",
    role: "Application Development Associate",
    company: "Accenture",
    duration: "Nov 2022 – Feb 2024",
    summary:
      "Built dynamic UI components, integrated REST APIs, and improved performance across key user flows.",
    tags: ["HTML", "CSS", "REST APIs", "JavaScript"],
    content: dedent(`
### 🔍 Overview
As a Software Developer at Accenture, I contributed to building scalable and responsive web applications with a focus on front-end performance, usability, and collaboration in agile environments.

### ✅ Key contributions
- Contributed to developing reusable UI components and improving overall frontend performance for applications.
- Built end-to-end features, connecting frontend interfaces with REST APIs and backend logic.
- Streamlined team collaboration by managing repositories and version control through Git.
- Gained hands-on experience with Agile workflows, participating in sprint planning and daily standups to keep deliverables on track.

    `),
  },
  
];
