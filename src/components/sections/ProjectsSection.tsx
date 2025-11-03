import React from "react";
import { Github } from "lucide-react";
import ProjectCard from "../ProjectCard";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "TeamStream",
      description:
        "Unified collaboration platform combining real-time chat, Kanban task boards, " +
        "collaborative documents with live cursors, digital whiteboarding, and video " +
        "conferencing. Built for modern remote teams with workspace management and " +
        "persistent messaging powered by Socket.IO and Liveblocks.",
      techStack: [
        "React",
        "Node.js",
        "Socket.IO",
        "Liveblocks",
        "PeerJS",
        "Supabase",
        "Express",
        "TipTap",
        "Tailwind CSS",
        "Vite",
      ],
      githubUrl: "https://github.com/Manish-1010-ark/TeamStream",
      liveUrl: "https://team-stream-wine.vercel.app/",
      featured: true,
    },
    {
      title: "Real Estate Management Platform",
      description:
        "A full-stack property management platform with Flask backend, PostgreSQL database, " +
        "JWT authentication, advanced search/filtering, and mobile-responsive design. " +
        "Deployed on VPS with Nginx and SSL.",
      techStack: [
        "Flask",
        "PostgreSQL",
        "JavaScript",
        "Tailwind CSS",
        "JWT",
        "Nginx",
        "Docker",
      ],
      githubUrl: "https://github.com/Manish-1010-ark/real-estate-website",
      liveUrl: "https://wallstreetllp.com/",
      featured: true,
    },
    {
      title: "Battery Info Android App",
      description:
        "Modern Android app with real-time battery monitoring, live charging power in watts, " +
        "power trend graphs, time remaining estimates, persistent notifications, and " +
        "interactive home screen widget with beautiful animations.",
      techStack: [
        "Kotlin",
        "Jetpack Compose",
        "MVVM",
        "MPAndroidChart",
        "LiveData",
        "Android SDK",
      ],
      githubUrl: "https://github.com/Manish-1010-ark/Battery_Info_App",
      featured: true,
    },
    {
      title: "Task Scheduler API",
      description:
        "RESTful API with Node.js and Express for creating, updating, and deleting scheduled " +
        "tasks using node-cron. Features MongoDB schema for task metadata and Express/EJS " +
        "dashboard for real-time monitoring.",
      techStack: ["Node.js", "Express", "MongoDB", "node-cron", "EJS"],
      githubUrl: "https://github.com/Manish-1010-ark/php-task-scheduler",
    },
    {
      title: "AI-Chat (ChatGPT Clone)",
      description:
        "Mobile-first AI chat application with Google Gemini API integration for text and " +
        "image generation. Built with Next.js, Supabase for backend, and Auth0 for authentication.",
      techStack: ["Next.js", "Supabase", "Gemini API", "Auth0", "React"],
      githubUrl: "https://github.com/Manish-1010-ark",
    },
    {
      title: "Inventory Management App",
      description:
        "Android CRUD application for inventory tracking with intelligent low-stock alerts " +
        "and offline data synchronization capabilities. Built with modern Android architecture components.",
      techStack: ["Kotlin", "SQLite", "Architecture Components", "Android SDK"],
      githubUrl: "https://github.com/Manish-1010-ark/Home_Pantry",
    },
    {
      title: "Internet Speed Test App",
      description:
        "Android app featuring custom circular speedometer UI with smooth animations, " +
        "server selection logic for accurate measurements, and historical data tracking " +
        "with performance analytics.",
      techStack: ["Kotlin", "Retrofit", "Custom UI", "Android SDK"],
      githubUrl: "https://github.com/Manish-1010-ark",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of production-ready applications built with modern
            technologies and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Manish-1010-ark"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 
            to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 
            rounded-lg font-semibold transition-all duration-300 shadow-lg 
            shadow-orange-500/20 hover:shadow-orange-500/40"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
