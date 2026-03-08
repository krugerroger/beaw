'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Mail, MessageSquare, Upload, CheckCircle2, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react'

interface PriceOption { duration: string; amount: string }
interface Offer { title: string; price: PriceOption[] }

export default function BookingForm() {
    const [offer, setOffer] = useState<Offer | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [selectedPackage, setSelectedPackage] = useState({ title: '', duration: '', price: '' })
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        appointmentDate: null as Date | null,
        paymentProof: null as File | null,
        additionalMessage: ''
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search)
            const data = params.get('data')
            if (data) {
                try {
                    const parsed = JSON.parse(data)
                    setOffer(parsed)
                    setSelectedPackage({
                        title: parsed.title,
                        duration: parsed.price[1]?.duration || parsed.price[0].duration,
                        price: parsed.price[1]?.amount || parsed.price[0].amount
                    })
                } catch (err) {
                    console.error("Erreur de parsing :", err)
                }
            } else {
                const defaultOffer: Offer = {
                    title: "Rendez-vous galant",
                    price: [
                        { duration: "30 minutes", amount: "50€" },
                        { duration: "1 heure", amount: "150€" },
                        { duration: "1 heure 30", amount: "240€" },
                        { duration: "2h00", amount: "300€" },
                        { duration: "3h00", amount: "400€" },
                        { duration: "Après-midi détente (4h00)", amount: "550€" },
                        { duration: "Soirée délice (20h-00h)", amount: "720€" },
                        { duration: "Soirée torride (20h-01h)", amount: "720€" },
                        { duration: "Nuit complète (20h-08h)", amount: "800€" }
                    ]
                }
                setOffer(defaultOffer)
                setSelectedPackage({
                    title: defaultOffer.title,
                    duration: defaultOffer.price[1].duration,
                    price: defaultOffer.price[1].amount
                })
            }
        }
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        if (e.target instanceof HTMLInputElement && e.target.type === "file") {
            const files = e.target.files
            setFormData(prev => ({ ...prev, [name]: files ? files[0] : null }))
        } else {
            setFormData(prev => ({ ...prev, [name]: value }))
        }
    }

    const handleDateChange = (date: Date | null) => {
        setFormData(prev => ({ ...prev, appointmentDate: date }))
    }

    const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const idx = Number(e.target.value)
        if (offer) {
            setSelectedPackage({
                title: offer.title,
                duration: offer.price[idx].duration,
                price: offer.price[idx].amount
            })
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const formDataToSend = new FormData()
            formDataToSend.append('name', formData.name)
            formDataToSend.append('email', formData.email)
            formDataToSend.append('appointmentDate', formData.appointmentDate?.toISOString() || '')
            if (formData.paymentProof) formDataToSend.append('paymentProof', formData.paymentProof)
            formDataToSend.append('additionalMessage', formData.additionalMessage)
            formDataToSend.append('packageTitle', selectedPackage.title)
            formDataToSend.append('packageDuration', selectedPackage.duration)
            formDataToSend.append('packagePrice', selectedPackage.price)

            const response = await fetch('/api/upload', { method: 'POST', body: formDataToSend })
            const basin_response = await fetch("https://usebasin.com/f/1075a0a67158", {
                method: "POST",
                headers: { "Accept": "application/json" },
                body: formDataToSend
            })

            if (!basin_response.ok) alert("❌ Erreur lors de l'envoi")
            if (response.ok) {
                setSubmitted(true)
            } else {
                const result = await response.json()
                console.error('Erreur:', result.error)
            }
        } catch (err) {
            console.error('Erreur:', err)
        } finally {
            setIsLoading(false)
        }
    }

    if (submitted) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4" style={{ backgroundColor: '#0d0d0d' }}>
                <div className="p-8 rounded-full mb-6" style={{ backgroundColor: '#052e16', border: '1px solid #166534' }}>
                    <CheckCircle2 className="w-16 h-16" style={{ color: '#4ade80' }} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Demande envoyée avec succès</h2>
                <p className="max-w-md" style={{ color: '#a1a1aa' }}>
                    Je reviendrai vers vous par email ou WhatsApp sous 24h pour confirmer notre rendez-vous.
                </p>
                <Link href="/" className="mt-8 btn border-none px-8 text-white font-bold" style={{ backgroundColor: '#db2777' }}>
                    Retour à l′accueil
                </Link>
            </div>
        )
    }

    return (
        <section className="py-12 min-h-screen" style={{ backgroundColor: '#0d0d0d' }}>
                <div className="container mx-auto px-4 max-w-6xl">

                    {/* Header */}
                    <div className="mb-12 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
                            Réserver un <span className="italic" style={{ color: '#ec4899' }}>instant unique</span>
                        </h1>
                        <p className="max-w-2xl" style={{ color: '#71717a' }}>
                            Veuillez remplir le formulaire ci-dessous. Chaque demande est traitée avec la plus grande discrétion.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12">

                        {/* Colonne gauche */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/bea_hero.jpeg"
                                    alt="Béatrice Moreau"
                                    fill
                                    sizes="(min-width: 1024px) 33vw, 100vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)' }} />
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <div className="flex items-center gap-2 mb-2">
                                        <ShieldCheck className="w-4 h-4" style={{ color: '#f472b6' }} />
                                        <span className="text-xs uppercase tracking-widest" style={{ color: '#d4d4d8' }}>Discrétion garantie</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold">Béatrice Moreau</h3>
                                    <p className="text-sm" style={{ color: '#a1a1aa' }}>Votre élégance, ma priorité.</p>
                                </div>
                            </div>

                            {/* Comment réserver */}
                            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#18181b', border: '1px solid #27272a' }}>
                                <h4 className="flex items-center gap-2 font-bold text-white mb-4">
                                    <HelpCircle className="w-5 h-5" style={{ color: '#ec4899' }} />
                                    Comment réserver ?
                                </h4>
                                <ul className="text-sm space-y-4" style={{ color: '#71717a' }}>
                                    {[
                                        "Choisissez la durée de votre rendez-vous.",
                                        "Achetez une recharge Transcash du montant correspondant.",
                                        "Joignez la photo de la recharge au formulaire."
                                    ].map((text, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs"
                                                style={{ backgroundColor: '#3b0764', color: '#f472b6', border: '1px solid #6b21a8' }}>
                                                {i + 1}
                                            </span>
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact Telegram / WhatsApp */}
                            <div className="p-6 rounded-2xl text-sm" style={{ backgroundColor: '#18181b', border: '1px solid #27272a', color: '#71717a' }}>
                                <p className="font-semibold text-white mb-3">Virement ou Wero ?</p>
                                <div className="flex flex-col gap-2">
                                    <a
                                        href="https://t.me/moreaubeatrice"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 font-medium hover:underline"
                                        style={{ color: '#29b6f6' }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z" />
                                        </svg>
                                        @moreaubeatrice
                                    </a>
                                    <a
                                        href="https://wa.me/33644684302"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 font-medium hover:underline"
                                        style={{ color: '#4ade80' }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                        +33 6 44 68 43 02
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Colonne droite : Formulaire */}
                        <div className="lg:col-span-8">
                            <form
                                encType="multipart/form-data"
                                method="POST"
                                action="https://usebasin.com/f/1075a0a67158"
                                onSubmit={handleSubmit}
                                className="rounded-3xl p-8 space-y-8"
                                style={{ backgroundColor: '#18181b', border: '1px solid #27272a', boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }}
                            >
                                {/* Étape 01 */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        <span className="w-8 h-8 rounded-lg text-white flex items-center justify-center text-sm font-bold"
                                            style={{ backgroundColor: '#be185d' }}>01</span>
                                        Sélection du forfait
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="form-control w-full">
                                            <label className="label text-xs font-semibold uppercase tracking-wider pb-1" style={{ color: '#52525b' }}>
                                                Durée souhaitée
                                            </label>
                                            <select
                                                name="selectedPackage"
                                                onChange={handlePackageChange}
                                                className="select select-bordered w-full"
                                                style={{ backgroundColor: '#27272a', borderColor: '#3f3f46', color: '#e4e4e7' }}
                                                defaultValue="1"
                                            >
                                                {offer?.price.map((opt, i) => (
                                                    <option key={i} value={i}>{opt.duration} — {opt.amount}</option>
                                                ))}
                                            </select>
                                            {offer && (
                                                <Link href="/tarifs" className="text-xs mt-1.5 inline-block hover:underline" style={{ color: '#ec4899' }}>
                                                    Modifier votre choix →
                                                </Link>
                                            )}
                                        </div>
                                        <div className="p-4 rounded-xl flex flex-col justify-center items-center"
                                            style={{ backgroundColor: '#1a0a14', border: '1px solid #4a1030' }}>
                                            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#f472b6' }}>Tarif Total</span>
                                            <span className="text-3xl font-black mt-1" style={{ color: '#f472b6' }}>{selectedPackage.price || '—'}</span>
                                            {selectedPackage.duration && (
                                                <span className="text-xs mt-1" style={{ color: '#52525b' }}>{selectedPackage.duration}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ borderTop: '1px solid #27272a' }} />

                                {/* Étape 02 */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        <span className="w-8 h-8 rounded-lg text-white flex items-center justify-center text-sm font-bold"
                                            style={{ backgroundColor: '#be185d' }}>02</span>
                                        Vos informations
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Nom */}
                                        <div className="form-control">
                                            <label className="label text-xs font-semibold uppercase tracking-wider pb-1" style={{ color: '#52525b' }}>Nom complet</label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-3.5 h-5 w-5" style={{ color: '#52525b' }} />
                                                <input type="text" name="name" required value={formData.name}
                                                    placeholder="Ex: Jean Dupont"
                                                    className="input input-bordered w-full pl-10"
                                                    style={{ backgroundColor: '#27272a', borderColor: '#3f3f46', color: '#e4e4e7' }}
                                                    onChange={handleChange} />
                                            </div>
                                        </div>
                                        {/* Email */}
                                        <div className="form-control">
                                            <label className="label text-xs font-semibold uppercase tracking-wider pb-1" style={{ color: '#52525b' }}>Email</label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-3.5 h-5 w-5" style={{ color: '#52525b' }} />
                                                <input type="email" name="email" required value={formData.email}
                                                    placeholder="jean@exemple.com"
                                                    className="input input-bordered w-full pl-10"
                                                    style={{ backgroundColor: '#27272a', borderColor: '#3f3f46', color: '#e4e4e7' }}
                                                    onChange={handleChange} />
                                            </div>
                                        </div>
                                        {/* Date */}
                                        <div className="form-control">
                                            <label className="label text-xs font-semibold uppercase tracking-wider pb-1" style={{ color: '#52525b' }}>Date & Heure</label>
                                            <div className="relative">
                                                <Calendar className="absolute left-3 top-3.5 h-5 w-5 z-10 pointer-events-none" style={{ color: '#52525b' }} />
                                                <input
                                                    type="datetime-local"
                                                    name="appointmentDate"
                                                    value={formData.appointmentDate ? formData.appointmentDate.toISOString().slice(0, 16) : ''}
                                                    min={new Date().toISOString().slice(0, 16)}
                                                    required
                                                    className="input input-bordered w-full pl-10"
                                                    style={{ backgroundColor: '#27272a', borderColor: '#3f3f46', color: '#e4e4e7', colorScheme: 'dark' }}
                                                    onChange={(e) => {
                                                        if (e.target.value) {
                                                            const selected = new Date(e.target.value)
                                                            if (selected >= new Date()) {
                                                                handleDateChange(selected)
                                                            } else {
                                                                alert("Veuillez sélectionner une date future")
                                                                e.target.value = ""
                                                                handleDateChange(null)
                                                            }
                                                        } else {
                                                            handleDateChange(null)
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        {/* Fichier */}
                                        <div className="form-control">
                                            <label className="label text-xs font-semibold uppercase tracking-wider pb-1" style={{ color: '#52525b' }}>Preuve Transcash</label>
                                            <div className="relative">
                                                <Upload className="absolute left-3 top-3.5 h-5 w-5" style={{ color: '#52525b' }} />
                                                <input type="file" name="paymentProof" required accept="image/*,.pdf"
                                                    className="file-input file-input-bordered w-full pl-10"
                                                    style={{ backgroundColor: '#27272a', borderColor: '#3f3f46', color: '#a1a1aa' }}
                                                    onChange={handleChange} />
                                            </div>
                                            <span className="text-xs mt-1.5 pl-1" style={{ color: '#52525b' }}>
                                                Photo de la recharge (Transcash, PCS, Néosurf)
                                            </span>
                                        </div>
                                    </div>
                                    {/* Message */}
                                    <div className="form-control">
                                        <label className="label text-xs font-semibold uppercase tracking-wider pb-1" style={{ color: '#52525b' }}>Message (Optionnel)</label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-3 top-3 h-5 w-5" style={{ color: '#52525b' }} />
                                            <textarea name="additionalMessage" value={formData.additionalMessage}
                                                placeholder="Lieu, préférences ou tenues particulières..."
                                                className="textarea textarea-bordered w-full pl-10 h-24"
                                                style={{ backgroundColor: '#27272a', borderColor: '#3f3f46', color: '#e4e4e7' }}
                                                onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`btn w-full h-14 border-none text-white text-lg font-bold transition-all duration-300 ${isLoading ? 'opacity-60' : ''}`}
                                    style={{ backgroundColor: '#be185d', boxShadow: '0 8px 30px rgba(190,24,93,0.3)' }}
                                >
                                    {isLoading ? 'Traitement en cours...' : 'Confirmer ma réservation'}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Footer : Plateformes */}
                    <div className="mt-20 pt-12" style={{ borderTop: '1px solid #27272a' }}>
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Plateformes de recharge</h2>
                            <p className="mt-2 italic" style={{ color: '#52525b' }}>Achetez votre recharge en toute sécurité sur ces sites officiels</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {[
                                { href: "https://www.transcash-recharge.com", letter: "T", label: "Transcash Recharge" },
                                { href: "https://cartedirecte.fr", letter: "C", label: "Carte Directe" }
                            ].map(({ href, letter, label }) => (
                                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                                    className="group p-4 rounded-2xl flex items-center justify-between transition-all duration-200"
                                    style={{ backgroundColor: '#18181b', border: '1px solid #27272a' }}
                                    onMouseEnter={e => (e.currentTarget.style.borderColor = '#be185d')}
                                    onMouseLeave={e => (e.currentTarget.style.borderColor = '#27272a')}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg flex items-center justify-center font-bold italic text-lg transition-colors"
                                            style={{ backgroundColor: '#27272a', color: '#52525b' }}>
                                            {letter}
                                        </div>
                                        <span className="font-semibold" style={{ color: '#a1a1aa' }}>{label}</span>
                                    </div>
                                    <ArrowRight className="w-5 h-5 transition-all group-hover:translate-x-1" style={{ color: '#3f3f46' }} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Confirmation & rappel */}
                    <div className="mt-12 rounded-2xl p-6 max-w-4xl mx-auto" style={{ backgroundColor: '#18181b', border: '1px solid #27272a' }}>
                        <h3 className="font-bold text-white mb-3">Confirmation & rappel</h3>
                        <ul className="text-sm space-y-2 list-disc list-inside" style={{ color: '#71717a' }}>
                            <li>Confirmation immédiate après réservation par Telegram ou email.</li>
                            <li>Un rappel sera envoyé 24 heures avant le rendez-vous.</li>
                            <li>Une facture détaillée vous sera envoyée après la réservation.</li>
                            <li>La réservation est confirmée uniquement après réception de la facture.</li>
                        </ul>
                    </div>

                    <div className="mt-12 text-center text-sm max-w-2xl mx-auto italic" style={{ color: '#3f3f46' }}>
                        “Le meilleur moyen de résister à la tentation est d′y céder.” — Oscar Wilde
                    </div>
                </div>
            </section>
    )
}