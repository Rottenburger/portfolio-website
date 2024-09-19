"'use client'"

import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SkillsAndLinks() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-white">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["NextJS", "React", "TypeScript", "Shadcn", "Aceternity UI", "Tailwind CSS"].map((skill) => (
            <div key={skill} className="bg-gray-800 rounded-lg p-3 text-center text-white">
              {skill}
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4 text-white">Connect</h2>
        <div className="flex space-x-4">
          <a href="https://github.com/Rottenburger" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 rounded-md">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/thomas-roethenbaugh-712b61149/theme: {
            container: {
              center: true,
              padding: '2rem',
              screens: {
                '2xl': '1400px'
              }
            },
          }" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 rounded-md">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  )
}