import React from "react";
import ExperienceItem from "../ExperienceItem";

const ExperienceSection: React.FC = () => {
  return (
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
  );
};

export default ExperienceSection;