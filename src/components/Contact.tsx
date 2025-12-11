import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaWhatsapp, FaStar } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import { supabase } from '../lib/supabase'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeForm, setActiveForm] = useState<'contact' | 'testimonial'>('contact')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [testimonialForm, setTestimonialForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    rating: 5,
  })

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    setTimeout(() => {
      setSuccess(true)
      setLoading(false)
      setContactForm({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setSuccess(false), 5000)
    }, 1500)
  }

  const handleTestimonialSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { error: submitError } = await supabase.from('testimonials').insert([
        {
          name: testimonialForm.name,
          email: testimonialForm.email,
          company: testimonialForm.company || null,
          role: testimonialForm.role || null,
          message: testimonialForm.message,
          rating: testimonialForm.rating,
        },
      ])

      if (submitError) throw submitError

      setSuccess(true)
      setTestimonialForm({
        name: '',
        email: '',
        company: '',
        role: '',
        message: '',
        rating: 5,
      })
      setTimeout(() => setSuccess(false), 5000)
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-6">
            Travaillons <span className="text-gradient">Ensemble</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Un projet en tête ? N'hésitez pas à me contacter
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href="mailto:amavipatrick16@gmail.com"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      amavipatrick16@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Téléphone</p>
                    <a
                      href="tel:+2250711056330"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      +225 07 11 05 63 30
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Localisation</p>
                    <p className="text-gray-400">Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="font-semibold mb-4">Suivez-moi</h4>
                <div className="flex gap-4">
                  <a
                    href="mailto:amavipatrick16@gmail.com"
                    className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  >
                    <FaEnvelope size={20} />
                  </a>
                  <a
                    href="https://github.com/kingamav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://wa.me/2250711056330"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  >
                    <FaWhatsapp size={20} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@amav_tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  >
                    <SiTiktok size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-4">Statut actuel</h3>
              <p className="text-gray-300 mb-4">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></span>
                Disponible pour de nouveaux projets
              </p>
              <p className="text-gray-400">
                Je suis actuellement ouvert aux opportunités freelance et aux collaborations intéressantes.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-effect p-8 rounded-xl"
          >
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setActiveForm('contact')}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  activeForm === 'contact'
                    ? 'bg-primary text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                Me contacter
              </button>
              <button
                onClick={() => setActiveForm('testimonial')}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  activeForm === 'testimonial'
                    ? 'bg-primary text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                Témoignage
              </button>
            </div>

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
              >
                {activeForm === 'contact'
                  ? 'Message envoyé avec succès!'
                  : 'Témoignage soumis avec succès! Il sera affiché après validation.'}
              </motion.div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                {error}
              </div>
            )}

            {activeForm === 'contact' ? (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom complet</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Téléphone</label>
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="+225 XX XX XX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleTestimonialSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom complet</label>
                  <input
                    type="text"
                    required
                    value={testimonialForm.name}
                    onChange={(e) =>
                      setTestimonialForm({ ...testimonialForm, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={testimonialForm.email}
                    onChange={(e) =>
                      setTestimonialForm({ ...testimonialForm, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Entreprise (optionnel)</label>
                    <input
                      type="text"
                      value={testimonialForm.company}
                      onChange={(e) =>
                        setTestimonialForm({ ...testimonialForm, company: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="Nom de l'entreprise"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Poste (optionnel)</label>
                    <input
                      type="text"
                      value={testimonialForm.role}
                      onChange={(e) =>
                        setTestimonialForm({ ...testimonialForm, role: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="Votre poste"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Note</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setTestimonialForm({ ...testimonialForm, rating: star })}
                        className="text-3xl transition-colors"
                      >
                        <FaStar
                          className={
                            star <= testimonialForm.rating ? 'text-yellow-400' : 'text-gray-600'
                          }
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Votre témoignage</label>
                  <textarea
                    required
                    value={testimonialForm.message}
                    onChange={(e) =>
                      setTestimonialForm({ ...testimonialForm, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Partagez votre expérience..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Envoi en cours...' : 'Soumettre le témoignage'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
