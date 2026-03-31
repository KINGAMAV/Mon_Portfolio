import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'Cerconnet',
      description: 'Mini réseau social interne avec +30 utilisateurs actifs/jour',
      longDescription: 'Cerconnet est une application web de réseau social interne développée pour l\'Institut CERCO Abidjan. Cette plateforme innovante permet aux étudiants et au personnel de se connecter, partager des ressources académiques, collaborer sur des projets et échanger des idées dans un environnement sécurisé. Le projet a atteint +30 utilisateurs actifs par jour et dispose d\'une architecture fullstack complète.',
      stack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js/Express', 'Supabase', 'PostgreSQL'],
      features: [
        'Système d\'authentification sécurisé',
        'Partage de publications et médias',
        'Messagerie instantanée entre utilisateurs',
        'Groupes d\'étude et de projet',
        'Fil d\'actualités personnalisé',
        'Notifications en temps réel',
        'Profils utilisateurs avec authentification',
        'Architecture fullstack complète',
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      demoLink: '#',
      codeLink: 'https://github.com/KINGAMAV/Cerconnet',
    },
    {
      id: 2,
      title: 'IWT - Impact World Translation',
      description: 'Application web pour découvrir l\'entreprise et prendre rendez-vous',
      longDescription: 'Développement d\'une application web permettant de découvrir l\'entreprise d\'interprétariat et de prendre rendez-vous. Cette application offre une interface moderne et responsive avec formulaire de contact intégré, pages d\'information, et système de prise de rendez-vous optimisé pour l\'expérience utilisateur.',
      stack: ['React.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'],
      features: [
        'Pages d\'information complètes',
        'Formulaire de prise de rendez-vous',
        'Interface moderne et responsive',
        'Design UI/UX optimisé',
        'Conception UI/UX professionnelle',
        'Intégration front-end optimisée',
        'Expérience utilisateur fluide',
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      demoLink: '#',
      codeLink: 'https://github.com/KINGAMAV/IWT',
    },
  ]

  return (
    <section id="projects" className="py-20 sm:py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-6">
            Mes <span className="text-gradient">Projets</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Découvrez mes réalisations récentes et mes projets en développement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-xl overflow-hidden card-hover group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="flex-1 btn-primary text-center"
                  >
                    Voir plus
                  </button>
                  <a
                    href={project.codeLink}
                    className="flex items-center justify-center gap-2 flex-1 btn-outline text-center"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-effect rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {projects
                .filter((p) => p.id === selectedProject)
                .map((project) => (
                  <div key={project.id}>
                    <div className="relative h-64 sm:h-96">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <FaTimes size={24} />
                      </button>
                    </div>

                    <div className="p-8 space-y-6">
                      <h3 className="text-3xl sm:text-4xl font-bold">{project.title}</h3>
                      <p className="text-lg text-gray-300">{project.longDescription}</p>

                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-primary">
                          Technologies utilisées
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-primary/20 text-primary rounded-lg border border-primary/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-primary">
                          Fonctionnalités principales
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-primary mt-1">✓</span>
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                          href={project.demoLink}
                          className="flex items-center justify-center gap-2 btn-primary"
                        >
                          <FaExternalLinkAlt /> Voir le projet
                        </a>
                        <a
                          href={project.codeLink}
                          className="flex items-center justify-center gap-2 btn-outline"
                        >
                          <FaGithub /> Voir le code
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
