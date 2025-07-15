import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Building, Zap, Globe, Calendar, MapPin, ArrowRight, CheckCircle } from 'lucide-react'
import { useRef } from 'react'
import Autoplay from "embla-carousel-autoplay"

// 1. Componentes do Carrossel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// 2. Logos dos clientes
import logoAlupar from '../assets/logos/alupar.png';
import logoWTorre from '../assets/logos/wtorre.png';
import logoLyon from '../assets/logos/lyon.png';
import logoVinci from '../assets/logos/vinci.png';
import logoSnef from '../assets/logos/snef.png';
import logoNova from '../assets/logos/novaengevio.png';
import logoDetronic from '../assets/logos/detronic.png';
import logoacte from '../assets/logos/actemium.png'

// 3. Imagens dos projetos
import picAlians from '../assets/jobs/alians.jpg'
import picAlto from '../assets/jobs/alto.jpg'
import picChile from '../assets/jobs/chile.jpg'
import picEate from '../assets/jobs/eate.jpg'
import picIlu from '../assets/jobs/iluminacao.jpeg'
import picFoz from '../assets/jobs/uheFoz.jpg'
import picIju from '../assets/jobs/uheIjui.jpg'
import picSao from '../assets/jobs/uheSaoRoque.jpg'
import picCamp from '../assets/jobs/campoPequeno.jpg'


