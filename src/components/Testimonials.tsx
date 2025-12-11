import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { supabase } from '../lib/supabase'
import { Testimonial } from '../types'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false })

      if (error) throw error
      setTestimonials(data || [])
    } catch (error) {
      console.error('Error fetching testimonials:', error)
    } finally {
      setLoading(false)
    }
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < rating ? 'text-yellow-400' : 'text-gray-600'}
          />
        ))}
      </div>
    )
  }

  const defaultTestimonials: Testimonial[] = [
    {
      name: 'Jean Kouassi',
      email: 'jean.kouassi@example.com',
      role: 'CEO',
      company: 'TechStart CI',
      message: 'Patrick est un développeur exceptionnel. Son expertise en React et son sens du design ont transformé notre application.',
      rating: 5,
    },
    {
      name: 'Marie Yao',
      email: 'marie.yao@example.com',
      role: 'Product Manager',
      company: 'Digital Solutions',
      message: 'Travail professionnel et livraison dans les délais. Je recommande vivement Patrick pour vos projets web.',
      rating: 5,
    },
    {
      name: 'Koffi Adjoumani',
      email: 'koffi.adjoumani@example.com',
      role: 'Entrepreneur',
      message: 'Excellent développeur avec une grande créativité. Patrick a su comprendre mes besoins et créer une solution parfaite.',
      rating: 5,
    },
  ]

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials

  return (
    <section id="testimonials" className="py-20 sm:py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-6">
            Témoignages <span className="text-gradient">Clients</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ce que mes clients disent de mon travail
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-8 rounded-xl relative"
              >
                <FaQuoteLeft className="text-4xl text-primary/30 mb-4" />
                <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.message}</p>
                <div className="mb-4">{renderStars(testimonial.rating)}</div>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  {testimonial.role && (
                    <p className="text-primary text-sm">{testimonial.role}</p>
                  )}
                  {testimonial.company && (
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-400 mb-4">
            Vous avez travaillé avec moi ?
          </p>
          <a
            href="#contact"
            className="inline-block btn-primary"
          >
            Laissez votre témoignage
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
