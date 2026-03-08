'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: "Pierre",
    text: "Une soirée parfaite, Béatrice est une femme brillante autant par son esprit que par son élégance. Une conversation enrichissante et des moments de grande complicité.",
    rating: 5,
    date: "28/02/2026"
  },
  {
    id: 2,
    name: "Marc",
    text: "Discrète et attentionnée, Béatrice sait créer une atmosphère unique où l'on se sent immédiatement en confiance. Je recommande sans hésitation.",
    rating: 5,
    date: "02/02/2026"
  },
  {
    id: 3,
    name: "Thomas",
    text: "Rarement rencontré une personne aussi raffinée. Notre dîner à Paris restera un souvenir mémorable. Professionnalisme et naturel parfaitement équilibrés.",
    rating: 4,
    date: "14/01/2026"
  },
  {
    id: 4,
    name: "Nicolas",
    text: "Un week-end exceptionnel. Béatrice a su anticiper chaque détail pour rendre ces deux jours magiques. Une vraie connexion intellectuelle et sensuelle.",
    rating: 5,
    date: "06/12/2025"
  },
  {
    id: 5,
    name: "Alexandre",
    text: "Béatrice possède un charme rare et une écoute sincère. Chaque instant passé ensemble est marqué par sa délicatesse et son intelligence.",
    rating: 5,
    date: "21/10/2025"
  },
  {
    id: 6,
    name: "Julien",
    text: "Sa présence illumine littéralement une soirée. Élégante, cultivée et toujours souriante, elle sait rendre chaque moment inoubliable.",
    rating: 5,
    date: "03/07/2025"
  },
  {
    id: 7,
    name: "David",
    text: "Au-delà de sa beauté, c'est sa capacité à créer une complicité authentique qui m'a marqué. On oublie le temps en sa compagnie.",
    rating: 4,
    date: "18/04/2025"
  },
  {
    id: 8,
    name: "François",
    text: "Béatrice incarne la grâce et la modernité. Un dîner à ses côtés, c'est comme voyager dans un univers de raffinement et de charme.",
    rating: 5,
    date: "01/03/2025"
  }
]

export default function Testimonials() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 100 } }
  }

  return (
    <section id="testimonies" className="py-20" style={{ backgroundColor: '#0d0d0d' }}>
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            <span style={{ color: '#ec4899' }}>Ils me font</span>{' '}
            <span className="text-white">confiance</span>
          </h2>

          {/* Trait décoratif */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16" style={{ backgroundColor: '#3f3f46' }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#be185d' }} />
            <div className="h-px w-16" style={{ backgroundColor: '#3f3f46' }} />
          </div>

          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#71717a' }}>
            Des moments partagés, des souvenirs précieux. Voici ce que disent ceux qui ont apprécié ma compagnie.
          </p>
        </motion.div>

        {/* Grille témoignages */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-6 transition-all duration-300"
              style={{
                backgroundColor: '#18181b',
                border: '1px solid #27272a',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#3f3f46')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#27272a')}
            >
              {/* En-tête : avatar + nom + date */}
              <div className="flex items-center mb-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
                  style={{ backgroundColor: '#1a0a14', color: '#f472b6', border: '1px solid #4a1030' }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h3 className="font-bold text-white">{testimonial.name}</h3>
                  <p className="text-xs" style={{ color: '#52525b' }}>{testimonial.date}</p>
                </div>

                {/* Étoiles alignées à droite */}
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      style={{ fill: i < testimonial.rating ? '#fbbf24' : '#3f3f46' }}
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Guillemet décoratif */}
              <div className="mb-2" style={{ color: '#be185d', fontSize: '2.5rem', lineHeight: 1, fontFamily: 'Georgia, serif' }}>
                “
              </div>

              <blockquote className="text-base leading-relaxed italic" style={{ color: '#a1a1aa' }}>
                {testimonial.text}
              </blockquote>
            </motion.div>
          ))}
        </motion.div>

        {/* Note de bas de page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-xs" style={{ color: '#3f3f46' }}>
            * Tous les témoignages proviennent de rencontres réelles. Les prénoms ont été modifiés pour préserver l′anonymat.
          </p>
        </motion.div>

      </div>
    </section>
  )
}