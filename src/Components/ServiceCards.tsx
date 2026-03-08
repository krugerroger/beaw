'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export type Offer = {
  id: number
  title: string
  description: string
  highlights: string[]
  price: {
    duration: string
    amount: string
  }[]
}

const services: Offer[] = [
  {
    id: 1,
    title: "Moment Intime",
    description: "Expérience sensuelle complète alliant tendresse et passion",
    highlights: [
      "✨ Moments complices ou intenses (GFE / PSE)",
      "🔁 Plusieurs instants plaisir / heure (Extraball)",
      "👠 Sorties privées – Club, Sauna",
      "💆‍♀️ Massages relaxants et sensuels",
      "🎭 Fantasmes – Jeux de rôles, strip discret",
      "💞 Préliminaires variés, douceur ou passion",
      "🖤 Sensualité & fétichismes sur demande",
      "🔥 Expériences personnalisées & raffinées",
      "🍑 Découvertes – Toys, duo, sensations fortes",
      "🔞 Plaisirs spécifiques avec respect & hygiène",
    ],
    price: [
      { duration: "1 heure",        amount: "200€"  },
      { duration: "1 heure 30",     amount: "300€"  },
      { duration: "2 heures",       amount: "400€"  },
      { duration: "3 heures",       amount: "500€"  },
      { duration: "4 heures",       amount: "650€"  },
      { duration: "Une nuit",       amount: "1000€" },
      { duration: "Journée entière",amount: "1500€" },
      { duration: "Week-end",       amount: "2000€" },
    ]
  },
]

const ServiceCards = () => {
  const router = useRouter()

  const handleSelect = (data: Offer) => {
    router.push(`/reservation?data=${encodeURIComponent(JSON.stringify(data))}`)
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 py-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -4 }}
          className="rounded-2xl overflow-hidden transition-all duration-300"
          style={{
            backgroundColor: '#18181b',
            border: '1px solid #27272a',
            boxShadow: '0 4px 24px rgba(0,0,0,0.4)'
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = '#3f3f46')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = '#27272a')}
        >
          <div className="p-6 space-y-6">

            {/* Titre + description */}
            <div>
              <h3
                className="text-2xl font-bold font-serif mb-2"
                style={{ color: '#ec4899' }}
              >
                {service.title}
              </h3>
              <p className="text-sm" style={{ color: '#71717a' }}>
                {service.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-2.5">
              {service.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: '#1a0a14', border: '1px solid #4a1030' }}
                  >
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#f472b6' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Séparateur */}
            <div style={{ borderTop: '1px solid #27272a' }} />

            {/* Tarifs */}
            <div
              className="rounded-xl p-4"
              style={{ backgroundColor: '#27272a' }}
            >
              <h4
                className="font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2"
                style={{ color: '#f472b6' }}
              >
                <span
                  className="w-5 h-5 rounded flex items-center justify-center text-white text-xs"
                  style={{ backgroundColor: '#be185d' }}
                >✦</span>
                Options disponibles
              </h4>
              <ul className="space-y-2">
                {service.price.map((option, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center py-1.5 text-sm"
                    style={{ borderBottom: idx < service.price.length - 1 ? '1px solid #3f3f46' : 'none' }}
                  >
                    <span style={{ color: '#a1a1aa' }}>{option.duration}</span>
                    <span
                      className="font-black text-base"
                      style={{ color: '#f472b6' }}
                    >
                      {option.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex justify-end">
              <button
                onClick={() => handleSelect(service)}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: '#be185d',
                  boxShadow: '0 6px 24px rgba(190,24,93,0.3)'
                }}
              >
                Réserver
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ServiceCards