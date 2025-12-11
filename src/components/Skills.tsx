import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaFigma,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiMysql,
} from 'react-icons/si'

const FaPalette = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.21-.64-1.67-.08-.09-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8s1.5.67 1.5 1.5S7.33 11 6.5 11zm3-4C8.67 7 8 6.33 8 5.5S8.67 4 9.5 4s1.5.67 1.5 1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4 14.5 4s1.5.67 1.5 1.5S15.33 7 14.5 7zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 8 17.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
)

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { name: 'HTML', level: 95, icon: <FaHtml5 />, color: '#E44D26', category: 'Frontend' },
    { name: 'CSS', level: 90, icon: <FaCss3Alt />, color: '#2965F1', category: 'Frontend' },
    { name: 'JavaScript', level: 85, icon: <FaJs />, color: '#F0DB4F', category: 'Frontend' },
    { name: 'ReactJS', level: 85, icon: <FaReact />, color: '#61DAFB', category: 'Frontend' },
    { name: 'TypeScript', level: 80, icon: <SiTypescript />, color: '#3178C6', category: 'Frontend' },
    { name: 'NodeJS', level: 75, icon: <FaNodeJs />, color: '#68A063', category: 'Backend' },
    { name: 'Bootstrap', level: 85, icon: <FaBootstrap />, color: '#7952B3', category: 'Frontend' },
    { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss />, color: '#06B6D4', category: 'Frontend' },
    { name: 'SQL', level: 80, icon: <SiMysql />, color: '#4479A1', category: 'Backend' },
    { name: 'Firebase', level: 75, icon: <SiFirebase />, color: '#FFCA28', category: 'Backend' },
    { name: 'UI/UX Design', level: 85, icon: <FaPalette />, color: '#FF6B6B', category: 'Design' },
    { name: 'Figma', level: 85, icon: <FaFigma />, color: '#F24E1E', category: 'Design' },
  ]

  const categories = ['Frontend', 'Backend', 'Design']

  return (
    <section id="skills" className="py-20 sm:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-6">
            Mes <span className="text-gradient">Compétences</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions web modernes
          </p>
        </motion.div>

        {categories.map((category, catIndex) => (
          <div key={category} className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="text-2xl sm:text-3xl font-bold text-primary mb-8"
            >
              {category}
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: catIndex * 0.1 + index * 0.1 }}
                    className="glass-effect p-6 rounded-xl card-hover group"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div
                        className="text-5xl sm:text-6xl transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold text-lg">{skill.name}</h4>
                      <div className="w-full">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-400">Niveau</span>
                          <span className="text-primary font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.1 + 0.3 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 glass-effect p-8 rounded-xl text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Compétences Personnelles</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
            {[
              'Créativité',
              'Adaptabilité',
              'Gestion du stress',
              'Curiosité technologique',
              'Esprit d\'équipe',
              'Sens de l\'analyse',
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-primary/10 border border-primary/30 rounded-lg p-4 hover:bg-primary/20 transition-all duration-300"
              >
                <p className="text-sm font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
