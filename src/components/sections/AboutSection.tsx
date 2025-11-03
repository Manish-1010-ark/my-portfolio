import React from "react";
import { Code, Smartphone, Server } from "lucide-react";
import ServiceCard from "../ServiceCard";

const AboutSection: React.FC = () => {
  return (
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
            description="Building complete web applications with Flask backends, PostgreSQL databases, 
            and modern React frontends. Expert in JWT authentication, RESTful APIs, and production deployment."
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
            description="Creating modern Android apps with Kotlin and Jetpack Compose. Specializing in 
            MVVM architecture, smooth animations, and intuitive user interfaces with Material Design."
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
            description="Crafting pixel-perfect, user-centric interfaces with focus on accessibility and 
            responsiveness. From wireframes to production-ready designs with modern design systems."
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
  );
};

export default AboutSection;
