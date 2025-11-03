import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

import ProfilePhoto from "../../assets/Profile-Photo-Manish.jpg";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  // Replace with actual profile photo path
  const profilePhoto = ProfilePhoto;
  return (
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
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 
                hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all 
                duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white 
                px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                View Projects
              </button>
            </div>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://github.com/Manish-1010-ark"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-orange-500 
                transition-colors group"
                aria-label="GitHub"
              >
                <div
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center 
                group-hover:bg-orange-500/10 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/manish-shivam-a4b600208"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-orange-500 
                transition-colors group"
                aria-label="LinkedIn"
              >
                <div
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center 
                group-hover:bg-orange-500/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:manishshivam009@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-orange-500 
                transition-colors group"
                aria-label="Email"
              >
                <div
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center 
                group-hover:bg-orange-500/10 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Email</span>
              </a>
              <a
                href="tel:+919093931915"
                className="flex items-center gap-2 text-gray-400 hover:text-orange-500 
                transition-colors group"
                aria-label="Phone"
              >
                <div
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center 
                group-hover:bg-orange-500/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Phone</span>
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 
              rounded-3xl blur-3xl opacity-20 animate-pulse"
              ></div>
              <div
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden 
              border-2 border-orange-500/30 shadow-2xl shadow-orange-500/20"
              >
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
  );
};

export default HeroSection;
