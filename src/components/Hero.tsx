import { motion } from 'framer-motion'
import { FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'

const Hero = () => {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-0"></div>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary text-lg sm:text-xl font-semibold"
          >
            Bonjour, moi c'est
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display"
          >
            PATRICK <span className="text-gradient">AMAVI</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300"
          >
            Développeur Web Fullstack & UI/UX Designer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Freelance passionné par la création d'expériences web modernes et performantes.
            <br />
            Ouvert aux opportunités et collaborations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <button
              onClick={() => handleScrollTo('#projects')}
              className="btn-primary w-full sm:w-auto"
            >
              Voir mes projets
            </button>
            <button
              onClick={() => handleScrollTo('#contact')}
              className="btn-outline w-full sm:w-auto"
            >
              Me contacter
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex justify-center gap-6 mt-12"
          >
            <a
              href="mailto:amavipatrick16@gmail.com"
              className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://github.com/kingamav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://wa.me/2250711056330"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@amav_tech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              aria-label="TikTok"
            >
              <SiTiktok size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
