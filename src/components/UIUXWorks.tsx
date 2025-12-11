import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTimes } from 'react-icons/fa'

const UIUXWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const works = [
    {
      id: 1,
      title: 'Interface Mobile App',
      description: 'Design moderne pour application mobile',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Interface de gestion et analytics',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    },
    {
      id: 3,
      title: 'E-commerce Website',
      description: 'Design pour site e-commerce',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
    },
    {
      id: 4,
      title: 'Landing Page',
      description: 'Page d\'atterrissage moderne',
      image: 'https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg',
    },
  ]

  return (
    <section id="uiux" className="py-20 sm:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-6">
            Travaux <span className="text-gradient">UI/UX</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Découvrez mes créations en design d'interfaces utilisateur
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(work.id)}
            >
              <div className="aspect-square relative">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                    <p className="text-gray-300 text-sm">{work.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">
            Ces designs représentent des concepts et réalisations en UI/UX
          </p>
          <p className="text-primary font-semibold">
            Cliquez sur une image pour l'agrandir
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 bg-primary rounded-full hover:bg-primary/80 transition-colors"
              >
                <FaTimes size={24} />
              </button>
              {works
                .filter((w) => w.id === selectedImage)
                .map((work) => (
                  <div key={work.id} className="space-y-4">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-auto rounded-xl"
                    />
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                      <p className="text-gray-400">{work.description}</p>
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

export default UIUXWorks
