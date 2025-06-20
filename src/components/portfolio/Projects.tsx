
import React, { forwardRef } from 'react';

const Projects = forwardRef<HTMLElement, {}>((props, ref) => {
  const projects = [
    {
      title: "Merchant Dashboard",
      tech: "React + NodeJS + ExpressJS",
      description: "Token-based secure portal with daily transaction and settlement reports.",
      impact: "Delivered sales analytics, inventory management, actionable insights.",
      contributions: "UI/UX improvements, security enhancements, automation.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Admin Dashboard",
      tech: "React + NodeJS + ExpressJS",
      description: "Admin panel for managing users, merchants, transactions.",
      impact: "Enhanced operational oversight, real-time monitoring, user management.",
      contributions: "API integration, performance tuning, bug resolution.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Cooperative Bank App",
      tech: "React + Nodejs + ExpressJS + React Native",
      description: "Digital banking app for transaction tracking, invoicing, payment processing.",
      impact: "Enabled smooth financial operations, faster payment cycles.",
      contributions: "API/gateway integration, mobile + web UI refinements.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "BBPS Application",
      tech: "Nodejs + ExpressJS + React Native",
      description: "Bharat Bill Payment System app for secure bill payments.",
      impact: "Streamlined bill payment process for millions of users.",
      contributions: "Core payment modules, API integration, UI enhancements.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "JWT-Based Auth System",
      tech: "Node + ExpressJS + MongoDB + Swagger",
      description: "Authentication API system with secure login, role-based access.",
      impact: "Strengthened platform security across all applications.",
      contributions: "Designed API architecture, validation middleware.",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      title: "Tax Collection POS App",
      tech: "Android + POS Payment Gateway",
      description: "A project to collect property and water tax payments across Madhya Pradesh using POS devices.",
      impact: "Enabled the government to digitize tax collection, improving efficiency and transparency.",
      contributions: "Designed UI, integrated POS payment gateway, customized printer functionality.",
      gradient: "from-green-600 to-gray-800"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Featured Projects
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className={`h-2 bg-gradient-to-r ${project.gradient} rounded-t-2xl`}></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className={`text-sm font-medium mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                  {project.tech}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Impact:</h4>
                    <p className="text-gray-600 text-sm">{project.impact}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Key Contributions:</h4>
                    <p className="text-gray-600 text-sm">{project.contributions}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
