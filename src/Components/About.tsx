'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100
      }
    }
  }

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col lg:flex-row gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {/* Image de profil */}
          <motion.div 
            variants={item}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-pink-200 shadow-lg">
              <Image
                src="/bea_about.jpeg" // Remplacez par votre image
                alt="Béatrice - Portrait"
                fill
                className="object-cover"
                priority
                  unoptimized
              />
            </div>
          </motion.div>

          {/* Texte de présentation */}
          <motion.div 
            variants={container}
            className="w-full lg:w-2/3 space-y-6"
          >
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-pink-600 font-serif">
              À Propos de Béatrice
            </motion.h2>

            <motion.div variants={item} className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-base-200 p-3 rounded-box text-center">
                  <p className="text-sm text-base-content/70">Âge</p>
                  <p className="font-bold">28 ans</p>
                </div>
                <div className="bg-base-200 p-3 rounded-box text-center">
                  <p className="text-sm text-base-content/70">Taille</p>
                  <p className="font-bold">1m65</p>
                </div>
                <div className="bg-base-200 p-3 rounded-box text-center">
                  <p className="text-sm text-base-content/70">Silhouette</p>
                  <p className="font-bold">53kg</p>
                </div>
                <div className="bg-base-200 p-3 rounded-box text-center">
                  <p className="text-sm text-base-content/70">Cheveux</p>
                  <p className="font-bold">Blond</p>
                </div>
              </div>

              <motion.p variants={item} className="">
                💋 Entrez dans mon monde… un monde de plaisir brut et de sensualité à fleur de peau.
                Appartement privé, climatisé ❄️, ambiance tamisée 🕯️, boissons fraîches à portée de main 🍸… Tout est pensé pour que vous vous sentiez à l’aise, excité, prêt à céder à la tentation 😏.
              </motion.p>

              <motion.p variants={item} className="">
               Je suis Beatrice Moreau, femme française au corps voluptueux 🍑, à la peau douce comme la soie 🖤, au regard profond et lubrique 👀💦. Mon énergie est sauvage, mon envie sincère.
                Je vous reçois dans un cocon intime, pour vivre bien plus qu’un simple moment : une décharge de sensations, une montée lente vers l’extase 😮‍💨
              </motion.p>

              <motion.p variants={item} className="">
                Mes mains savent éveiller le feu en vous 🔥, ma bouche explore chaque frisson 👅, mon corps ondule et s’offre sans retenue 🤤.
                Que vous cherchiez une caresse tendre ou une étreinte sauvage, je m’adapte à vos envies les plus profondes 🔐😈              </motion.p>
              <motion.p variants={item} className="">
                Je ne simule pas. Je vis. Je ressens. Je donne. Et je prends.

                Douche à disposition 🚿, climatisation fraîche, odeur de propre et de désir dans l’air 🌸…
                Vous n’avez qu’à venir. Je m’occupe du reste.              </motion.p>

              <motion.p variants={item} className="">
                🅿️ Stationnement facile juste devant.
                Un seul mot d’ordre : abandon total.              
              </motion.p>

              <motion.p variants={item} className="">
                Mon telegramme : @moreaubeatrice

                Mon TikTok : @moreaubeatrice

                Mon Instagram : beatrice_moreaufr

                À très vite entre mes draps… et entre mes jambes 💋🍒
              </motion.p>
              </motion.div>
          </motion.div>
        </motion.div>

        {/* Section supplémentaire - Langues et centres d’intérêt */}
        <motion.div 
          className="mt-16 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-pink-600">Langues parlées</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="badge badge-lg badge-secondary font-semibold px-2">Français</span>
                <span className="badge badge-lg badge-secondary font-semibold px-2">Anglais</span>
                <span className="badge badge-lg badge-secondary font-semibold px-2">Italien</span>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-pink-600">Passions</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="badge badge-lg">Voyages</span>
                <span className="badge badge-lg">Gastronomie</span>
                <span className="badge badge-lg">Art moderne</span>
                <span className="badge badge-lg">Vins rares</span>
                <span className="badge badge-lg">Littérature</span>
                <span className="badge badge-lg">Mode</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}