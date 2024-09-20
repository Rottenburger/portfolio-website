"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LucideIcon, Sparkles, Zap, Flame, Laugh, Music, Palette, Braces, Footprints } from "lucide-react"
import Image from "next/image"

interface BentoCardProps {
  title: string
  description: string
  icon: LucideIcon
  className?: string
  imageUrl?: string
}

const BentoCard = ({ title, description, icon: Icon, className, imageUrl }: BentoCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`p-6 rounded-xl bg-gray-800 text-gray-100 shadow-md transition-all hover:shadow-xl overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative mb-4">
        {imageUrl ? (
          <div className="relative w-full h-40 mb-4">
            <Image
              src={imageUrl}
              alt={`Illustration for ${title}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ) : (
          <Icon className="w-10 h-10 text-yellow-400" />
        )}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-yellow-200 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: Math.random() * 60 - 30,
                    y: Math.random() * 60 - 30,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: Math.random() * 0.2,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 0.5 + 0.5,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        initial={false}
        animate={{ x: isHovered ? 5 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </motion.div>
    </motion.div>
  )
}

export function AnimatedImageBentoGridComponent() {
  return (
    <div id="work-experience" className="container mx-auto p-8 bg-gray-900 min-h-screen">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-100">Work Experience / Personal Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <BentoCard
          title="IT Analyst at G-Research"
          description="My industrial year placement provided me with an exceptional experience in systems administration, IT support and cyber security operations. I used a vast array of different technologies, 
          including PowerShell, Mimecast, CyberArk, VMWare, Citrix and Cisco Meraki to name a few. During the second half of my placement I worked under a senior IT engineer completing engineering project tickets. This 
          included an automated checking system for new joiners of the company to ensure that their accounts and storage were setup correctly. I also spent time learning Linux system administration/engineering 
          to gain more understanding about the operating system as I had very little experience with it before joining G-Research. During a re-structuring while at G-Research, I was given more responsibility for 
          the cyber-security operations at the company. Handling email releases, download requests as well as working with the security investigation team when an account had been compromised/labelled as suspicious.
"
          icon={Sparkles}
          className="md:col-span-2"
          imageUrl="/static/images/soho.PNG?height=160&width=320"
        />
        <BentoCard
          title="UX/UI Researcher at Outline Wales"
          description="In this role I worked for a startup collecting user experience data for an AR phone application. I personally completed 10 user tests/interviews and compiled the data for our CEO to gain insights about the app."
          icon={Zap}
          imageUrl="/static/images/outlinewales.jpg?height=160&width=160"
        />
        <BentoCard
          title="General Assistant at Sainsbury's"
          description="My part-time role varied as I gained experience. It started with stacking shelves but by the end of my time there I was trained in all but one department. Allowing me to work flexibly around my manager’s needs for that day. Some days I would even organise less experienced colleges across both the food and backdoor departments. The role gave me a great deal of experience on how to handle customer demands as well as solve problems on my own."
          icon={Flame}
          imageUrl="/static/images/sainsburys-logo-png-transparent.png?height=160&width=160"
        />
        <BentoCard
          title="Chess Tutor Group Project"
          description="During my second-year as a computer science student I worked as the QA manager for our chess tutor project, the code was worked on GitLab as requested by our professor but the code is now hosted here - https://github.com/biy11/chess_tutor
          Tech stack - Java, JavaFX, JUnit, CSS"
          icon={Laugh}
          className="md:col-span-2"
          imageUrl="/static/images/main_menu_background.jpg?height=160&width=320"
        />
        <BentoCard
          title="Game Development"
          description="I am currently improving my C# and Unity skills in order to create an sell my own video game on both Steam and the Google Play store."
          icon={Braces}
        />
        <BentoCard
          title="AberHike Commitee"
          description="On top of my coding/IT skills, I am also the secretary of my university's hiking club. Leading sometimes as many as 25 people up and down the mountains of Wales, ensuring both their safety and enjoyment. As well as leading hikes I also take care of regular secretary duties such as meeting minutues and organising events."
          icon={Footprints}
          className="md:col-span-2"
          imageUrl="/static/images/aberhike.png?height=160&width=320"
        />
      </div>
    </div>
  )
}