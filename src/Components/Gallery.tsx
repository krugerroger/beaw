"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/gallery/1.jpeg",
    alt: "Béatrice en tenue de soirée au restaurant",
    category: "intérieur",
    blurred: false,
  },
  {
    id: 2,
    src: "/gallery/2.jpeg",
    alt: "Béatrice en ville, tenue élégante",
    category: "intérieur",
    blurred: false,
  },
  {
    id: 3,
    src: "/gallery/3.jpeg",
    alt: "Ambiance intérieure chic",
    category: "intérieur",
    blurred: false,
  },
  {
    id: 4,
    src: "/gallery/4.jpeg",
    alt: "Soirée romantique",
    category: "intérieur",
    blurred: false,
  },
  {
    id: 5,
    src: "/gallery/5.jpeg",
    alt: "Moment détente en lounge",
    category: "intérieur",
    blurred: false,
  },
  {
    id: 6,
    src: "/gallery/6.jpeg",
    alt: "Cocktail en terrasse",
    category: "intérieur",
    blurred: false,
  },
  {
    id: 7,
    src: "/gallery/7.jpeg",
    alt: "Cocktail en terrasse",
    category: "intérieur",
    blurred: false,
  },
  {
    id: 8,
    src: "/gallery/8.jpeg",
    alt: "Cocktail en terrasse",
    category: "intérieur",
    blurred: false,
  },
  {
    id: 9,
    src: "/gallery/9.jpeg",
    alt: "Cocktail en terrasse",
    category: "intérieur",
    blurred: false,
  },
  {
    id: 10,
    src: "/gallery/10.jpeg",
    alt: "Cocktail en terrasse",
    category: "intérieur",
    blurred: false,
  },
  {
    id: 11,
    src: "/gallery/11.jpeg",
    alt: "Cocktail en terrasse",
    category: "intérieur",
    blurred: false,
  },
  {
    id: 12,
    src: "/gallery/12.jpeg",
    alt: "Cocktail en terrasse",
    category: "intérieur",
    blurred: false,
  },
  {
    id: 13,
    src: "/gallery/13.jpeg",
    alt: "Cocktail en terrasse",
    category: "ville",
    blurred: false,
  },
  {
    id: 14,
    src: "/gallery/14.jpeg",
    alt: "Cocktail en terrasse",
    category: "intérieur",
    blurred: false,
  },
  {
    id: 15,
    src: "/gallery/15.jpeg",
    alt: "Cocktail en terrasse",
    category: "ville",
    blurred: false,
  },
  {
    id: 16,
    src: "/gallery/16.jpeg",
    alt: "Cocktail en terrasse",
    category: "soirée",
    blurred: false,
  },
  {
    id: 17,
    src: "/gallery/17.jpeg",
    alt: "Cocktail en terrasse",
    category: "intérieur",
    blurred: false,
  },
  {
    id: 18,
    src: "/gallery/18.jpeg",
    alt: "Cocktail en terrasse",
    category: "intérieur",
    blurred: false,
  },
  {
    id: 19,
    src: "/gallery/19.jpeg",
    alt: "Cocktail en terrasse",
    category: "soirée",
    blurred: false,
  },
  {
    id: 20,
    src: "/gallery/20.jpeg",
    alt: "Cocktail en terrasse",
    category: "soirée",
    blurred: false,
  },
  {
    id: 21,
    src: "/gallery/21.jpeg",
    alt: "Cocktail en terrasse",
    category: "soirée",
    blurred: false,
  },
  {
    id: 22,
    src: "/gallery/22.jpeg",
    alt: "Cocktail en terrasse",
    category: "intérieur",
    blurred: false,
  },
  {
    id: 23,
    src: "/gallery/23.jpeg",
    alt: "Cocktail en terrasse",
    category: "ville",
    blurred: false,
  },
  {
    id: 24,
    src: "/gallery/24.jpeg",
    alt: "Cocktail en terrasse",
    category: "ville",
    blurred: false,
  },
  {
    id: 25,
    src: "/gallery/25.jpeg",
    alt: "Cocktail en terrasse",
    category: "ville",
    blurred: false,
  },
  {
    id: 26,
    src: "/gallery/26.jpeg",
    alt: "Cocktail en terrasse",
    category: "soirée",
    blurred: false,
  },
  {
    id: 27,
    src: "/gallery/27.jpeg",
    alt: "Cocktail en terrasse",
    category: "soirée",
    blurred: false,
  },
  {
    id: 28,
    src: "/gallery/28.jpeg",
    alt: "Cocktail en terrasse",
    category: "soirée",
    blurred: false,
  },
  {
    id: 29,
    src: "/gallery/29.jpeg",
    alt: "Cocktail en terrasse",
    category: "soirée",
    blurred: false,
  },
  {
    id: 30,
    src: "/gallery/30.jpeg",
    alt: "Cocktail en terrasse",
    category: "soirée",
    blurred: false,
  },
  {
    id: 31,
    src: "/gallery/31.jpeg",
    alt: "Cocktail en terrasse",
    category: "intérieur",
    blurred: false,
  },
  {
    id: 32,
    src: "/gallery/32.jpeg",
    alt: "Cocktail en terrasse",
    category: "intérieur",
    blurred: false,
  },
  {
    id: 33,
    src: "/gallery/33.jpeg",
    alt: "Cocktail en terrasse",
    category: "intérieur",
    blurred: false,
  },
  {
    id: 34,
    src: "/gallery/34.jpeg",
    alt: "Cocktail en terrasse",
    category: "soirée",
    blurred: false,
  },
  {
    id: 35,
    src: "/gallery/35.jpeg",
    alt: "Cocktail en terrasse",
    category: "intérieur",
    blurred: false,
  },
  {
    id: 36,
    src: "/gallery/36.jpeg",
    alt: "Cocktail en terrasse",
    category: "intérieur",
    blurred: false,
  },
];

