'use client'

import { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'
import { Booker } from './Book'

export default function Hero() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <section className="relative h-screen min-h-[800px] max-w-screen overflow-hidden">

      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bea_hero.jpeg"
          alt="Béatrice - Escort Premium"
          fill
          className="object-cover object-center"
          loading="lazy"
          quality={100}
        />
        {/* Overlay sombre — cohérent avec le thème #0d0d0d */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(13,13,13,0.97) 0%, rgba(13,13,13,0.65) 40%, rgba(13,13,13,0.25) 100%)'
          }}
        />
        {/* Subtil vignette latérale gauche */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(13,13,13,0.7) 0%, transparent 60%)'
          }}
        />
      </div>

      {/* Contenu animé */}
      <motion.div
        className="container mx-auto px-6 h-full flex items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl">

          {/* Badge discrétion — repris du BookingForm */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-4 h-4" style={{ color: '#f472b6' }} />
            <span
              className="text-xs uppercase tracking-widest font-semibold"
              style={{ color: '#a1a1aa' }}
            >
              Discrétion garantie
            </span>
            {/* Trait séparateur */}
            <div className="h-px w-12" style={{ backgroundColor: '#3f3f46' }} />
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight font-serif"
            variants={itemVariants}
          >
            Béatrice –{' '}
            <span className="italic" style={{ color: '#ec4899' }}>
              Escort professionnelle
            </span>{' '}
            en France
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            className="text-xl md:text-2xl mb-3 font-light font-sans"
            style={{ color: '#f9a8d4' }}
            variants={itemVariants}
          >
            Discrétion, élégance et moments inoubliables
          </motion.p>

          {/* Ligne décorative */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="h-px w-24" style={{ backgroundColor: '#be185d' }} />
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <Booker />
          </motion.div>

        </div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.4, 0.9, 0.4]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="text-xs uppercase tracking-widest" style={{ color: '#52525b' }}>Découvrir</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          style={{ color: '#71717a' }}
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>

    </section>
  )
}