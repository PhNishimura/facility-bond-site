import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
// Ícones atualizados para incluir os da nova seção
import { Shield, Target, Users, ArrowRight, FileText, Building } from 'lucide-react'

const SobreNos = () => {
  const pilares = [
    {
      title: "Expertise Visionária",
      description: "Nossa profunda compreensão técnica, aliada a quase três décadas de atuação no mercado, nos permite enxergar oportunidades e riscos onde outros veem apenas complexidade.",
      icon: Target
    },
    {
      title: "Proteção Personalizada",
      description: "Mergulhamos profundamente no universo de cada cliente para criar soluções verdadeiramente sob medida, garantindo que nossos clientes tenham exatamente a proteção que precisam.",
      icon: Shield
    },
    {
      title: "Parceria Transformadora",
      description: "Vamos além do papel tradicional de corretora para nos tornarmos verdadeiros parceiros estratégicos, construindo relacionamentos duradouros baseados em confiança mútua.",
      icon: Users
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero: Segmentos de Atuação */}
      <section className="bg-fb-blue-deep text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-white mb-6">
              Nossa História
            </h2>
            <p className="font-open-sans text-lg text-white max-w-4xl mx-auto">
              Há três décadas, construímos pontes entre sonhos empresariais e sua realização segura, transformando complexidade em clareza, riscos em oportunidades.
            </p>
          </div>
          
          <div className="bg-fb-gray-light p-8 rounded-lg">
            <p className="font-open-sans text-lg text-gray-700 mb-6">
              A Facility & Bond acumula experiência na estruturação de seguros estratégicos e personalizados para grandes projetos. Construímos relações duradouras com empresas que compartilham nossa visão de excelência, solidez e inovação em proteção de riscos complexos.
            </p>
            <p className="font-open-sans text-lg text-gray-700">
              Nossa expertise não está apenas em intermediar seguros, mas em desenhar proteções tão únicas quanto os projetos que salvaguardamos. Mergulhamos profundamente no universo de cada cliente para emergir com soluções que transcendem o convencional.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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
      </section>





      {/* História + Posicionamento */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-inter font-bold text-fb-blue-deep md:text-5xl mb-6">
                Como atuamos nas diferentes áreas
              </h1>
              <p className="font-open-sans text-xl mb-6 text-fb-blue-deep">
                Nossa atuação abrange desde programas completos de benefícios e soluções para grandes riscos até estruturações sofisticadas de seguro garantia para projetos complexos, sempre com uma abordagem personalizada.
              </p>
              <p className="font-open-sans text-lg text-fb-blue-deep">
                Somos reconhecidos por clientes, seguradoras e resseguradoras pela capacidade de criar soluções que atendem precisamente às necessidades de todas as partes envolvidas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button 
                  asChild
                  size="lg"
                  className="bg-fb-blue-deep text-white hover:bg-gray-100 font-inter font-semibold"
                >
                  <Link to="/cotacao">Solicitar Cotação</Link>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  className="bg-fb-blue-deep text-white hover:bg-gray-100 font-inter font-semibold"
                >
                  <Link to="/marcar-reuniao">Marcar Reunião</Link>
                </Button>
              </div>
            </div>
            <div className="bg-gray-200 backdrop-blur-sm p-8 rounded-lg">
              <div className="text-center">
                <h2 className="font-inter font-bold text-fb-blue-deep mb-4">Nosso Diferencial</h2>
                <p className="font-open-sans text-fb-blue-deep">
                  Nos posicionamos como uma corretora de seguros boutique, referência em soluções personalizadas para riscos complexos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posicionamento (Why) */}
      <section className="py-16 bg-fb-blue-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl mb-6">
              Nosso Propósito
            </h2>
            <p className="font-open-sans text-xl text-gray-200 max-w-4xl mx-auto">
              Acreditamos que cada patrimônio e projeto merece proteção personalizada. Somos o elo que garante tranquilidade aos nossos clientes, permitindo a realização de projetos ambiciosos com segurança.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pilares.map((pilar, index) => {
              const IconComponent = pilar.icon
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 text-center">
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-inter font-semibold text-xl text-white mb-4">
                      {pilar.title}
                    </h3>
                    <p className="font-open-sans text-gray-200">
                      {pilar.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* --- INÍCIO DA NOVA SEÇÃO --- */}
      {/* Seção da Jornada do Cliente */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-4">
              Parceiros na Jornada de Quem Ousa Realizar
            </h2>
            <p className="font-open-sans text-lg text-gray-700 max-w-3xl mx-auto">
              Não vendemos apólices isoladas. Oferecemos uma jornada completa de proteção estratégica para cada fase do seu projeto.
            </p>
          </div>

          <div className="relative">
            {/* Linha do tempo vertical no desktop */}
            <div className="hidden lg:block absolute left-1/2 -ml-px top-7 h-[calc(100%-4rem)] w-0.5 bg-gray-200" aria-hidden="true"></div>

            <ul className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              {/* Etapa 1: Licitação */}
              <li className="relative">
                 <div className="lg:absolute left-1/2 top-0 -translate-x-1/2 flex h-18 w-18 items-center justify-center mb-4 lg:mb-0">
                     <div className="bg-white rounded-full p-2 ring-8 ring-white">
                         <div className="bg-fb-blue-deep text-white rounded-full h-14 w-14 flex items-center justify-center">
                            <FileText className="h-7 w-7"/>
                         </div>
                     </div>
                 </div>
                  <Card className="lg:mt-24 lg:min-h-[200px] flex flex-col">
                    <CardContent className="p-6 text-center flex flex-col"> 
                      <h3 className="font-inter font-semibold text-xl text-fb-blue-deep mb-2">1. Licitação e Contratação</h3>
                      <p className="font-open-sans text-gray-600 mb-3">
                        Garantimos a segurança contratual desde o início, com Bid Bond e Performance Bond, viabilizando sua participação em grandes projetos.
                      </p>
                    </CardContent>
                  </Card>
              </li>

              {/* Etapa 2: Execução do Projeto */}
              <li className="relative">
                 <div className="lg:absolute left-1/2 top-0 -translate-x-1/2 flex h-18 w-18 items-center justify-center mb-4 lg:mb-0">
                    <div className="bg-white rounded-full p-2 ring-8 ring-white">
                        <div className="bg-fb-blue-deep text-white rounded-full h-14 w-14 flex items-center justify-center">
                          <Building className="h-7 w-7"/>
                        </div>
                    </div>
                 </div>
                  <Card className="lg:mt-24 lg:min-h-[242px] flex flex-col">
                    <CardContent className="p-6 text-center flex flex-col">
                      <h3 className="font-inter font-semibold text-xl text-fb-blue-deep mb-2">2. Execução do Projeto</h3>
                      <p className="font-open-sans text-gray-600 mb-3">
                        Protegemos seus ativos e operações com seguros de Riscos de Engenharia, Responsabilidade Civil e Patrimonial.
                      </p>
                    </CardContent>
                  </Card>
              </li>

              {/* Etapa 3: Operação e Riscos Contínuos */}
              <li className="relative">
                 <div className="lg:absolute left-1/2 top-0 -translate-x-1/2 flex h-18 w-18 items-center justify-center mb-4 lg:mb-0">
                    <div className="bg-white rounded-full p-2 ring-8 ring-white">
                        <div className="bg-fb-blue-deep text-white rounded-full h-14 w-14 flex items-center justify-center">
                          <Shield className="h-7 w-7"/>
                        </div>
                    </div>
                 </div>
                  <Card className="lg:mt-24 lg:min-h-[242px] flex flex-col">
                    <CardContent className="p-6 text-center flex flex-col">
                      <h3 className="font-inter font-semibold text-xl text-fb-blue-deep mb-2">3. Operação Contínua</h3>
                      <p className="font-open-sans text-gray-600 mb-3">
                        Após a conclusão, garantimos a proteção contra riscos operacionais e ameaças emergentes como Cyber Risks e D&O.
                      </p>
                    </CardContent>
                  </Card>
              </li>
            </ul>
            
            <div className="text-center mt-16">
              <Button 
                asChild
                className="bg-fb-blue-deep hover:bg-fb-blue-deep/90 text-white font-inter font-semibold"
              >
                <Link to="/segmentos">
                  Conheça nossos produtos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* --- FIM DA NOVA SEÇÃO --- */}

    </div>
  )
}

export default SobreNos