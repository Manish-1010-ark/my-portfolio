import React from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

interface NavbarProps {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  scrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
}) => {
  return (
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
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Manish-1010-ark"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors"
              aria-label="GitHub"
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
  );
};

export default Navbar;
