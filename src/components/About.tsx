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
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Je m'appelle Patrick Amavi, développeur web fullstack et UI/UX designer passionné par l'informatique.
              Mon parcours académique et mes projets personnels m'ont permis d'acquérir des bases solides en programmation,
              en développement web moderne, ainsi qu'en design d'interfaces utilisateur.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Actuellement <span className="text-primary font-semibold">freelance</span>, je développe des applications
              web complètes et performantes, alliant fonctionnalité et esthétique. Je crée des expériences utilisateur
              intuitives et des interfaces modernes qui répondent aux besoins des utilisateurs.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Mon ambition est de continuer à me spécialiser en développement fullstack et en cybersécurité,
              tout en renforçant mes compétences en design UI/UX. Je suis ouvert aux opportunités et collaborations
              qui me permettront de relever de nouveaux défis techniques et créatifs.
            </p>
            <div className="glass-effect p-6 rounded-xl border-l-4 border-primary">
              <p className="text-xl font-semibold text-primary mb-2">Disponible pour de nouveaux projets</p>
              <p className="text-gray-400">
                Je suis actuellement disponible pour des missions freelance et ouvert aux collaborations sur des projets innovants.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
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