const categories = [
  { key: "tous", label: "Tous" },
  { key: "soirée", label: "Soirées" },
  { key: "ville", label: "Ville" },
  { key: "intérieur", label: "Intérieurs" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("tous");

  const filteredImages =
    filter === "tous"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const currentIndex = galleryImages.findIndex(
    (img) => img.id === selectedImage,
  );

  const goPrev = useCallback(() => {
    if (selectedImage === null) return;
    const prev =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prev].id);
  }, [currentIndex, selectedImage]);

  const goNext = useCallback(() => {
    if (selectedImage === null) return;
    const next = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[next].id);
  }, [currentIndex, selectedImage]);

  // Navigation clavier & gestion du scroll arrière-plan
  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, goPrev, goNext]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 15 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  //   },
  // };

  const currentActiveImage = galleryImages.find(
    (img) => img.id === selectedImage,
  );

  return (
    <section
      id="gallery"
      className="py-24 relative select-none"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 tracking-tight">
            <span style={{ color: "#ec4899" }}>Galerie</span>
          </h2>

          {/* Séparateur élégant */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div
              className="h-px w-12 sm:w-20"
              style={{ backgroundColor: "#3f3f46" }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#be185d" }}
            />
            <div
              className="h-px w-12 sm:w-20"
              style={{ backgroundColor: "#3f3f46" }}
            />
          </div>

          {/* Filtres avec animation d'onglet dynamique */}
          <div
            className="flex flex-wrap justify-center gap-2 p-1.5 rounded-full inline-flex border"
            style={{ backgroundColor: "#18181b", borderColor: "#27272a" }}
          >
            {categories.map(({ key, label }) => {
              const isActive = filter === key;
              return (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className="relative px-5 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors duration-300 z-10 focus:outline-none"
                  style={{ color: isActive ? "#ffffff" : "#71717a" }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterBg"
                      className="absolute inset-0 rounded-full -z-10"
                      style={{
                        backgroundColor: "#be185d",
                        boxShadow: "0 4px 20px rgba(190, 24, 93, 0.4)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  {label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Grille de photos */}
        <motion.div
          key={filter}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              whileHover={{ y: -4 }}
              className="group relative aspect-square overflow-hidden cursor-pointer rounded-xl border transition-all duration-300"
              style={{ borderColor: "#27272a", backgroundColor: "#18181b" }}
              onClick={() => setSelectedImage(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />

              {/* Gradient Overlay au survol */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,13,13,0.9) 0%, rgba(13,13,13,0.2) 50%, transparent 100%)",
                }}
              >
                <div className="p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span
                    className="text-xs uppercase tracking-widest font-semibold px-2 py-1 rounded-md backdrop-blur-md"
                    style={{
                      color: "#f472b6",
                      backgroundColor: "rgba(190,24,93,0.2)",
                      border: "1px solid rgba(244,114,182,0.3)",
                    }}
                  >
                    {image.category}
                  </span>
                </div>
              </div>

              {/* Filigrane discret */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[10px] tracking-wide font-medium backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.7)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  ©{new Date().getFullYear()} Béatrice Moreau
                </div>
              </div>

              {/* Flou si restreint */}
              {image.blurred && (
                <div
                  className="absolute inset-0 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:backdrop-blur-sm"
                  style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                  <span
                    className="text-white font-medium text-xs sm:text-sm px-4 py-2 rounded-full border border-white/20"
                    style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                  >
                    Cliquer pour voir
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox / Modal d'agrandissement */}
        <AnimatePresence>
          {selectedImage !== null && currentActiveImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Fond flouté interactif */}
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundColor: "rgba(13,13,13,0.96)",
                  backdropFilter: "blur(12px)",
                }}
                onClick={() => setSelectedImage(null)}
              />

              {/* Bouton fermeture */}
              <button
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200 outline-none"
                style={{
                  backgroundColor: "#27272a",
                  color: "#a1a1aa",
                  border: "1px solid #3f3f46",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#be185d";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.borderColor = "#be185d";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#27272a";
                  e.currentTarget.style.color = "#a1a1aa";
                  e.currentTarget.style.borderColor = "#3f3f46";
                }}
                onClick={() => setSelectedImage(null)}
                aria-label="Fermer la vue"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Précédent */}
              <button
                className="absolute left-3 sm:left-6 z-20 flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 outline-none backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(24,24,27,0.8)",
                  color: "#a1a1aa",
                  border: "1px solid #27272a",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#be185d";
                  e.currentTarget.style.color = "#f472b6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#27272a";
                  e.currentTarget.style.color = "#a1a1aa";
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Navigation Suivant */}
              <button
                className="absolute right-3 sm:right-6 z-20 flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 outline-none backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(24,24,27,0.8)",
                  color: "#a1a1aa",
                  border: "1px solid #27272a",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#be185d";
                  e.currentTarget.style.color = "#f472b6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#27272a";
                  e.currentTarget.style.color = "#a1a1aa";
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Image suivante"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Cadre de l'image */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative z-10 w-full max-w-5xl h-[80vh] sm:h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center border"
                style={{ borderColor: "#27272a", backgroundColor: "#0d0d0d" }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={currentActiveImage.src}
                  alt={currentActiveImage.alt}
                  fill
                  className="object-contain select-none transition-all duration-300"
                  draggable="false"
                  priority
                  unoptimized
                  quality={100}
                  onContextMenu={(e) => e.preventDefault()}
                />

                {/* Filigrane d'arrière-plan discret */}
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      background: `repeating-linear-gradient(-45deg, rgba(255,255,255,0.08), rgba(255,255,255,0.08) 1px, transparent 1px, transparent 10px)`,
                    }}
                  />
                  <div
                    className="absolute bottom-4 right-4 px-3 py-1 rounded-lg text-xs font-medium backdrop-blur-md"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.75)",
                      color: "rgba(255,255,255,0.65)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    ©{new Date().getFullYear()} Béatrice Moreau
                  </div>
                </div>

                {/* Étiquette catégorie & Compteur */}
                <div
                  className="absolute bottom-4 left-4 flex items-center gap-3 backdrop-blur-md px-3 py-1.5 rounded-full border"
                  style={{
                    backgroundColor: "rgba(13,13,13,0.6)",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: "#1a0a14",
                      color: "#f472b6",
                      border: "1px solid #4a1030",
                    }}
                  >
                    {currentActiveImage.category}
                  </span>
                  <span
                    className="text-xs font-medium tabular-nums"
                    style={{ color: "#71717a" }}
                  >
                    {currentIndex + 1}{" "}
                    <span style={{ color: "#3f3f46" }}>/</span>{" "}
                    {galleryImages.length}
                  </span>
                </div>
              </motion.div>

              {/* Indicateurs / Puces dynamiques */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 max-w-[80vw] overflow-x-auto py-1 px-3 rounded-full backdrop-blur-md"
                style={{ backgroundColor: "rgba(24,24,27,0.5)" }}
              >
                {galleryImages.map((img) => {
                  const isSelected = img.id === selectedImage;
                  return (
                    <button
                      key={img.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(img.id);
                      }}
                      className="rounded-full transition-all duration-300 focus:outline-none shrink-0"
                      style={{
                        width: isSelected ? "24px" : "6px",
                        height: "6px",
                        backgroundColor: isSelected ? "#be185d" : "#3f3f46",
                        boxShadow: isSelected
                          ? "0 0 10px rgba(190,24,93,0.5)"
                          : "none",
                      }}
                      aria-label={`Afficher l'image ${img.id}`}
                    />
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
