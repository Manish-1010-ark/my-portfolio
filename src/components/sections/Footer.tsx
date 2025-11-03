import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;