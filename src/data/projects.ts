// src/data/projects.ts
import dedent from "ts-dedent";
export type Project = {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    image: string;        // should exist under /public
    link?: string;        // live/demo link (optional)
    date?: string;        // optional
    author?: { name: string; username?: string };
    content?: string;     // optional long content if you add markdown later
  };
  
  export const projects: Project[] = [
    {
      slug: "my-portfolio",
      title: "My Portfolio",
      description:
        "A personal portfolio to showcase my projects, skills, and experience. Built with Next.js and Tailwind CSS.",
      tags: ["Next.js", "Tailwind CSS"],
      image: "/project1.png",          // put this file in /public/project1.png
      date: " 2024",
      author: { name: "Dinesha Bungatavula", username: "@dineshabungatavula" },
      content: dedent(`
### Tech Stack:
**Next.js**, **React**, **Tailwind CSS**, **Framer Motion**, **React Icons**

--- 

This portfolio website was built to showcase my professional journey, technical skills, and key projects. It reflects my focus on clean design, responsive layouts, and accessibility.
### Features
- Developed a modern, responsive personal portfolio using Next.js, React, and Tailwind CSS to showcase my projects, skills, and experience.
- Implemented dynamic project pages and reusable modular components for easy scalability and content updates.
- Designed interactive UI elements with Framer Motion animations and skill proficiency indicators for an engaging user experience.
- Integrated a resume viewer and contact form with highlighted social links, ensuring seamless navigation and accessibility across all devices.

      `),
    },
    
    {
        slug: "dance-flow",
        title: "Dance Flow: Personalized Dance Sequence Builder and Scheduler",
        description:
          "A web application that lets users create, customize, and schedule dance sequences with an intuitive UI.",
        tags: ["JavaScript", "Express.js", "MongoDB"],
        image: "/project2.png",
        link: "https://example.com",
        date: "Jun 2024",
        author: { name: "Dinesha Bungatavula", username: "@dineshabungatavula" },
        content: dedent(`
### Tech Stack:
**HTML**, **CSS**, **JavaScript**, **Express.js**, **Node.js**, **MongoDB**

---

This is a full stack Web application that has been built as a part of my MSC final project. In this platform the users are allowed to create and customize their dance sequences. The calendar in this helps the users to schedule the dance practice sessions on their own at their convenience. Additionally, the integration of progress tracking features helps the users to monitor the progress of their dance practice sessions at any time.



### Objectives

**• Secure user authentication:**
Implementing the JWT-based secure user authentication system that allows the users to create and login with their accounts securely. This system also includes the role-based access control which makes sure a clear distinction between the admins and the regular users.

**• Develop a user-friendly interface:**
Designing a clean, interactive and easy-to-navigate interface for the users to easily explore the dance moves, create and personalize the sequences of their own choice. This also focuses on providing a great experience for both the beginners and advanced users.

**• CRUD operations:**
Enabling the full CRUD (create, read, update and delete) functionalities for both the users and admin. Users can create and modify their sequences as needed whereas admin can perform these functions for the dance moves in the database which improves the flexibility of this system.

**• Integration of interactive Calendar:**
Integrating a dynamic calendar system that allows the users to schedule their own dance practice sessions and manage them according to their preferences effectively. This feature also allows the users to stay organized and set reminders for their practice sessions to maintain the consistency of their dance routines.

**• Progress tracking:**
Enabling the progress tracking system to store and visualize the user's activity and performance which helps the users to monitor their progress and set the new goals for their practice sessions. This also levels up the motivation for the users to practice their sessions.

**• Auto recommendation system:**
Implementing the auto recommendation system to suggest the users with the next recommended session in the calendar based on the user’s past scheduled and completed sessions. This helps the users to maintain their consistency in the dance learning.

**• Community features:**
Designing a community space where users can share sequences and sessions with the other users in the application and communicate with others via threads and posts. This also allows the user to create a challenge in which the other users can participate and do comments in the challenge to communicate with the other participants.
`),

}
      
];
  