const Cases = () => {
  // Adicionando a propriedade 'imagem' a cada projeto
  const casesEnergia = [
    {
      nome: "UHE São Roque",
      cliente: "Engevix",
      capacidade: "141,9 MW",
      conclusao: "2022",
      tipo: "Usina Hidrelétrica",
      imagem: picSao
    },
    {
      nome: "UHE Ijuí",
      cliente: "Alupar",
      capacidade: "51 MW",
      conclusao: "2012",
      tipo: "Usina Hidrelétrica",
      imagem: picIju
    },
    {
      nome: "UHE Foz do Rio Claro",
      cliente: "Alupar",
      capacidade: "68,4 MW",
      conclusao: "2012",
      tipo: "Usina Hidrelétrica",
      imagem: picFoz
    },
    {
      nome: "EATE Transmission Line",
      cliente: "Alupar",
      capacidade: "1.200 MW",
      extensao: "924 km",
      conclusao: "2003",
      tipo: "Linha de Transmissão",
      imagem: picEate
    },
    {
      nome: "Iluminação Pública de SP",
      cliente: "Luzes Paulistanas",
      valor: "R$ 7,3 bilhões",
      prazo: "20 anos de contrato",
      tipo: "Infraestrutura Urbana",
      imagem: picIlu
    }
  ]

  const casesImobiliario = [
    {
      nome: "Allianz Parque",
      cliente: "WTorre",
      area: "190.000 m²",
      conclusao: "2016",
      tipo: "Arena Esportiva",
      imagem: picAlians
    },
    {
      nome: "Complexo Alto das Nações",
      cliente: "WTorre",
      area: "320.000 m²",
      fases: "Fase 1: 2022, Fase 2: 2025",
      tipo: "Complexo Comercial",
      imagem: picAlto
    },
    {
      nome: "Aeroporto de Santiago - Chile",
      cliente: "Vinci",
      escopo: "Fachada",
      conclusao: "2022",
      tipo: "Infraestrutura Aeroportuária",
      imagem: picChile
    }
  ]

  const casesTec = [
    {
      nome: "Campo Pequeno - Portugal",
      cliente: "WTorre",
      valor: "€100 milhões",
      conclusao: "2006",
      tipo: "Desenvolvimento Imobiliário",
      imagem: picCamp
    }
  ]
  
  const clientes = [
    { name: "Alupar", logo: logoAlupar },
    { name: "WTorre", logo: logoWTorre },
    { name: "Lyon", logo: logoLyon },
    { name: "Vinci", logo: logoVinci },
    { name: "Snef", logo: logoSnef },
    { name: "Nova", logo: logoNova },
    { name: "Detronic", logo: logoDetronic },
    { name: "Actemium", logo: logoacte }
  ]

  const faqItems = [
    {
      pergunta: "Como a Facility & Bond estrutura projetos complexos?",
      resposta: "Utilizamos nossa expertise construída ao longo de quase três décadas para criar soluções sob medida, combinando diferentes coberturas e atuando de forma consultiva em todas as etapas do projeto."
    },
    {
      pergunta: "Qual o diferencial em projetos de grande porte?",
      resposta: "Nossa capacidade de estruturar coberturas personalizadas e nosso relacionamento próximo com seguradoras e resseguradoras nos permite viabilizar projetos complexos com as melhores condições."
    },
    {
      pergunta: "Vocês atuam em projetos internacionais?",
      resposta: "Sim, temos experiência em projetos internacionais e parcerias que nos permitem oferecer cobertura global para nossos clientes."
    },
    {
      pergunta: "Como é o acompanhamento durante a execução do projeto?",
      resposta: "Oferecemos acompanhamento estratégico em cada fase do projeto, desde a licitação até a entrada em operação, garantindo proteção contínua."
    }
  ]
  
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="min-h-screen">
      {/* Hero: Cases de Sucesso */}
      <section className="bg-fb-blue-deep text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-inter font-bold text-4xl md:text-6xl mb-6">
              Cases de Sucesso
            </h1>
            <p className="font-open-sans text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Transformamos riscos em oportunidades por meio de inteligência e precisão. Conheça alguns dos projetos que ajudamos a tirar do papel com segurança, estratégia e resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-fb-blue-deep hover:bg-gray-100 font-inter font-semibold">
                <Link to="/cotacao">Solicitar Cotação</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-fb-blue-deep hover:bg-gray-100 font-inter font-semibold">
                <Link to="/marcar-reuniao">Marcar Reunião</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Energia & Infraestrutura */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-fb-blue-deep mr-3" />
              <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep">
                Energia & Infraestrutura
              </h2>
            </div>
            <p className="font-open-sans text-lg text-gray-700 max-w-3xl mx-auto">
              Soluções especializadas para usinas hidrelétricas, linhas de transmissão e grandes projetos de infraestrutura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {casesEnergia.map((projeto, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={projeto.imagem} 
                  alt={`Imagem do projeto ${projeto.nome}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6
                                opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-inter font-bold text-xl text-white mb-2">
                      {projeto.nome}
                    </h3>
                    <div className="space-y-2 text-sm border-t border-white/20 pt-3 mt-3">
                      {projeto.capacidade && (
                        <div className="flex items-center text-gray-200">
                          <Zap className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>Capacidade: {projeto.capacidade}</span>
                        </div>
                      )}
                      {projeto.extensao && (
                        <div className="flex items-center text-gray-200">
                          <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>Extensão: {projeto.extensao}</span>
                        </div>
                      )}
                      {projeto.valor && (
                        <div className="flex items-center text-gray-200">
                          <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>Valor: {projeto.valor}</span>
                        </div>
                      )}
                      {projeto.prazo && (
                         <div className="flex items-center text-gray-200">
                           <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                           <span>{projeto.prazo}</span>
                         </div>
                       )}
                       {projeto.conclusao && (
                         <div className="flex items-center text-gray-200">
                           <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                           <span>Conclusão: {projeto.conclusao}</span>
                         </div>
                       )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Imobiliário & Construção Civil */}
      <section className="py-16 bg-fb-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Building className="h-8 w-8 text-fb-blue-deep mr-3" />
              <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep">
                Imobiliário & Construção Civil
              </h2>
            </div>
            <p className="font-open-sans text-lg text-gray-700 max-w-3xl mx-auto">
              Proteção para empreendimentos imobiliários, obras complexas e projetos de construção civil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {casesImobiliario.map((projeto, index) => (
               <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={projeto.imagem} 
                  alt={`Imagem do projeto ${projeto.nome}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6
                                opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-inter font-bold text-xl text-white mb-2">
                      {projeto.nome}
                    </h3>
                    <div className="space-y-2 text-sm border-t border-white/20 pt-3 mt-3">
                      {projeto.area && (
                        <div className="flex items-center text-gray-200">
                          <Building className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>Área: {projeto.area}</span>
                        </div>
                      )}
                      {projeto.escopo && (
                        <div className="flex items-center text-gray-200">
                          <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>Escopo: {projeto.escopo}</span>
                        </div>
                      )}
                      <div className="flex items-center text-gray-200">
                        <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{projeto.fases || `Conclusão: ${projeto.conclusao}`}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internacional & Tecnologia */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Globe className="h-8 w-8 text-fb-blue-deep mr-3" />
              <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep">
                Internacional & Tecnologia
              </h2>
            </div>
            <p className="font-open-sans text-lg text-gray-700 max-w-3xl mx-auto">
              Projetos internacionais e soluções tecnológicas que demonstram nossa capacidade global.
            </p>
          </div>

          {/* Projeto com imagem - Campo Pequeno */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-md">
              {casesTec.map((projeto, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src={projeto.imagem} 
                    alt={`Imagem do projeto ${projeto.nome}`}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6
                                  opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-inter font-bold text-xl text-white mb-2">
                        {projeto.nome}
                      </h3>
                      <div className="space-y-2 text-sm border-t border-white/20 pt-3 mt-3">
                        {projeto.valor && (
                          <div className="flex items-center text-gray-200">
                            <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span>Valor: {projeto.valor}</span>
                          </div>
                        )}
                        <div className="flex items-center text-gray-200">
                          <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>Conclusão: {projeto.conclusao}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PARA DEPOIS Card da Plataforma Tecnológica 
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-inter font-semibold text-lg text-fb-blue-deep mb-2">
                      Plataforma de Análise de Crédito Online
                    </h3>
                    <span className="inline-block bg-fb-blue-deep/10 text-fb-blue-deep text-xs font-medium px-2 py-1 rounded">
                      Tecnologia & Inovação
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="font-open-sans text-gray-600">
                        Redução no tempo de aprovação de garantias
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="font-open-sans text-gray-600">
                        Mais previsibilidade para investidores
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="font-open-sans text-gray-600">
                        Automação no monitoramento de riscos
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          */}
        </div>
      </section>

      {/* Clientes (Validação) - AGORA COM CARROSSEL */}
      <section className="py-16 bg-fb-blue-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl mb-6">
              Nossos Clientes Fazem Parte Dessa História
            </h2>
            <p className="font-open-sans text-lg text-gray-200 max-w-3xl mx-auto">
              Empresas que confiam em nossa expertise para proteger seus projetos mais importantes.
            </p>
          </div>

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
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg h-28 flex items-center justify-center p-4 transition-all duration-300 hover:bg-white">
                      <img
                        src={cliente.logo}
                        alt={cliente.name}
                        className="max-h-16 max-w-full object-contain"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex text-white bg-white/10 hover:bg-white/20 border-white/20" />
            <CarouselNext className="hidden sm:flex text-white bg-white/10 hover:bg-white/20 border-white/20" />
          </Carousel>
        </div>
      </section>

      {/* Solicitar Cotação CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Seu projeto pode ser o próximo case de sucesso
            </h2>
            <p className="font-open-sans text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Entre em contato conosco e descubra como podemos estruturar uma solução personalizada para viabilizar seu projeto com segurança e eficiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-fb-blue-deep hover:bg-fb-blue-deep/90 text-white font-inter font-semibold">
                <Link to="/cotacao">Solicitar Cotação</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-fb-blue-deep text-fb-blue-deep hover:bg-fb-blue-deep hover:text-white font-inter font-semibold transition-colors">
                  <Link to="/marcar-reuniao">Marcar Reunião</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-fb-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Perguntas Frequentes
            </h2>
            <p className="font-open-sans text-lg text-gray-700">
              Tire suas dúvidas sobre planejamento, estruturação e execução de projetos.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="bg-white overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-lg text-fb-blue-deep mb-3">
                    {item.pergunta}
                  </h3>
                  <p className="font-open-sans text-gray-700 leading-relaxed">
                    {item.resposta}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-open-sans text-gray-600 mb-4">
              Tem um projeto em mente? Vamos conversar!
            </p>
            <Button asChild className="bg-fb-blue-deep hover:bg-fb-blue-deep/90 text-white font-inter font-semibold">
              <Link to="/cotacao">
                Falar com Especialista <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cases