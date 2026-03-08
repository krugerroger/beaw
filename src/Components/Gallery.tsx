'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { id: 1,  src: '/gallery/1.jpeg',  alt: 'Béatrice en tenue de soirée au restaurant', category: 'intérieur', blurred: false },
  { id: 2,  src: '/gallery/2.jpeg',  alt: 'Béatrice en ville, tenue élégante',          category: 'intérieur', blurred: false },
  { id: 3,  src: '/gallery/3.jpeg',  alt: 'Ambiance intérieure chic',                   category: 'intérieur', blurred: false },
  { id: 4,  src: '/gallery/4.jpeg',  alt: 'Soirée romantique',                           category: 'intérieur', blurred: false },
  { id: 5,  src: '/gallery/5.jpeg',  alt: 'Moment détente en lounge',                   category: 'intérieur', blurred: false },
  { id: 6,  src: '/gallery/6.jpeg',  alt: 'Cocktail en terrasse',                        category: 'intérieur', blurred: false },
  { id: 7,  src: '/gallery/7.jpeg',  alt: 'Cocktail en terrasse',                        category: 'intérieur', blurred: false },
  { id: 8,  src: '/gallery/8.jpeg',  alt: 'Cocktail en terrasse',                        category: 'intérieur', blurred: false },
  { id: 9,  src: '/gallery/9.jpeg',  alt: 'Cocktail en terrasse',                        category: 'intérieur', blurred: false },
  { id: 10, src: '/gallery/10.jpeg', alt: 'Cocktail en terrasse',                        category: 'intérieur', blurred: false },
  { id: 11, src: '/gallery/11.jpeg', alt: 'Cocktail en terrasse',                        category: 'intérieur', blurred: false },
  { id: 12, src: '/gallery/12.jpeg', alt: 'Cocktail en terrasse',                        category: 'intérieur', blurred: false },
  { id: 13, src: '/gallery/13.jpeg', alt: 'Cocktail en terrasse',                        category: 'ville',     blurred: false },
  { id: 14, src: '/gallery/14.jpeg', alt: 'Cocktail en terrasse',                        category: 'intérieur', blurred: false },
  { id: 15, src: '/gallery/15.jpeg', alt: 'Cocktail en terrasse',                        category: 'ville',     blurred: false },
  { id: 16, src: '/gallery/16.jpeg', alt: 'Cocktail en terrasse',                        category: 'soirée',    blurred: false },
  { id: 17, src: '/gallery/17.jpeg', alt: 'Cocktail en terrasse',                        category: 'intérieur', blurred: false },
  { id: 18, src: '/gallery/18.jpeg', alt: 'Cocktail en terrasse',                        category: 'intérieur', blurred: false },
  { id: 19, src: '/gallery/19.jpeg', alt: 'Cocktail en terrasse',                        category: 'soirée',    blurred: false },
  { id: 20, src: '/gallery/20.jpeg', alt: 'Cocktail en terrasse',                        category: 'soirée',    blurred: false },
  { id: 21, src: '/gallery/21.jpeg', alt: 'Cocktail en terrasse',                        category: 'soirée',    blurred: false },
  { id: 22, src: '/gallery/22.jpeg', alt: 'Cocktail en terrasse',                        category: 'intérieur', blurred: false },
  { id: 23, src: '/gallery/23.jpeg', alt: 'Cocktail en terrasse',                        category: 'ville',     blurred: false },
  { id: 24, src: '/gallery/24.jpeg', alt: 'Cocktail en terrasse',                        category: 'ville',     blurred: false },
  { id: 25, src: '/gallery/25.jpeg', alt: 'Cocktail en terrasse',                        category: 'ville',     blurred: false },
  { id: 26, src: '/gallery/26.jpeg', alt: 'Cocktail en terrasse',                        category: 'soirée',    blurred: false },
  { id: 27, src: '/gallery/27.jpeg', alt: 'Cocktail en terrasse',                        category: 'soirée',    blurred: false },
]

