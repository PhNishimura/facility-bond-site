import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin } from 'lucide-react'

// Importar logo cinza para o footer
import logoCinza from '../assets/F&B_Assinaturas_v2.png'
import seloCinza from '../assets/F&B_Selo_Cinza.png'

const Footer = () => {
  return (
    <footer className="bg-fb-blue-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src={logoCinza} 
              alt="Facility & Bond" 
              className="h-18 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="font-open-sans text-gray-300 mb-4 max-w-md">
              Há três décadas, construímos pontes entre sonhos empresariais e sua realização segura, 
              transformando complexidade em clareza, riscos em oportunidades.
            </p>
            <p className="font-inter font-semibold text-lg text-white">
              Superamos riscos<br />
              Valorizamos projetos<br />
              Garantimos negócios
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-inter font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="font-open-sans text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/sobre-nos" 
                  className="font-open-sans text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link 
                  to="/segmentos" 
                  className="font-open-sans text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link 
                  to="/cases" 
                  className="font-open-sans text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Cases de Sucesso
                </Link>
              </li>
              <li>
                <Link 
                  to="/cotacao" 
                  className="font-open-sans text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Faça sua cotação
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-inter font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gray-300" />
                <a 
                  href="mailto:contato@facilitybond.com.br" 
                  className="font-open-sans text-gray-300 hover:text-white transition-colors duration-200"
                >
                  contato@facilitybond.com.br
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gray-300" />
                <a 
                  href="tel:+551144188329" 
                  className="font-open-sans text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +55 11 4418-8329
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-gray-300" />
                <span className="font-open-sans text-gray-300">
                  Rua Pompéu Vairo, 123<br />
                  Atibaia, São Paulo, Brasil
                </span>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="mt-6">
              <h4 className="font-inter font-medium text-white mb-3">Siga-nos</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/551144188329" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <MessageCircle className="h-6 w-6" />
                </a>
                <a 
                  href="https://instagram.com/facilitybond" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://linkedin.com/company/facilitybond" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória e copyright */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-open-sans text-gray-300 text-sm">
              © 2025 Facility & Bond. Todos os direitos reservados.
            </p>
            <img 
              src={seloCinza} 
              alt="30anosFacility" 
              className="h-20 w-auto mb-4 filter brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

