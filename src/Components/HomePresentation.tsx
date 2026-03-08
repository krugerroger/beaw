'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomePresentation() {
  return (
    <section className="py-20" style={{ backgroundColor: '#0d0d0d' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Titre principal */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            <span style={{ color: '#ec4899' }}>Pour tout savoir</span>{' '}
            <span className="text-white">sur Béatrice</span>
          </h1>

          {/* Trait décoratif */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16" style={{ backgroundColor: '#3f3f46' }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#be185d' }} />
            <div className="h-px w-16" style={{ backgroundColor: '#3f3f46' }} />
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-10" style={{ color: '#a1a1aa' }}>
            Escort Girl Indépendante
          </h2>

          {/* Card principale */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl p-8 md:p-10 mb-10 text-left"
            style={{
              backgroundColor: '#18181b',
              border: '1px solid #27272a',
              boxShadow: '0 25px 50px rgba(0,0,0,0.4)'
            }}
          >
            {[
              {
                delay: 0.3,
                text: "Je m'appelle Béatrice, Française d'origine Américaine. Après une première carrière dans le cinéma adulte, j'ai choisi de me réinventer pour devenir Escort Girl indépendante et masseuse professionnelle, afin d'offrir une expérience unique, raffinée et inoubliable."
              },
              {
                delay: 0.5,
                text: "Aujourd'hui, j'incarne l'élégance et la sensualité d'une Courtisane VIP moderne : attentive, cultivée et passionnée, je propose des moments d'exception où séduction, complicité et plaisir se rencontrent harmonieusement."
              },
              {
                delay: 0.7,
                text: "Âgée de 28 ans, je suis une Escort Girl de luxe internationale et Call Girl indépendante basée en France, disponible aussi bien pour des rendez-vous privés que pour des déplacements, en France comme à l'étranger."
              },
              {
                delay: 0.9,
                text: "Je ne pratique cette activité que par choix et par plaisir, ce qui fait de chaque rencontre une expérience authentique, sincère et haut de gamme."
              }
            ].map(({ delay, text }, i) => (
              <motion.p
                key={i}
                className="text-lg md:text-xl leading-relaxed mb-6 last:mb-0"
                style={{ color: '#a1a1aa' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay }}
              >
                {text}
              </motion.p>
            ))}

            {/* Séparateur bas de carte */}
            <div className="mt-8 pt-6" style={{ borderTop: '1px solid #27272a' }}>
              <div className="flex flex-wrap gap-3 justify-center">
                {["Discrétion totale", "Luxe & raffinement", "France & international", "Sur rendez-vous"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: '#1a0a14', color: '#f472b6', border: '1px solid #4a1030' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3 text-lg font-bold text-white rounded-full transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#be185d',
                boxShadow: '0 8px 30px rgba(190,24,93,0.3)'
              }}
            >
              En savoir plus
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}