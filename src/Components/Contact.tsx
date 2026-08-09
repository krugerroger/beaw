'use client'

import { CONTACTS } from '@/data/contacts'
import { motion } from 'framer-motion'
import { Phone, Lock } from 'lucide-react'

export default function Contact() {

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 100 } }
  }

  const socials = [
    {
      href: CONTACTS.telegramLink,
      label: "Telegram",
      color: "#29b6f6",
      borderColor: "#0c3a52",
      hoverBorder: "#29b6f6",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z" />
        </svg>
      )
    },
    {
      href: CONTACTS.telegramChannel,
      label: "Canal Telegram",
      color: "#29b6f6",
      borderColor: "#0c3a52",
      hoverBorder: "#29b6f6",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z" />
        </svg>
      )
    },
    {
      href: CONTACTS.whatsappLink,
      label: "WhatsApp",
      color: "#4ade80",
      borderColor: "#14532d",
      hoverBorder: "#22c55e",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#0d0d0d' }}>
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            <span style={{ color: '#ec4899' }}>Contact</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16" style={{ backgroundColor: '#3f3f46' }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#be185d' }} />
            <div className="h-px w-16" style={{ backgroundColor: '#3f3f46' }} />
          </div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#71717a' }}>
            Pour toute demande de rendez-vous ou information complémentaire
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-8 max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Card principale */}
          <motion.div variants={item} className="w-full space-y-6">

            {/* Réserver maintenant */}
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: '#18181b', border: '1px solid #27272a' }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: '#be185d' }}>✦</span>
                <span style={{ color: '#ec4899' }}>Réserver maintenant</span>
              </h3>

              {/* Téléphone */}
              <div
                className="flex items-center gap-4 p-4 rounded-xl mb-5"
                style={{ backgroundColor: '#27272a', border: '1px solid #3f3f46' }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#1a0a14', border: '1px solid #4a1030' }}
                >
                  <Phone className="w-5 h-5" style={{ color: '#f472b6' }} />
                </div>
                <div>
                  <p className="font-medium text-white">Téléphone</p>
                  <p className="text-sm" style={{ color: '#52525b' }}>Disponible après réservation</p>
                </div>
              </div>

              {/* Séparateur */}
              <div className="mb-5" style={{ borderTop: '1px solid #27272a' }} />

              <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#52525b' }}>
                Réseaux professionnels
              </p>

              {/* Boutons réseaux */}
              <div className="flex flex-col gap-3">
                {socials.map(({ href, label, color, borderColor, hoverBorder, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      backgroundColor: '#27272a',
                      border: `1px solid ${borderColor}`,
                      color,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = hoverBorder
                      ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#2d2d30'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = borderColor
                      ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#27272a'
                    }}
                  >
                    {icon}
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Disclaimer confidentialité */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl p-5 flex items-start gap-3 text-sm"
              style={{ backgroundColor: '#18181b', border: '1px solid #27272a' }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: '#1a0a14', border: '1px solid #4a1030' }}
              >
                <Lock className="w-4 h-4" style={{ color: '#f472b6' }} />
              </div>
              <p style={{ color: '#71717a' }}>
                <strong className="text-white">Confidentialité :</strong>{' '}
                Réservé aux majeurs. Toute demande sera traitée avec la plus stricte discrétion. Vos informations ne seront jamais partagées avec des tiers.
              </p>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}