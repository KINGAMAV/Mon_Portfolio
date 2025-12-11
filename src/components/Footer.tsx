import { FaGithub, FaEnvelope, FaWhatsapp, FaHeart } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'UI/UX', href: '#uiux' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-gradient-to-t from-dark-blue to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold font-display mb-4">
              AMAV<span className="text-primary">I</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Développeur Web Fullstack & UI/UX Designer freelance créatif et passionné.
              Je transforme vos idées en solutions digitales performantes.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:amavipatrick16@gmail.com"
                className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
              <a
                href="https://github.com/kingamav"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://wa.me/2250711056330"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@amav_tech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                aria-label="TikTok"
              >
                <SiTiktok size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleScrollTo(link.href)
                    }}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Liens rapides</h4>
            <ul className="space-y-2">
              {navLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleScrollTo(link.href)
                    }}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="mailto:amavipatrick16@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  amavipatrick16@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+2250711056330" className="hover:text-primary transition-colors">
                  +225 07 11 05 63 30
                </a>
              </li>
              <li>Abidjan, Côte d'Ivoire</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>&copy; {currentYear} Patrick Amavi. Tous droits réservés.</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              Fait avec <FaHeart className="text-red-500 animate-pulse" /> et React + TypeScript
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
