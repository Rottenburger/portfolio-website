"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function Navigation() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const isActive = (path: string) => pathname === path

  return (
    <header className="w-full px-6 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-100 dark:border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 flex items-center">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            Portfolio Website
          </Link>
        </div>

        <nav className="flex-1 hidden md:flex items-center justify-center space-x-8">
          <Link 
            href="/" 
            className={`transition-colors ${
              isActive("/") 
                ? "text-purple-600 font-medium" 
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link 
            href="/cv" 
            className={`transition-colors ${
              isActive("/cv") 
                ? "text-purple-600 font-medium" 
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            CV
          </Link>
          <Link 
            href="/projects" 
            className={`transition-colors ${
              isActive("/projects") 
                ? "text-purple-600 font-medium" 
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Projects
          </Link>
        </nav>

        <div className="flex-1 flex items-center justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle dark mode"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </Button>
        </div>
      </div>
    </header>
  )
}
