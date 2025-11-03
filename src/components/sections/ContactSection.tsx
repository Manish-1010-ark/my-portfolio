import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      window.location.href = 
        `mailto:manishshivam009@gmail.com?subject=Portfolio Contact from ${formData.name}` +
        `&body=${formData.message}%0A%0AFrom: ${formData.email}`;
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
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
  );
};

export default ContactSection;