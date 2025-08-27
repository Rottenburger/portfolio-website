"use client"


import Image from "next/image"
import { Camera, MapPin, Calendar, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { BlobPhoto } from "@/lib/blob-utils"

interface HikingPhoto {
  id: string
  title: string
  location: string
  date: string
  category: string
  image: string
  description: string
}

const categories = [
  "All",
  "Peaks",
  "Trails",
  "Lakes",
  "Waterfalls",
  "Coastal",
  "Plains",
]

// Function to map Blob photos to hiking photo format
function mapBlobToHikingPhoto(blobPhoto: BlobPhoto, index: number): HikingPhoto {
  // Extract location and category from filename if possible
  const filename = blobPhoto.filename.toLowerCase()
  
  // Determine category based on filename or default to "Trails"
  let category = "Trails"
  if (filename.includes("peak") || filename.includes("mountain") || filename.includes("summit") || filename.includes("cadair") || filename.includes("snowdon") || filename.includes("fan") || filename.includes("tryfan") || filename.includes("skiddaw")) {
    category = "Peaks"
  } else if (filename.includes("lake") || filename.includes("water") || filename.includes("llyn") || filename.includes("elan")) {
    category = "Lakes"
  } else if (filename.includes("canyon") || filename.includes("valley") || filename.includes("cwm") || filename.includes("dinas")) {
    category = "Canyons"
  } else if (filename.includes("waterfall") || filename.includes("cascade") || filename.includes("pistyll") || filename.includes("swallow") || filename.includes("aber") || filename.includes("sgwd")) {
    category = "Waterfalls"
  } else if (filename.includes("coastal") || filename.includes("coast") || filename.includes("aberystwyth") || filename.includes("pembrokeshire") || filename.includes("anglesey") || filename.includes("llyn peninsula")) {
    category = "Coastal"
  } else if (filename.includes("glacier") || filename.includes("ice")) {
    category = "Glaciers"
  } else if (filename.includes("prairie") || filename.includes("plains") || filename.includes("meadow")) {
    category = "Plains"
  } else if (filename.includes("cave") || filename.includes("cavern")) {
    category = "Caves"
  }

  // Generate a title from the filename
  const title = blobPhoto.filename
    .replace(/\.(jpg|jpeg|png|gif|webp)$/i, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())

  // Generate location based on category (you can customize this)
  const locations = {
    "Peaks": ["Cadair Idris, Wales", "Snowdon, Wales", "Pen y Fan, Wales", "Tryfan, Wales"],
    "Trails": ["Wales Coast Path", "Offa's Dyke Path", "Cambrian Way", "Glyndwr's Way"],
    "Lakes": ["Llyn Tegid (Bala Lake), Wales", "Llyn Vyrnwy, Wales", "Llyn Cau, Wales", "Elan Valley Lakes"],
    "Canyons": ["Cwm Idwal, Wales", "Cwm Bochlwyd, Wales", "Cwm Lloer, Wales", "Cwm Cau, Wales"],
    "Waterfalls": ["Pistyll Rhaeadr, Wales", "Swallow Falls, Wales", "Aber Falls, Wales", "Sgwd Clun Gwyn, Wales"],
    "Coastal": ["Aberystwyth Coast", "Pembrokeshire Coast", "Anglesey Coast", "Llyn Peninsula"],
    "Glaciers": ["Cwm Idwal, Wales", "Cwm Cau, Wales", "Cwm Bochlwyd, Wales", "Cwm Lloer, Wales"],
    "Plains": ["Elan Valley", "Cambrian Mountains", "Brecon Beacons", "Black Mountains"],
    "Caves": ["Ogof Ffynnon Ddu, Wales", "Dan-yr-Ogof, Wales", "Porth yr Ogof, Wales", "Ogof Agen Allwedd, Wales"]
  }

  const categoryLocations = locations[category as keyof typeof locations] || ["Various Locations"]
  const location = categoryLocations[index % categoryLocations.length]

  // Generate date based on upload time with safe fallback
  let date: string;
  try {
    if (blobPhoto.uploadedAt && !isNaN(blobPhoto.uploadedAt.getTime())) {
      const months = ["January", "February", "March", "April", "May", "June", 
                      "July", "August", "September", "October", "November", "December"]
      const uploadDate = blobPhoto.uploadedAt
      date = `${months[uploadDate.getMonth()]} ${uploadDate.getFullYear()}`
    } else {
      date = "Recently Added"
    }
  } catch (error) {
    console.warn('Error formatting date for photo:', blobPhoto.filename, error)
    date = "Recently Added"
  }

  // Generate description based on category and title
  const descriptions = {
    "Peaks": "Breathtaking views from the summit after a challenging hike",
    "Trails": "Beautiful trail through diverse landscapes and terrain",
    "Lakes": "Serene alpine lake with crystal clear waters",
    "Canyons": "Dramatic rock formations and narrow passages",
    "Waterfalls": "Majestic waterfall cascading down rocky cliffs",
    "Coastal": "Stunning coastal views with dramatic ocean scenery",
    "Glaciers": "Ancient glacial ice with stunning blue crevasses",
    "Plains": "Vast open landscapes with endless horizons",
    "Caves": "Underground adventure through natural formations"
  }

  const description = descriptions[category as keyof typeof descriptions] || "Beautiful hiking adventure captured in nature"

  return {
    id: blobPhoto.pathname,
    title,
    location,
    date,
    category,
    image: blobPhoto.url,
    description,
  }
}

export default function HikingPhotosPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredPhoto, setHoveredPhoto] = useState<string | null>(null)
  const [hikingPhotos, setHikingPhotos] = useState<HikingPhoto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedPhoto, setSelectedPhoto] = useState<HikingPhoto | null>(null)

  useEffect(() => {
    async function fetchHikingPhotos() {
      try {
        setLoading(true)
        const response = await fetch('/api/hiking-photos')
        
        if (!response.ok) {
          throw new Error('Failed to fetch hiking photos')
        }
        
        const data = await response.json()
        const mappedPhotos = data.photos.map((blobPhoto: BlobPhoto, index: number) => 
          mapBlobToHikingPhoto(blobPhoto, index)
        )
        
        setHikingPhotos(mappedPhotos)
        setError(null)
      } catch (err) {
        console.error('Error fetching hiking photos:', err)
        setError(err instanceof Error ? err.message : 'Failed to fetch photos')
      } finally {
        setLoading(false)
      }
    }

    fetchHikingPhotos()
  }, [])

  const filteredPhotos =
    selectedCategory === "All" ? hikingPhotos : hikingPhotos.filter((photo) => photo.category === selectedCategory)

  const openModal = (photo: HikingPhoto) => {
    setSelectedPhoto(photo)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  const closeModal = () => {
    setSelectedPhoto(null)
    document.body.style.overflow = 'unset' // Restore scrolling
  }

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    if (selectedPhoto) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [selectedPhoto])

  if (loading) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Loading hiking photos...</p>
          </div>
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Error Loading Photos</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-16">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
              <Camera className="w-4 h-4 mr-2" />
              Adventure Photography
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Hiking</span>{" "}
              Photos
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              This page is dedicated to the many hiking photos I have taken over the years I&apos;ve spent in Wales and the
              the Lake District. I used a Vercel Blob database to store the photos and then used Next.js to display them. Hope you enjoy!
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
                    : "bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 border border-gray-200 dark:border-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          {filteredPhotos.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">📷</div>
              <h3 className="text-xl font-medium text-gray-600 dark:text-gray-300 mb-2">No photos found</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {selectedCategory === "All" 
                  ? "No hiking photos have been uploaded yet." 
                  : `No photos found in the "${selectedCategory}" category.`
                }
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onMouseEnter={() => setHoveredPhoto(photo.id)}
                  onMouseLeave={() => setHoveredPhoto(null)}
                  onClick={() => openModal(photo)}
                >
                  {/* Photo Container with Next.js Image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="relative w-full h-64">
                      <Image
                        src={photo.image}
                        alt={photo.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        quality={85}
                        priority={false}
                        loading="lazy"
                      />
                    </div>

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-gray-800 dark:text-white text-xs font-medium">
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
          )}

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">{hikingPhotos.length}</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Photos in Database</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Countries Hiked</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Miles Hiked</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">30+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Peaks Summited</div>
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center py-8 border-t">
            <p className="text-slate-600">© 2025 Thomas Roethenbaugh</p>
          </footer>

        </main>
      </div>

      {/* Full-Screen Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-[90vh] mx-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Photo Container */}
            <div className="relative w-full h-full">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                quality={95}
                priority
              />
            </div>

            {/* Photo Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
              <h3 className="text-xl font-bold mb-2">{selectedPhoto.title}</h3>
              <div className="flex items-center text-sm text-white/90 mb-1">
                <MapPin className="w-4 h-4 mr-2" />
                {selectedPhoto.location}
              </div>
              <div className="flex items-center text-sm text-white/90 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                {selectedPhoto.date}
              </div>
              <p className="text-sm text-white/80">{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
