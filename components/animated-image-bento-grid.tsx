"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LucideIcon, Sparkles, Zap, Flame, Laugh, Music, Palette } from "lucide-react"
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
    <div className="container mx-auto p-8 bg-gray-900 min-h-screen">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-100">Work Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <BentoCard
          title="IT Analyst at G-Research"
          description="In this role I worked for 14 months as an IT Analyst, providing first, second and thrid-line support as well as asisting seinor members of the team in IT Engineering projects and Cyber security operations"
          icon={Sparkles}
          className="md:col-span-2"
          imageUrl="/static/images/soho.PNG?height=160&width=320"
        />
        <BentoCard
          title="Lightning Fast"
          description="Experience unparalleled speed and efficiency with our optimized performance responsive design."
          icon={Zap}
          imageUrl="/static/images/outlinewales.jpg?height=160&width=160"
        />
        <BentoCard
          title="Trending Now"
          description="Stay ahead of the curve with access to hottest features and latest trends in industry."
          icon={Flame}
          imageUrl="/placeholder.svg?height=160&width=160"
        />
        <BentoCard
          title="Fun and Engaging"
          description="Enjoy a delightful and interactive user experience that keeps you coming back for more."
          icon={Laugh}
          className="md:col-span-2"
          imageUrl="/placeholder.svg?height=160&width=320"
        />
        <BentoCard
          title="Harmonious Design"
          description="Immerse yourself in a beautifully crafted interface that balances aesthetics and functionality."
          icon={Music}
        />
        <BentoCard
          title="Customizable Themes"
          description="Personalize your experience with our flexible theming options. Tailor the look and feel to match unique style preferences."
          icon={Palette}
          className="md:col-span-2"
          imageUrl="/placeholder.svg?height=160&width=320"
        />
      </div>
    </div>
  )
}