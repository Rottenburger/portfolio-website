"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react"

export function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/thomas-roethenbaugh-712b61149/",
      icon: Linkedin,
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      name: "GitHub",
      href: "https://github.com/Rottenburger",
      icon: Github,
      color: "hover:text-slate-900 dark:hover:text-slate-100",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/thomasroethenbaugh/",
      icon: Instagram,
      color: "hover:text-pink-600 dark:hover:text-pink-400",
    },
    {
      name: "Email",
      href: "mailto:roethenbaughthomas@gmail.com",
      icon: Mail,
      color: "hover:text-green-600 dark:hover:text-green-400",
    },
  ]

  return (
    <footer className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200/20 dark:border-slate-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all duration-300 ${link.color} hover:shadow-lg hover:shadow-slate-200 dark:hover:shadow-slate-800`}
              >
                <link.icon className="w-5 h-5" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-slate-600 dark:text-slate-400"
          >
            <p className="flex items-center justify-center space-x-1 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by Thomas Roethenbaugh</span>
            </p>
            <p className="text-xs mt-2">© {new Date().getFullYear()} All rights reserved.</p>
          </motion.div>

          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
            >
              Back to Top
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
