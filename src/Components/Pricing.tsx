'use client'

import { motion } from 'framer-motion'
import { Zap, CreditCard, ArrowLeftRight, Clock } from 'lucide-react'
import ServiceCards from './ServiceCards'

const options = [
  "Déplacement international (+50% du tarif horaire)",
  "Tenues haute couture (supplément 100-300€)",
  "Location d'espaces privatifs (sur devis)",
  "Photographie professionnelle (option 200€/h)",
  "Activités spéciales (à convenir ensemble)"
]

const paymentMethods = [
  { label: "Coupon Transcash", icon: <CreditCard className="w-4 h-4" /> },
  { label: "Virement instantané", icon: <ArrowLeftRight className="w-4 h-4" /> },
  { label: "Wero", icon: <ArrowLeftRight className="w-4 h-4" /> },
]

export default function Pricing() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 100 } }
  }

  return (
    <section id="prestations" className="py-16" style={{ backgroundColor: '#0d0d0d' }}>
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center mb-10"
        >
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold font-serif mb-4">
            <span style={{ color: '#ec4899' }}>Prestations</span>{' '}
            <span className="text-white">&amp; Tarifs</span>
          </motion.h2>
          <motion.div variants={item}>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16" style={{ backgroundColor: '#3f3f46' }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#be185d' }} />
              <div className="h-px w-16" style={{ backgroundColor: '#3f3f46' }} />
            </div>
          </motion.div>
        </motion.div>

        {/* Cartes des prestations */}
        <ServiceCards />

        {/* Options premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl p-8 mb-8"
          style={{ backgroundColor: '#18181b', border: '1px solid #27272a' }}
        >
          <h3 className="text-lg font-bold mb-5 flex items-center gap-2 font-serif">
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-sm"
              style={{ backgroundColor: '#be185d' }}
            >✦</span>
            <span style={{ color: '#ec4899' }}>Options premium</span>
          </h3>
          <ul className="space-y-3">
            {options.map((option, i) => (
              <li key={i} className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: '#1a0a14', border: '1px solid #4a1030' }}
                >
                  <Zap className="w-3 h-3" style={{ color: '#f472b6' }} />
                </div>
                <span style={{ color: '#a1a1aa' }}>{option}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Notes & paiement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto space-y-4"
        >
          {/* Note indicative */}
          <p className="text-center text-sm" style={{ color: '#52525b' }}>
            * Les tarifs sont indicatifs et peuvent varier selon la complexité de la prestation
          </p>

          {/* Réservation obligatoire */}
          <div
            className="rounded-2xl p-5 flex items-start gap-4"
            style={{
              backgroundColor: '#18181b',
              border: '1px solid #27272a',
              borderLeft: '3px solid #be185d'
            }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#1a0a14', border: '1px solid #4a1030' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#f472b6' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Réservation obligatoire</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#71717a' }}>
                La réservation nécessite le paiement entier de votre tarif. Cela me permet de bloquer le créneau uniquement pour vous et de me préparer dans les meilleures conditions. Cette garantie témoigne de votre sérieux.
              </p>
            </div>
          </div>

          {/* Moyens de paiement */}
          <div
            className="rounded-2xl p-6 space-y-5"
            style={{ backgroundColor: '#18181b', border: '1px solid #27272a' }}
          >
            <h3
              className="font-semibold text-lg pb-3"
              style={{ color: '#e4e4e7', borderBottom: '1px solid #27272a' }}
            >
              Moyens de paiement acceptés
            </h3>

            <div className="flex flex-wrap gap-2 justify-center">
              {paymentMethods.map(({ label, icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold"
                  style={{ backgroundColor: '#1a0a14', color: '#f472b6', border: '1px solid #4a1030' }}
                >
                  {icon}
                  {label}
                </span>
              ))}
            </div>

            {/* Alerte espèces */}
            <div
              className="flex items-start gap-3 px-4 py-3 rounded-xl text-sm"
              style={{ backgroundColor: '#1a1200', border: '1px solid #3d2e00', color: '#fbbf24' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>Les espèces ne sont acceptées qu′à partir du deuxième rendez-vous</span>
            </div>

            {/* Annulation */}
            <div
              className="flex items-center justify-center gap-2 pt-2 text-sm"
              style={{ borderTop: '1px solid #27272a', color: '#52525b' }}
            >
              <Clock className="w-4 h-4" />
              <span>Annulation possible jusqu′à 24h avant le rendez-vous</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}