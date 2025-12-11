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
      description: 'Mini réseau social dédié aux étudiants de l\'Institut CERCO Abidjan',
      longDescription: 'Cerconnet est une plateforme sociale innovante conçue spécialement pour les étudiants de l\'Institut CERCO Abidjan. Elle permet aux étudiants de se connecter, partager des ressources académiques, collaborer sur des projets et échanger des idées dans un environnement sécurisé et convivial.',
      stack: ['React', 'Bootstrap', 'Node.js', 'Firebase'],
      features: [
        'Système d\'authentification sécurisé',
        'Partage de publications et médias',
        'Messagerie instantanée entre étudiants',
        'Groupes d\'étude et de projet',
        'Fil d\'actualités personnalisé',
        'Notifications en temps réel',
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 2,
      title: 'AMAVGEST',
      description: 'Application web de gestion de plusieurs supermarchés en temps réel',
      longDescription: 'AMAVGEST est une solution complète de gestion multi-magasins permettant une supervision en temps réel de plusieurs supermarchés. L\'application offre deux niveaux d\'accès distincts : gérant et administrateur, avec des tableaux de bord analytiques avancés et des outils de gestion performants.',
      stack: ['React', 'Node.js', 'SQL', 'TypeScript'],
      features: [
        'Gestion d\'inventaire en temps réel',
        'Tableaux de bord analytiques interactifs',
        'Système de gestion des employés',
        'Rapports de ventes et statistiques',
        'Gestion multi-magasins centralisée',
        'Alertes de stock automatiques',
        'Suivi des transactions',
        'Interface gérant et admin distinctes',
      ],
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg',
      demoLink: '#',
      codeLink: '#',
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
