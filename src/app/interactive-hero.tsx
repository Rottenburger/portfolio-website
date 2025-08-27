"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Environment } from "@react-three/drei"
import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import * as THREE from "three"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"

// Interactive 3D Geometry Component
function InteractiveGeometry({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current && groupRef.current) {
      // Smooth rotation based on mouse position
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mousePosition.y * 0.3, 0.05)
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mousePosition.x * 0.3, 0.05)
    }
  })

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} position={[2, 0, 0]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#6366f1" wireframe transparent opacity={0.8} />
      </mesh>

      <mesh position={[-2, 1, -1]}>
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.7} />
      </mesh>

      <mesh position={[0, -1, 1]}>
        <tetrahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial color="#06b6d4" wireframe transparent opacity={0.6} />
      </mesh>
    </group>
  )
}

// Particle System Component
function ParticleField({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const pointsRef = useRef<THREE.Points>(null)
  const particleCount = 100

  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame((state) => {
    if (pointsRef.current) {
      // Very subtle, smooth rotation based on mouse position
      const targetRotationX = mousePosition.y * 0.01
      const targetRotationY = mousePosition.x * 0.01
      
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, targetRotationX, 0.01)
      pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, targetRotationY, 0.01)
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#ffffff" transparent opacity={0.8} sizeAttenuation />
    </points>
  )
}

// 3D Scene Component
function Scene({ mousePosition, isDark }: { mousePosition: { x: number; y: number }; isDark: boolean }) {
  return (
    <>
      <Environment preset={isDark ? "night" : "studio"} />
      <ambientLight intensity={isDark ? 0.4 : 0.5} />
      <pointLight position={[10, 10, 10]} intensity={isDark ? 1.2 : 1} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color={isDark ? "#a855f7" : "#8b5cf6"} />

      <InteractiveGeometry mousePosition={mousePosition} />
      <ParticleField mousePosition={mousePosition} />
    </>
  )
}

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 opacity-80">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ antialias: true, alpha: true }}>
            <Scene mousePosition={mousePosition} isDark={isDark} />
          </Canvas>
        </div>

        {/* Content Overlay - update all text colors for dark mode */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <Sparkles className="w-3 h-3 mr-1" />
                Welcome to my portfolio website!
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
            >
              Hi 👋 my name is
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Thomas Roethenbaugh
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              I&apos;m an IT professional just starting out in my career, currently working as an Support analyst in London and working on my own projects in my free time.
            </motion.p>

            {/* ... existing button code with dark mode classes ... */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <a href="/cv">
                  Here is my CV
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:bg-white/90 dark:hover:bg-slate-800/90 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <a
                  href="/projects"
                >
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Here are my projects
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-12 text-sm text-slate-500 dark:text-slate-400"
            >
              If you move your mouse you&apos;ll see the 3D elements move around :D
            </motion.div>
          </div>
        </div>

        {/* Gradient Overlays for Visual Enhancement */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-white/20 dark:to-slate-900/20 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/10 dark:from-slate-900/10 to-transparent pointer-events-none" />
      </div>
      <Footer />
    </>
  )
}
