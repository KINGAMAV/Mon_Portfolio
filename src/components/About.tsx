import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaPalette, FaRocket, FaUsers } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <FaCode className="text-4xl text-primary" />,
      title: 'Développement',
      description: 'Création d\'applications web modernes et performantes avec les dernières technologies',
    },
    {
      icon: <FaPalette className="text-4xl text-primary" />,
      title: 'UI/UX Design',
      description: 'Conception d\'interfaces utilisateur intuitives et esthétiques',
    },
    {
      icon: <FaRocket className="text-4xl text-primary" />,
      title: 'Performance',
      description: 'Optimisation pour une expérience utilisateur fluide et rapide',
    },
    {
      icon: <FaUsers className="text-4xl text-primary" />,
      title: 'Collaboration',
      description: 'Travail d\'équipe efficace et communication claire',
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-6">
            À propos de <span className="text-gradient">moi</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
              <img
                src="/ma_photo.jpg"
                alt="Patrick Amavi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Je m'appelle Patrick Amavi, informaticien développeur d'application passionné par la création d'applications web modernes.
              Actuellement en formation pour obtenir mon BTS Informatique Développeur d'Application (IDA) à Paris, 
              j'acquiers des bases solides en algorithme, logique de programmation et méthodologie MERISE.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Je maîtrise le développement fullstack avec React, Node.js, Express et TypeScript pour le frontend,
              ainsi que PHP, Node.js et SQL pour le backend. Mes bases de données incluent Supabase, PostgreSQL et MERISE.
              Je crée des applications web complètes et performantes, alliant fonctionnalité et esthétique.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              J'ai développé plusieurs projets fullstack notables, notamment Cerconnet, une application web interne avec +30 utilisateurs actifs/jour,
              et une application web pour IWT (Impact World Translation). Mon ambition est de continuer à me spécialiser en développement fullstack
              et en cybersécurité, tout en renforçant mes compétences en design UI/UX.
            </p>
            <div className="glass-effect p-6 rounded-xl border-l-4 border-primary">
              <p className="text-xl font-semibold text-primary mb-2">Disponible pour de nouveaux projets</p>
              <p className="text-gray-400">
                Je suis actuellement disponible pour des missions freelance et ouvert aux collaborations sur des projets innovants.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-effect p-6 rounded-xl card-hover text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
