"use client"

import Link from "next/link"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { Navigation } from "@/components/navigation"

const projects = [
  {
    id: 1,
    title: "Machine Learning-based Distributed Denial of Service (DDoS) Detection System",
    description:
      "A machine learning-based system for detecting distributed denial of service (DDoS) attacks in network traffic.",
    category: "Machine Learning / Cybersecurity",
    size: "large", // spans 2x2
    featured: true,
    tech: ["Machine Learning", "Python", "Networking"],
    link: "/projects/3d-portfolio",
    github: "https://github.com/Rottenburger/Machine-Learning-Based-DDoS-Detection-System-Aberywtwyth-uni-2025",
    demo: "https://demo.example.com",
    color: "from-purple-500 to-violet-600",
  },
  {
    id: 2,
    title: "Android Questionare App",
    description: "A simple/flexible Android app used to test the user's knowledge of any subject.",
    category: "Android Development",
    size: "large", // spans 1x2
    tech: ["Kotlin", "SQL", "Android Studio"],
    link: "/projects/ecommerce-dashboard",
    github: "https://github.com/Rottenburger/questionapp",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    title: "Hiking Game (Work in Progress)",
    description: "A simple hiking game being made in Godot, written in C# and C++. Made in ispiration of my time at Aberystwyth University.",
    category: "Games",
    size: "wide", // spans 2x1
    tech: ["C#", "Godot", "C++"],
    link: "/projects/real-estate-platform",
    demo: "https://realestate-demo.com",
    color: "from-indigo-500 to-green-600",
  },
  {
    id: 4,
    title: "Chess Tutor Game",
    description: "Second-year computer science group project, where we created a chess tutor game using Java. I worked as the QA manager.",
    category: "Games",
    size: "wide",
    tech: ["Java", "Teamwork"],
    link: "/projects/fitness-app",
    color: "from-pink-500 to-rose-600",
  },
]

export default function ProjectsPage() {
  const getCardClasses = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-1 md:col-span-2 row-span-2"
      case "wide":
        return "col-span-1 md:col-span-2 row-span-1"
      case "medium":
        return "col-span-1 row-span-2"
      case "small":
      default:
        return "col-span-1 row-span-1"
    }
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-16">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Featured Work
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              These are my{" "}
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Most are IT related but there are also some that relate to my hobbies and interests, such as hiking and game development.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${getCardClasses(project.size)}`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between">
                  {/* Header */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="inline-block px-2 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3
                      className={`font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors ${
                        project.size === "large"
                          ? "text-2xl"
                          : project.size === "medium" || project.size === "wide"
                            ? "text-xl"
                            : "text-lg"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`text-gray-600 leading-relaxed ${
                        project.size === "small" ? "text-sm line-clamp-2" : "line-clamp-3"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    {(project.size === "large" || project.size === "medium" || project.size === "wide") && (
                      <div className="flex flex-wrap gap-1 mt-4">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-1 rounded-md bg-gray-50 text-gray-600 text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="mt-6">
                    {/* Action Buttons */}
                    <div className={`flex gap-2 ${project.size === "large" ? "flex-row" : "flex-col"}`}>
                      <Link
                        href={project.link}
                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors text-sm group/btn"
                      >
                        View Details
                        <ArrowUpRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Link>

                      {/* Secondary Actions */}
                      {(project.github || project.demo) && (
                        <div className="flex gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                              aria-label={`View ${project.title} on GitHub`}
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                              aria-label={`View ${project.title} demo`}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                  />
                </div>

                {/* Interactive Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-200 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}