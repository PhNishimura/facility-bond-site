import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Importar logo principal
import logoAzul from '../assets/F&B_Assinaturas_v2.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Sobre Nós', path: '/sobre-nos' },
    { name: 'Produtos', path: '/segmentos' },
    { name: 'Cases de Sucesso', path: '/cases' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src={logoAzul} 
                alt="Facility & Bond" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-inter font-medium px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-fb-blue-deep bg-fb-gray-light'
                      : 'text-gray-700 hover:text-fb-blue-deep hover:bg-fb-gray-light'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                asChild
                className="bg-fb-blue-deep hover:bg-fb-blue-deep/90 text-white font-inter font-medium"
              >
                <Link to="/cotacao">Faça sua cotação</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-fb-blue-deep hover:bg-fb-gray-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fb-blue-deep"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-inter font-medium block px-3 py-2 rounded-md text-base transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-fb-blue-deep bg-fb-gray-light'
                      : 'text-gray-700 hover:text-fb-blue-deep hover:bg-fb-gray-light'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button 
                  asChild
                  className="w-full bg-fb-blue-deep hover:bg-fb-blue-deep/90 text-white font-inter font-medium"
                >
                  <Link to="/cotacao" onClick={() => setIsOpen(false)}>
                    Faça sua cotação
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

