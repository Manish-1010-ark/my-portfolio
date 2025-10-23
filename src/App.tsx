import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Menu,
  X,
  Code,
  // Database,
  Server,
  Smartphone,
  Award,
  // Briefcase,
  GraduationCap,
  Zap,
  // Target,
  Rocket,
} from "lucide-react";

import profilePhoto from "./assets/Profile-Photo-Manish.jpg";

// TypeScript Interfaces
interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
}

interface TechIconProps {
  name: string;
  color: string;
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
}

// Reusable Components
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  featured,
}) => (
  <div
    className={`bg-gradient-to-br from-gray-800/60 to-gray-900/60 border ${
      featured ? "border-orange-500/50" : "border-gray-700"
    } rounded-xl p-6 hover:border-orange-500 transition-all duration-300 group relative overflow-hidden`}
  >
    {featured && (
      <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-3 py-1 rounded-bl-lg font-semibold">
        Featured
      </div>
    )}
    <div className="flex items-start justify-between mb-4">
      <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center">
        <Code className="w-6 h-6 text-orange-500" />
      </div>
      <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-orange-500 transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {techStack.slice(0, 4).map((tech, idx) => (
        <span
          key={idx}
          className="text-xs bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full"
        >
          {tech}
        </span>
      ))}
      {techStack.length > 4 && (
        <span className="text-xs bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full">
          +{techStack.length - 4} more
        </span>
      )}
    </div>
    <div className="flex gap-3">
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-orange-500 hover:text-orange-400 text-sm font-medium transition-colors"
        >
          <Github className="w-4 h-4" />
          Code
        </a>
      )}
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-orange-500 hover:text-orange-400 text-sm font-medium transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </a>
      )}
    </div>
  </div>
);

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  skills,
}) => (
  <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700 rounded-xl p-8 hover:bg-gray-800/60 hover:border-orange-500/50 transition-all duration-300 group">
    <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span
          key={idx}
          className="text-xs text-orange-400 bg-orange-500/10 px-2 py-1 rounded"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const TechIcon: React.FC<TechIconProps> = ({ name, color }) => (
  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 flex flex-col items-center justify-center hover:border-orange-500 hover:bg-gray-800/70 transition-all duration-300 group">
    <div
      className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
    >
      <span className="text-2xl font-bold text-white">{name.charAt(0)}</span>
    </div>
    <span className="text-gray-300 text-sm font-medium text-center">
      {name}
    </span>
  </div>
);

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, color }) => (
  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300">
    <div
      className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}
    >
      {icon}
    </div>
    <div className="text-3xl font-bold text-white mb-2">{value}</div>
    <div className="text-gray-400 text-sm">{label}</div>
  </div>
);

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  description,
}) => (
  <div className="border-l-2 border-orange-500/30 pl-6 pb-8 last:pb-0 relative">
    <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-900"></div>
    <div className="text-orange-500 text-sm font-semibold mb-1">{period}</div>
    <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
    <div className="text-gray-400 mb-3">{company}</div>
    <ul className="space-y-2">
      {description.map((item, idx) => (
        <li key={idx} className="text-gray-400 text-sm flex items-start">
          <span className="text-orange-500 mr-2">▸</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Main App Component
const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      window.location.href = `mailto:manishshivam009@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Please fill in all fields");
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      title: "Real Estate Management Platform",
      description:
        "A full-stack property management platform with Flask backend, PostgreSQL database, JWT authentication, advanced search/filtering, and mobile-responsive design. Deployed on VPS with Nginx and SSL.",
      techStack: [
        "Flask",
        "PostgreSQL",
        "JavaScript",
        "Tailwind CSS",
        "JWT",
        "Nginx",
        "Docker",
      ],
      githubUrl: "https://github.com/Manish-1010-ark",
      featured: true,
    },
    {
      title: "Battery Info Android App",
      description:
        "Modern Android app with real-time battery monitoring, live charging power in watts, power trend graphs, time remaining estimates, persistent notifications, and interactive home screen widget with beautiful animations.",
      techStack: [
        "Kotlin",
        "Jetpack Compose",
        "MVVM",
        "MPAndroidChart",
        "LiveData",
        "Android SDK",
      ],
      githubUrl: "https://github.com/Manish-1010-ark",
      featured: true,
    },
    {
      title: "Task Scheduler API",
      description:
        "RESTful API with Node.js and Express for creating, updating, and deleting scheduled tasks using node-cron. Features MongoDB schema for task metadata and Express/EJS dashboard for real-time monitoring.",
      techStack: ["Node.js", "Express", "MongoDB", "node-cron", "EJS"],
      githubUrl: "https://github.com/Manish-1010-ark",
    },
    {
      title: "AI-Chat (ChatGPT Clone)",
      description:
        "Mobile-first AI chat application with Google Gemini API integration for text and image generation. Built with Next.js, Supabase for backend, and Auth0 for authentication.",
      techStack: ["Next.js", "Supabase", "Gemini API", "Auth0", "React"],
      githubUrl: "https://github.com/Manish-1010-ark",
    },
    {
      title: "Inventory Management App",
      description:
        "Android CRUD application for inventory tracking with intelligent low-stock alerts and offline data synchronization capabilities. Built with modern Android architecture components.",
      techStack: ["Kotlin", "SQLite", "Architecture Components", "Android SDK"],
      githubUrl: "https://github.com/Manish-1010-ark",
    },
    {
      title: "Internet Speed Test App",
      description:
        "Android app featuring custom circular speedometer UI with smooth animations, server selection logic for accurate measurements, and historical data tracking with performance analytics.",
      techStack: ["Kotlin", "Retrofit", "Custom UI", "Android SDK"],
      githubUrl: "https://github.com/Manish-1010-ark",
    },
  ];

  return (
    <div className="bg-[#0a0f1a] min-h-screen text-gray-100">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40 pointer-events-none"></div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0f1a]/95 backdrop-blur-lg shadow-lg shadow-orange-500/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">
            <span className="text-white">Manish</span>{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Shivam
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              Contact
            </button>
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-700">
              <a
                href="https://www.linkedin.com/in/manish-shivam-a4b600208"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Manish-1010-ark"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0f1a]/98 backdrop-blur-lg border-t border-gray-800 px-6 py-4">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-orange-500 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-orange-500 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-orange-500 transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-300 hover:text-orange-500 transition-colors text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-orange-500 transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-4">
                <span className="text-orange-500 text-sm font-semibold">
                  🎨 Full-Stack Designer & Developer
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                I'm <br />
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Manish Shivam
                </span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Passionate about crafting beautiful, user-centric digital
                experiences. I specialize in full-stack development with{" "}
                <span className="text-orange-500 font-semibold">
                  Flask, PostgreSQL, React
                </span>{" "}
                and Android development with{" "}
                <span className="text-orange-500 font-semibold">
                  Kotlin & Jetpack Compose
                </span>
                . Currently building production-grade applications with focus on
                intuitive UI/UX and seamless user experiences.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
                >
                  Get In Touch
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  View Projects
                </button>
              </div>
              <div className="flex flex-wrap gap-6">
                <a
                  href="https://github.com/Manish-1010-ark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">Github</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/manish-shivam-a4b600208"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="mailto:manishshivam009@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">Email</span>
                </a>
                <a
                  href="tel:+919093931915"
                  className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">Phone</span>
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                {/* This is the background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>

                {/* This is the main frame for your photo */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 border-orange-500/30 shadow-2xl shadow-orange-500/20">
                  {/* This is your profile photo */}
                  <img
                    src={profilePhoto}
                    alt="Manish Shivam Profile Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              icon={<Rocket className="w-6 h-6 text-orange-500" />}
              value="6+"
              label="Featured Projects"
              color="bg-gradient-to-br from-orange-500/20 to-orange-600/20"
            />
            <StatCard
              icon={<Award className="w-6 h-6 text-blue-500" />}
              value="1"
              label="Live Client Project"
              color="bg-gradient-to-br from-blue-500/20 to-blue-600/20"
            />
            <StatCard
              icon={<Zap className="w-6 h-6 text-purple-500" />}
              value="15+"
              label="Technologies"
              color="bg-gradient-to-br from-purple-500/20 to-purple-600/20"
            />
            <StatCard
              icon={<GraduationCap className="w-6 h-6 text-green-500" />}
              value="2026"
              label="Graduating Year"
              color="bg-gradient-to-br from-green-500/20 to-green-600/20"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What I Bring to{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Your Team
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Combining beautiful design with robust full-stack solutions to
              create exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Code className="w-7 h-7 text-orange-500" />}
              title="Full-Stack Development"
              description="Building complete web applications with Flask backends, PostgreSQL databases, and modern React frontends. Expert in JWT authentication, RESTful APIs, and production deployment."
              skills={[
                "Flask",
                "React",
                "PostgreSQL",
                "Node.js",
                "Docker",
                "Nginx",
              ]}
            />
            <ServiceCard
              icon={<Smartphone className="w-7 h-7 text-orange-500" />}
              title="Android Development"
              description="Creating modern Android apps with Kotlin and Jetpack Compose. Specializing in MVVM architecture, smooth animations, and intuitive user interfaces with Material Design."
              skills={[
                "Kotlin",
                "Jetpack Compose",
                "MVVM",
                "Android SDK",
                "SQLite",
              ]}
            />
            <ServiceCard
              icon={<Server className="w-7 h-7 text-orange-500" />}
              title="UI/UX & Design"
              description="Crafting pixel-perfect, user-centric interfaces with focus on accessibility and responsiveness. From wireframes to production-ready designs with modern design systems."
              skills={[
                "Figma",
                "Tailwind CSS",
                "Responsive Design",
                "Design Systems",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
            >
              <Github className="w-5 h-5" />
              View All on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Professional journey in software development and design
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <ExperienceItem
              title="Freelance Full-Stack Developer"
              company="Remote • Self-Employed"
              period="2023 - Present"
              description={[
                "Delivered a production-grade real estate management platform for a client with full-cycle development from requirements to deployment",
                "Implemented PostgreSQL database optimization, improving query performance by ~15%",
                "Managed VPS deployment using Docker containers and Nginx reverse proxy for high availability",
                "Collaborated using Git workflows and conducted regular code reviews with development team",
                "Successfully completed project under budget and ahead of schedule, earning repeat business",
              ]}
            />
            <ExperienceItem
              title="Open Source Contributor"
              company="GitHub Community"
              period="2022 - Present"
              description={[
                "Published and maintained multiple open-source Android and web projects with active community engagement",
                "Contributed code reviews and technical documentation improvements to various repositories",
                "Active participant in hackathons, consistently building functional prototypes within 24-36 hour timeframes",
                "Mentored junior developers on mobile app architecture and modern coding standards",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technology{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Stack
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies for building
              scalable, production-ready applications
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Technology icons grid */}
            {[
              { name: "React", color: "bg-blue-500/60" },
              { name: "Flask", color: "bg-gray-700/60" },
              { name: "PostgreSQL", color: "bg-sky-600/60" },
              { name: "Kotlin", color: "bg-orange-500/60" },
              { name: "Docker", color: "bg-sky-700/60" },
              { name: "Tailwind", color: "bg-cyan-500/60" },
              { name: "Node.js", color: "bg-lime-600/60" },
              { name: "Supabase", color: "bg-indigo-600/60" },
            ].map((t, i) => (
              <TechIcon key={i} name={t.name} color={t.color} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-20 px-6 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Talk
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm available for freelance projects, collaborations, or full-time
              opportunities. Send a message and I'll get back to you.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700 rounded-2xl p-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="grid gap-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-gray-300 text-sm mb-2">Name</span>
                  <input
                    type="text"
                    className="bg-transparent border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-gray-300 text-sm mb-2">Email</span>
                  <input
                    type="email"
                    className="bg-transparent border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </label>
              </div>

              <label className="flex flex-col">
                <span className="text-gray-300 text-sm mb-2">Message</span>
                <textarea
                  className="bg-transparent border border-gray-700 rounded px-4 py-3 text-white min-h-[140px] focus:outline-none focus:border-orange-500"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </label>

              <div className="flex items-center justify-between mt-2">
                <div className="text-sm text-gray-400">
                  Or reach me directly:{" "}
                  <a
                    href="mailto:manishshivam009@gmail.com"
                    className="text-orange-500"
                  >
                    manishshivam009@gmail.com
                  </a>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Manish Shivam — Built with passion.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Manish-1010-ark"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/manish-shivam-a4b600208"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:manishshivam009@gmail.com"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+919093931915"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
