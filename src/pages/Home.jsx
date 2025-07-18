import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users, Target, CheckCircle, ArrowRight } from 'lucide-react'
// --- INÍCIO DA ALTERAÇÃO ---
// Importa o hook useEffect, que usaremos para a lógica do vídeo
import { useRef, useEffect } from 'react'
// --- FIM DA ALTERAÇÃO ---
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import videoBackground from '../assets/VIDEO_EMP.mp4';
// --- INÍCIO DA ALTERAÇÃO ---
// Lembre-se de criar esta imagem. Pode ser um print do primeiro frame do vídeo.
import videoPoster from '../assets/video_poster.jpg'; 
// --- FIM DA ALTERAÇÃO ---

import logoAlupar from '../assets/logos/alupar.png';
import logoWTorre from '../assets/logos/wtorre.png';
import logoLyon from '../assets/logos/lyon.png';
import logoVinci from '../assets/logos/vinci.png';
import logoSnef from '../assets/logos/snef.png';
import logoNova from '../assets/logos/novaengevio.png'
import logoDetronic from '../assets/logos/detronic.png'
import logoacte from '../assets/logos/actemium.png'

const Home = () => {
  const segmentos = [
    {
      title: "Garantias e Fianças",
      description: "Proteção financeira para contratos e obrigações legais, incluindo seguro garantia para licitações e projetos complexos.",
      icon: Shield
    },
    {
      title: "Patrimônio e Operações", 
      description: "Cobertura para ativos e continuidade operacional das empresas, incluindo riscos de engenharia e responsabilidade civil.",
      icon: Target
    },
    {
      title: "Capital Humano",
      description: "Benefícios corporativos para segurança e bem-estar dos colaboradores, incluindo planos de saúde e previdência.",
      icon: Users
    },
    {
      title: "Riscos Especiais",
      description: "Coberturas para ameaças específicas e emergentes, como Cyber Risks, D&O e seguros ambientais.",
      icon: CheckCircle
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

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  // --- INÍCIO DA ALTERAÇÃO ---
  // Lógica para garantir o autoplay do vídeo de fundo
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Autoplay bloqueado, o poster será exibido.
          console.log("Autoplay do vídeo foi bloqueado pelo navegador.", error);
        });
      }
    }
  }, []); // Array vazio garante que o código rode apenas uma vez.
  // --- FIM DA ALTERAÇÃO ---

  return (
    <div className="min-h-screen">
      <section className="relative text-white flex items-center justify-center h-[80vh]">
        
        {/* --- INÍCIO DA ALTERAÇÃO --- */}
        {/* Adicionados os atributos ref, poster e preload para máxima compatibilidade */}
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          poster={videoPoster}
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src={videoBackground} type="video/mp4" />
          Seu navegador não suporta vídeos em HTML5.
        </video>
        {/* --- FIM DA ALTERAÇÃO --- */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="font-inter font-bold text-4xl md:text-6xl mb-6">
              Superamos riscos<br />
              Valorizamos projetos<br />
              Garantimos negócios
            </h1>
            <p className="font-open-sans text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-fb-gray-light">
              Acreditamos que cada patrimônio e projeto merece proteção personalizada.
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
                className="border-white text-fb-blue-deep bg-white hover:bg-fb-blue-deep hover:text-white font-inter font-semibold"
              >
                <Link to="/marcar-reuniao">Marcar Reunião</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* O resto da sua página continua normalmente */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Quem Somos
            </h2>
            <p className="font-open-sans text-lg text-fb-blue-deep max-w-4xl mx-auto mb-8">
              Com quase três décadas de atuação no mercado, a Facility & Bond acumula experiência na estruturação de seguros estratégicos e personalizados para grandes projetos.
            </p>
            <Button 
              asChild
              variant="outline"
              className="border-fb-blue-deep text-fb-blue-deep hover:bg-fb-blue-deep hover:text-white font-inter font-semibold"
            >
              <Link to="/sobre-nos">
                Conheça Nossa História Completa <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-fb-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Nossos Produtos e Serviços
            </h2>
            <p className="font-open-sans text-lg text-fb-blue-deep max-w-3xl mx-auto">
              Oferecemos soluções completas em seguros corporativos com atendimento personalizado para cada necessidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {segmentos.map((segmento, index) => {
              const IconComponent = segmento.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="bg-fb-blue-deep/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-fb-blue-deep" />
                      </div>
                      <h3 className="font-inter font-semibold text-lg text-fb-blue-deep mb-3">
                        {segmento.title}
                      </h3>
                      <p className="font-open-sans text-gray-600 text-sm">
                        {segmento.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild
              className="bg-fb-blue-deep hover:bg-fb-blue-deep/90 text-white font-inter font-semibold"
            >
              <Link to="/segmentos">
                Ver Todos os Produtos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Segmentos de Atuação
            </h2>
            <p className="font-open-sans text-lg text-gray-700 max-w-3xl mx-auto">
              Concentramos nossa expertise em setores estratégicos do mercado de seguros, oferecendo soluções especializadas para cada área de atuação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-inter font-semibold text-xl text-fb-blue-deep mb-4">
                  Energia & Infraestrutura
                </h3>
                <p className="font-open-sans text-gray-600">
                  Soluções especializadas para usinas hidrelétricas, linhas de transmissão e grandes projetos de infraestrutura.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-inter font-semibold text-xl text-fb-blue-deep mb-4">
                  Imobiliário & Construção
                </h3>
                <p className="font-open-sans text-gray-600">
                  Proteção para empreendimentos imobiliários, obras complexas e projetos de construção civil.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-inter font-semibold text-xl text-fb-blue-deep mb-4">
                  Tecnologia & Inovação
                </h3>
                <p className="font-open-sans text-gray-600">
                  Coberturas especializadas para empresas de tecnologia, incluindo cyber risks e proteção digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-fb-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            
            <div className="max-w-4xl mx-auto">
              <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
                Como atuamos com projetos
              </h2>
              <p className="font-open-sans text-lg text-gray-700 mb-6">
                Trabalhamos de forma consultiva e personalizada. Com três décadas de história e inovação, navegamos pelas complexidades do mercado segurador, criando soluções sob medida que combinam diferentes coberturas para atender necessidades específicas.
              </p>
              <p className="font-open-sans text-lg text-gray-700 mb-8">
                Nossa abordagem vai além do papel tradicional de corretora para nos tornarmos verdadeiros parceiros estratégicos, construindo relacionamentos duradouros baseados em confiança mútua.
              </p>
            </div>
            
            <Button 
              asChild
              size="lg"
              className="bg-fb-blue-deep hover:bg-fb-blue-deep/90 text-white font-inter font-semibold"
            >
              <Link to="/cases">
                Ver Cases de Sucesso <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Nossos Clientes
            </h2>
            <p className="font-open-sans text-lg text-gray-700 max-w-3xl mx-auto">
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

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-fb-blue-deep text-fb-blue-deep hover:bg-fb-blue-deep hover:text-white font-inter font-semibold"
            >
              <Link to="/cases">
                Ver Cases de Sucesso <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-fb-blue-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-inter font-bold text-3xl md:text-4xl mb-6">
              Pronto para proteger seu projeto?
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;