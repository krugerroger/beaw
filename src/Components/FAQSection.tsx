"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "Comment puis-je réserver un rendez-vous ?",
    answer: "Contactez moi via l'un de mes réseaux professionnels (Telegram ou Instagram) dans la section «Contact». C'est simple et rapide !"
  },
  {
    question: "Quels sont vos modes de paiement ?",
    answer: "Nous acceptons les cartes Mastercard, PayPal, recharge TRANSCASH, PCS, Néosurf ainsi que les virements bancaires. Tous les paiements sont sécurisés."
  },
  {
    question: "Puis-je annuler ma réservation ?",
    answer: "Oui, vous pouvez annuler à tout moment jusqu'à 24h avant le rendez-vous et vous faire rembourser votre acompte de réservation. Aucun frais caché."
  },
  {
    question: "Comment contacter le support ?",
    answer: "Remplissez le formulaire de contact dans la section «Contact». Notre équipe est disponible 24/7."
  }
]

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20" style={{ backgroundColor: '#0d0d0d' }}>
      <div className="container mx-auto px-4 max-w-3xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            <span style={{ color: '#ec4899' }}>Questions</span>{' '}
            <span className="text-white">fréquentes</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16" style={{ backgroundColor: '#3f3f46' }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#be185d' }} />
            <div className="h-px w-16" style={{ backgroundColor: '#3f3f46' }} />
          </div>
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  backgroundColor: '#18181b',
                  border: `1px solid ${isOpen ? '#be185d' : '#27272a'}`,
                  boxShadow: isOpen ? '0 0 20px rgba(190,24,93,0.12)' : 'none'
                }}
              >
                {/* Question */}
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 transition-colors duration-200"
                  style={{ backgroundColor: isOpen ? '#1a0a14' : 'transparent' }}
                  onClick={() => toggle(index)}
                >
                  <span
                    className="text-base md:text-lg font-medium"
                    style={{ color: isOpen ? '#f472b6' : '#e4e4e7' }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className="flex-shrink-0 w-5 h-5 transition-transform duration-300"
                    style={{
                      color: isOpen ? '#f472b6' : '#52525b',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  />
                </button>

                {/* Réponse animée */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        className="px-6 pb-5"
                        style={{ borderTop: '1px solid #27272a' }}
                      >
                        <p className="pt-4 text-base leading-relaxed" style={{ color: '#a1a1aa' }}>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA bas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="mb-5" style={{ color: '#52525b' }}>
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 text-base font-bold text-white rounded-full transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#be185d',
              boxShadow: '0 8px 30px rgba(190,24,93,0.3)'
            }}
          >
            Contactez-nous
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default FAQSection