const categories = [
  { key: 'tous',      label: 'Tous' },
  { key: 'soirée',   label: 'Soirées' },
  { key: 'ville',    label: 'Ville' },
  { key: 'intérieur', label: 'Intérieurs' },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>('tous')

  const filteredImages = filter === 'tous'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter)

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring' as const, stiffness: 120 } }
  }

  const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
  const goPrev = () => {
    const prev = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    setSelectedImage(galleryImages[prev].id)
  }
  const goNext = () => {
    const next = (currentIndex + 1) % galleryImages.length
    setSelectedImage(galleryImages[next].id)
  }

  return (
    <section id="gallery" className="py-20" style={{ backgroundColor: '#0d0d0d' }}>
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            <span style={{ color: '#ec4899' }}>Galerie</span>
          </h2>

          {/* Trait décoratif */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16" style={{ backgroundColor: '#3f3f46' }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#be185d' }} />
            <div className="h-px w-16" style={{ backgroundColor: '#3f3f46' }} />
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(({ key, label }) => {
              const isActive = filter === key
              return (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className="px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-200"
                  style={isActive
                    ? { backgroundColor: '#be185d', color: '#fff', boxShadow: '0 4px 15px rgba(190,24,93,0.35)' }
                    : { backgroundColor: '#18181b', color: '#71717a', border: '1px solid #27272a' }
                  }
                >
                  {label}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Grille */}
        <motion.div
          key={filter}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-square overflow-hidden cursor-pointer"
              style={{ borderRadius: '12px', border: '1px solid #27272a' }}
              onClick={() => setSelectedImage(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover select-none transition-transform duration-500 hover:scale-105"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />

              {/* Overlay hover */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end"
                style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.85) 0%, transparent 60%)' }}
              >
                <div className="p-3">
                  <span className="text-xs uppercase tracking-widest font-semibold"
                    style={{ color: '#f472b6' }}>
                    {image.category}
                  </span>
                </div>
              </div>

              {/* Filigrane */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-xs"
                  style={{ backgroundColor: 'rgba(0,0,0,0.7)', color: 'rgba(255,255,255,0.6)' }}
                >
                  ©{new Date().getFullYear()} Béatrice Meyer
                </div>
              </div>

              {/* Flou si nécessaire */}
              {image.blurred && (
                <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                  <span className="text-white font-medium text-sm">Cliquer pour voir</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(13,13,13,0.97)', backdropFilter: 'blur(8px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Bouton fermeture */}
            <button
              className="absolute top-5 right-5 z-10 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
              style={{ backgroundColor: '#27272a', color: '#a1a1aa', border: '1px solid #3f3f46' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#be185d'; (e.currentTarget as HTMLButtonElement).style.color = '#fff' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#27272a'; (e.currentTarget as HTMLButtonElement).style.color = '#a1a1aa' }}
              onClick={() => setSelectedImage(null)}
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation gauche */}
            <button
              className="absolute left-4 md:left-6 z-10 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200"
              style={{ backgroundColor: '#18181b', color: '#a1a1aa', border: '1px solid #27272a' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#be185d'; (e.currentTarget as HTMLButtonElement).style.color = '#f472b6' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#27272a'; (e.currentTarget as HTMLButtonElement).style.color = '#a1a1aa' }}
              onClick={goPrev}
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Navigation droite */}
            <button
              className="absolute right-4 md:right-6 z-10 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200"
              style={{ backgroundColor: '#18181b', color: '#a1a1aa', border: '1px solid #27272a' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#be185d'; (e.currentTarget as HTMLButtonElement).style.color = '#f472b6' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#27272a'; (e.currentTarget as HTMLButtonElement).style.color = '#a1a1aa' }}
              onClick={goNext}
              aria-label="Image suivante"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image principale */}
            <div className="relative w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden"
              style={{ border: '1px solid #27272a' }}>
              <Image
                src={galleryImages.find(img => img.id === selectedImage)!.src}
                alt={galleryImages.find(img => img.id === selectedImage)!.alt}
                fill
                className="object-contain select-none"
                draggable="false"
                priority
                quality={100}
                onContextMenu={(e) => e.preventDefault()}
              />

              {/* Filigrane lightbox */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `repeating-linear-gradient(-45deg, rgba(255,255,255,0.08), rgba(255,255,255,0.08) 1px, transparent 1px, transparent 10px)`
                  }}
                />
                <div
                  className="absolute bottom-4 right-4 px-3 py-1 rounded-lg text-sm backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(0,0,0,0.75)', color: 'rgba(255,255,255,0.65)' }}
                >
                  ©{new Date().getFullYear()} Béatrice Meyer
                </div>
              </div>

              {/* Catégorie + position */}
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <span
                  className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#1a0a14', color: '#f472b6', border: '1px solid #4a1030' }}
                >
                  {galleryImages.find(img => img.id === selectedImage)!.category}
                </span>
                <span className="text-xs" style={{ color: '#52525b' }}>
                  {currentIndex + 1} / {galleryImages.length}
                </span>
              </div>
            </div>

            {/* Indicateurs de position */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
              {galleryImages.map((img) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(img.id)}
                  className="rounded-full transition-all duration-200"
                  style={{
                    width: img.id === selectedImage ? '20px' : '6px',
                    height: '6px',
                    backgroundColor: img.id === selectedImage ? '#be185d' : '#3f3f46'
                  }}
                  aria-label={`Image ${img.id}`}
                />
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  )
}