import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Building, Users, Zap, Plus, ArrowRight, CheckCircle } from 'lucide-react'
import { useRef } from 'react'
import Autoplay from "embla-carousel-autoplay"

// 1. Importar os componentes do Carrossel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// 2. Importar os logos dos clientes
import logoAlupar from '../assets/logos/alupar.png';
import logoWTorre from '../assets/logos/wtorre.png';
import logoLyon from '../assets/logos/lyon.png';
import logoVinci from '../assets/logos/vinci.png';
import logoSnef from '../assets/logos/snef.png';
import logoNova from '../assets/logos/novaengevio.png'
import logoDetronic from '../assets/logos/detronic.png'

const Segmentos = () => {
  const segmentos = [
    {
      id: 'garantia',
      title: "Garantia",
      description: "Proteção financeira para contratos e obrigações legais",
      icon: Shield,
      produtos: [
        "Bid Bond - Garantia de participação em licitações",
        "Performance Bond - Garantia de execução contratual",
        "Completion Bond - Garantia de conclusão de projetos",
        "Garantias Judiciais e Tributárias",
        "Garantias Financeiras e Imobiliárias"
      ],
      beneficios: "Minimiza riscos financeiros e garante cumprimento contratual",
      exemplos: "Seguro garantia para licitações, contratos de infraestrutura e completion bond para projetos imobiliários"
    },
    {
      id: 'patrimonial',
      title: "Patrimonial",
      description: "Cobertura para ativos e continuidade operacional das empresas",
      icon: Building,
      produtos: [
        "Riscos Nomeados e Operacionais",
        "Riscos de Engenharia",
        "Responsabilidade Civil",
        "Riscos Diversos",
        "Seguro Condomínio"
      ],
      beneficios: "Protege contra imprevistos que podem comprometer negócios",
      exemplos: "Seguro patrimonial para indústrias, risco de engenharia para obras e responsabilidade civil para empresas"
    },
    {
      id: 'rc-re',
      title: "RC & RE (Risco Civil & Riscos de Engenharia)",
      description: "Proteção especializada para responsabilidade civil e riscos de engenharia",
      icon: Building,
      produtos: [
        "Responsabilidade Civil Geral",
        "Responsabilidade Civil Profissional",
        "Riscos de Engenharia - Construção",
        "Riscos de Engenharia - Montagem",
        "Quebra de Máquinas"
      ],
      beneficios: "Cobertura abrangente para danos a terceiros e equipamentos",
      exemplos: "RC para empresas de construção, riscos de engenharia para obras complexas"
    },
    {
      id: 'beneficios',
      title: "Benefícios",
      description: "Benefícios corporativos para segurança e bem-estar dos colaboradores",
      icon: Users,
      produtos: [
        "Saúde Corporativa",
        "Vida e Acidentes Pessoais",
        "Assistência de Saúde",
        "Previdência Privada",
        "Seguro Viagem Corporativo"
      ],
      beneficios: "Retenção de talentos, proteção financeira e suporte assistencial",
      exemplos: "Planos de saúde empresarial, seguro de vida e previdência privada para funcionários"
    },
    {
      id: 'outros',
      title: "Outros",
      description: "Coberturas para ameaças específicas e emergentes",
      icon: Zap,
      produtos: [
        "Cyber Risks - Proteção digital",
        "D&O - Directors & Officers",
        "Seguro Ambiental",
        "Seguro Agrícola",
        "Seguros Especiais"
      ],
      beneficios: "Proteção personalizada para riscos que exigem expertise avançada",
      exemplos: "Seguro Cyber Risks contra ataques digitais, seguro ambiental para empresas com impacto ecológico e D&O para executivos"
    }
  ]

  // 3. Array de clientes com objetos (nome e logo)
  const clientes = [
    { name: "Alupar", logo: logoAlupar },
    { name: "WTorre", logo: logoWTorre },
    { name: "Lyon", logo: logoLyon },
    { name: "Vinci", logo: logoVinci },
    { name: "Snef", logo: logoSnef },
    { name: "Nova", logo: logoNova },
    { name: "Detronic", logo: logoDetronic },
  ]

  const faqItems = [
    {
      pergunta: "Qual é o diferencial da Facility & Bond em seguros corporativos?",
      resposta: "Nossa expertise de 30 anos em seguro garantia e nossa abordagem consultiva personalizada nos diferencia no mercado."
    },
    {
      pergunta: "Como funciona o processo de cotação?",
      resposta: "Realizamos uma análise detalhada das necessidades do cliente e estruturamos soluções sob medida com as melhores condições do mercado."
    },
    {
      pergunta: "Quais setores vocês atendem?",
      resposta: "Atendemos principalmente energia, infraestrutura, construção civil, tecnologia e grandes corporações."
    },
    {
      pergunta: "Vocês trabalham com que seguradoras?",
      resposta: "Temos parcerias com as principais seguradoras e resseguradoras do mercado nacional e internacional."
    }
  ]

  // 4. Configuração do plugin de autoplay
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="min-h-screen">
      {/* Hero: Projetos Estruturados */}
      <section className="bg-fb-blue-deep text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-inter font-bold text-4xl md:text-6xl mb-6">
              Produtos
            </h1>
            <p className="font-open-sans text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Concentramos nossa expertise em setores estratégicos do mercado de seguros, oferecendo soluções especializadas para cada área de atuação.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-fb-blue-deep hover:bg-gray-100 font-inter font-semibold"
            >
              <Link to="/cotacao">Solicitar Cotação</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Produtos e Serviços */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Oferecemos soluções completas em seguros corporativos, com foco em riscos complexos e atendimento personalizado para cada necessidade.
            </h2> 
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {segmentos.map((segmento, index) => {
              const IconComponent = segmento.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-fb-blue-deep/10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-8 w-8 text-fb-blue-deep" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-inter font-semibold text-xl text-fb-blue-deep mb-3">
                          {segmento.title}
                        </h3>
                        <p className="font-open-sans text-gray-600 mb-4">
                          {segmento.description}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="font-inter font-medium text-fb-blue-deep mb-2">Produtos:</h4>
                          <ul className="space-y-1">
                            {segmento.produtos.slice(0, 3).map((produto, idx) => (
                              <li key={idx} className="font-open-sans text-sm text-gray-600 flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {produto}
                              </li>
                            ))}
                            {segmento.produtos.length > 3 && (
                              <li className="font-open-sans text-sm text-gray-500 flex items-center">
                                <Plus className="h-4 w-4 text-gray-400 mr-2" />
                                +{segmento.produtos.length - 3} outros produtos
                              </li>
                            )}
                          </ul>
                        </div>

                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="border-fb-blue-deep text-fb-blue-deep hover:bg-fb-blue-deep hover:text-white"
                        >
                          <Link to={`/segmentos/${segmento.id}`}>
                            Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Clientes (Validação) - AGORA COM CARROSSEL */}
      <section className="py-16 bg-fb-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Nossos Clientes
            </h2>
            <p className="font-open-sans text-lg text-gray-700 max-w-3xl mx-auto">
              Empresas que confiam em nossa expertise para proteger seus projetos mais importantes.
            </p>
          </div>

          {/* 5. Implementação do Carrossel */}
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-6xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {clientes.map((cliente, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                  <div className="p-1">
                      <div className="bg-white p-6 rounded-lg shadow-md h-28 flex items-center justify-center">
                        <img
                          src={cliente.logo}
                          alt={cliente.name}
                          className="max-h-20 max-w-full object-contain"
                        />
                      </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* Solicitar Cotação CTA */}
      <section className="py-16 bg-fb-blue-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-inter font-bold text-3xl md:text-4xl mb-6">
              Pronto para proteger seu negócio?
            </h2>
            <p className="font-open-sans text-lg mb-8 max-w-3xl mx-auto text-gray-200">
              Entre em contato conosco e descubra como podemos criar uma solução personalizada para suas necessidades de proteção empresarial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-fb-blue-deep hover:bg-gray-100 font-inter font-semibold"
              >
                <Link to="/cotacao">Solicitar Cotação</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white text-fb-blue-deep hover:bg-gray-100 font-inter font-semibold"
              >
                <a href="mailto:contato@facilitybond.com.br">Enviar E-mail</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Perguntas Frequentes
            </h2>
            <p className="font-open-sans text-lg text-gray-700">
              Tire suas dúvidas sobre nossos produtos e segmentos de atuação.
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-lg text-fb-blue-deep mb-3">
                    {item.pergunta}
                  </h3>
                  <p className="font-open-sans text-gray-700">
                    {item.resposta}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-open-sans text-gray-600 mb-4">
              Não encontrou a resposta que procurava?
            </p>
            <Button
              asChild
              variant="outline"
              className="border-fb-blue-deep text-fb-blue-deep hover:bg-fb-blue-deep hover:text-white font-inter font-semibold"
            >
              <Link to="/cotacao">Entre em Contato</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Segmentos