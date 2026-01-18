import { useState } from "react";
import SingleProject from "./components/singleProject";
import AllProjectsCardsPage from "./components/allProjectsCardsPage";
import type { Project } from "../../types";

function Projects() {
  const [projectID, setProjectID] = useState<string>("");

  const p: Project[] = [
    {
      projectID: "p-01",
      projectName: "Travel Management System",
      projectDescription:
        "Learning is a lifelong process that shapes how people think, adapt, and grow. From childhood curiosity to professional mastery, learning builds skills, confidence, and understanding. It encourages critical thinking, creativity, and empathy by exposing individuals to new ideas and perspectives. In a rapidly changing world, continuous learning helps people remain relevant and resilient. Technology expands access to knowledge, but true learning also requires reflection and practice. When individuals commit to learning, societies benefit through innovation, cooperation, and progress. Ultimately, learning is not only about information, but about developing wisdom to make better choices and meaningful contributions for future generations worldwide.Learning is a lifelong process that shapes how people think, adapt, and grow. From childhood curiosity to professional mastery, learning builds es benefit through innovation, cooperation, and progress. Ultimately, learning is not only about information, but about developing wisdom to make better choices and meaningful contributions for future generations worldwide.",
      startedDate: "2022-01-15",
      technologies: [
        {
          technology: "Python",
          level: 90,
          icon: "https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png",
          type: "programming",
        },
        {
          technology: "Node.js",
          level: 4,
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIctrde40EK25GAg9Jxfh4xdwfbjo380nNQQ&s",
          type: "backend",
        },
        {
          technology: "MongoDB",
          level: 3,
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIctrde40EK25GAg9Jxfh4xdwfbjo380nNQQ&s",
          type: "database",
        },
      ],
      projectImageUrls: [
        "https://img.freepik.com/free-photo/document-marketing-strategy-business-concept_53876-132231.jpg?semt=ais_hybrid&w=740&q=80",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQszyGxUGWO6BPnbwsWQT9fGYMYaYGVKadjCg&s",
      ],
      links: [
        {
          linkName: "GitHub",
          link: "https://github.com/username/travel-management-system",
        },
        {
          linkName: "YouTube",
          link: "https://www.youtube.com/watch?v=examplevideo",
        },
        {
          linkName: "LiveDemo1",
          link: "https://travel-management.example.com",
        },
        {
          linkName: "LiveDemo2",
          link: "https://travel-management.example.com",
        },
        {
          linkName: "API Documentation",
          link: "https://travel-management.example.com/api-docs",
        },
        {
          linkName: "Figma Presentation",
          link: "https://example.com/presentation",
        },
      ],
      architectureImageUrls: [
        {
          diagramName: "System Architecture",
          link: "https://media.geeksforgeeks.org/wp-content/uploads/20250228171646291248/Conceptual-Architecture-Diagram.webp",
        },
        {
          diagramName: "Database Schema",
          link: "https://images.ctfassets.net/w6r2i5d8q73s/1OISrdRhlcYgUcbHRiGGDc/f96e3d7236a88d176455428161d8cb20/aws-architecture-header.png?fm=webp&q=75",
        },
        {
          diagramName: "System Architecture",
          link: "https://media.geeksforgeeks.org/wp-content/uploads/20250228171646291248/Conceptual-Architecture-Diagram.webp",
        },
        {
          diagramName: "Database Schema",
          link: "https://images.ctfassets.net/w6r2i5d8q73s/1OISrdRhlcYgUcbHRiGGDc/f96e3d7236a88d176455428161d8cb20/aws-architecture-header.png?fm=webp&q=75",
        },
      ],
      architectureDescription:
        "The system follows a microservices architecture, with separate services for user management, booking, and payment processing.A comprehensive web application designed to streamline travel planning and management for users and administratorsA comprehensive web application designed to streamline travel planning and management for users and administratorsA comprehensive web application designed to streamline travel planning and management for uLearning is a lifelong process that shapes how people think, adapt, and grow. From childhood curiosity to professional mastery, learning builds skills, confidence, and understanding. It encourages critical thinking, creativity, and empathy by exposing individuals to new ideas and perspectives. In a rapidly changing world, continuous learning helps people remain relevant and resilient. Technology expands access to knowledge, but true learning also requires reflection and practice. When individuals commit to learning, societies benefit through innovation, cooperation, and progress. Ultimately, learning is not only about information, but about developing wisdom to make better choices and meaningful contributions for future generations worldwide.",
      tags: ["web", "travel", "management", "react", "nodejs"],
      score: 85,
    },
  ];

  const projects = Array(4).fill(p[0]) as Project[];

  const selectedProject = projects.find((project) => {
    return project.projectID === projectID;
  });
  return (
    <div className="bg-[#FEFEFE]">
      {projectID && selectedProject ? (
        <SingleProject project={selectedProject} />
      ) : (
        <AllProjectsCardsPage setProjectID={setProjectID} projects={projects} />
      )}
    </div>
  );
}

export default Projects;
