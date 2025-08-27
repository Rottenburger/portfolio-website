"use client"

import Link from "next/link"
import { Moon, Camera, MapPin, Calendar } from "lucide-react"
import { useState } from "react"

const hikingPhotos = [
  {
    id: 1,
    title: "Mountain Peak Sunrise",
    location: "Rocky Mountains, Colorado",
    date: "March 2024",
    category: "Peaks",
    image: "/mountain-peak-sunrise-golden-hour-hiking.png",
    description: "Breathtaking sunrise view from the summit after a challenging night hike",
  },
  {
    id: 2,
    title: "Forest Trail Adventure",
    location: "Pacific Northwest",
    date: "February 2024",
    category: "Trails",
    image: "/forest-hiking-trail-trees-nature-path.png",
    description: "Winding through ancient forest paths covered in morning mist",
  },
  {
    id: 3,
    title: "Alpine Lake Reflection",
    location: "Glacier National Park",
    date: "January 2024",
    category: "Lakes",
    image: "/alpine-lake-mountain-reflection-crystal-clear-wate.png",
    description: "Perfect mirror reflection of snow-capped peaks in pristine alpine lake",
  },
  {
    id: 4,
    title: "Desert Canyon Hike",
    location: "Zion National Park",
    date: "December 2023",
    category: "Canyons",
    image: "/desert-canyon-red-rocks-hiking-trail.png",
    description: "Exploring the dramatic red rock formations and narrow slot canyons",
  },
  {
    id: 5,
    title: "Waterfall Discovery",
    location: "Yosemite Valley",
    date: "November 2023",
    category: "Waterfalls",
    image: "/waterfall-hiking-nature-cascade-rocks.png",
    description: "Hidden waterfall found after hours of off-trail exploration",
  },
  {
    id: 6,
    title: "Ridge Line Views",
    location: "Appalachian Trail",
    date: "October 2023",
    category: "Peaks",
    image: "/mountain-ridge-hiking-trail-panoramic-view.png",
    description: "Panoramic views along the famous Appalachian ridge line",
  },
  {
    id: 7,
    title: "Autumn Forest Path",
    location: "Vermont Mountains",
    date: "September 2023",
    category: "Trails",
    image: "/autumn-forest-hiking-colorful-leaves-trail.png",
    description: "Vibrant fall colors creating a natural tunnel along the hiking path",
  },
  {
    id: 8,
    title: "Coastal Cliff Walk",
    location: "Big Sur, California",
    date: "August 2023",
    category: "Coastal",
    image: "/coastal-cliff-hiking-ocean-waves-dramatic.png",
    description: "Dramatic coastal cliffs with crashing waves hundreds of feet below",
  },
  {
    id: 9,
    title: "Glacier Adventure",
    location: "Alaska Range",
    date: "July 2023",
    category: "Glaciers",
    image: "/glacier-hiking-ice-blue-crevasses-mountain.png",
    description: "Traversing ancient glacial ice with stunning blue crevasses",
  },
  {
    id: 10,
    title: "Prairie Wildflowers",
    location: "Montana Plains",
    date: "June 2023",
    category: "Plains",
    image: "/prairie-wildflowers-hiking-grassland-colorful.png",
    description: "Endless fields of wildflowers during peak blooming season",
  },
  {
    id: 11,
    title: "Cave Exploration",
    location: "Mammoth Cave, Kentucky",
    date: "May 2023",
    category: "Caves",
    image: "/cave-exploration-hiking-underground-formations.png",
    description: "Underground adventure through limestone cave formations",
  },
  {
    id: 12,
    title: "Snow Peak Challenge",
    location: "Mount Rainier",
    date: "April 2023",
    category: "Peaks",
    image: "/snow-mountain-peak-hiking-winter-climbing.png",
    description: "Challenging winter ascent through deep snow and ice",
  },
]

const categories = [
  "All",
  "Peaks",
  "Trails",
  "Lakes",
  "Canyons",
  "Waterfalls",
  "Coastal",
  "Glaciers",
  "Plains",
  "Caves",
]

export default function HikingPhotosPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null)

  const filteredPhotos =
    selectedCategory === "All" ? hikingPhotos : hikingPhotos.filter((photo) => photo.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-purple-600">
            Portfolio
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/cv" className="text-gray-600 hover:text-gray-900 transition-colors">
              CV
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">
              Projects
            </Link>
            <Link href="/hiking-photos" className="text-gray-900 font-medium">
              Hiking Photos
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </nav>

          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Toggle dark mode">
            <Moon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
            <Camera className="w-4 h-4 mr-2" />
            Adventure Photography
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Hiking</span>{" "}
            Photos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of breathtaking moments captured during my hiking adventures across diverse landscapes. Each
            photo tells a story of exploration, challenge, and natural beauty.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredPhoto(photo.id)}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              {/* Photo Container */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={photo.image || "/placeholder.svg"}
                  alt={photo.title}
                  className="w-full h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium">
                    {photo.category}
                  </span>
                </div>

                {/* Photo Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg font-bold mb-2">{photo.title}</h3>
                  <div className="flex items-center text-sm text-white/90 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {photo.location}
                  </div>
                  <div className="flex items-center text-sm text-white/90 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    {photo.date}
                  </div>
                  <p className="text-sm text-white/80 line-clamp-2">{photo.description}</p>
                </div>
              </div>

              {/* Fun Grow Effect Border */}
              <div
                className={`absolute inset-0 rounded-2xl border-4 border-purple-400 opacity-0 transition-all duration-500 ${
                  hoveredPhoto === photo.id ? "opacity-100 scale-105" : "scale-100"
                }`}
                style={{
                  boxShadow: hoveredPhoto === photo.id ? "0 20px 40px rgba(147, 51, 234, 0.3)" : "none",
                }}
              />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">{hikingPhotos.length}</div>
            <div className="text-gray-600 font-medium">Photos Captured</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-600 font-medium">States Explored</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Miles Hiked</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Peaks Summited</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to see more adventures?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Follow my hiking journey on social media for real-time updates, trail tips, and behind-the-scenes moments
            from my outdoor adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              View My Projects
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
