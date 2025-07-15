import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  Building2, 
  Gavel, 
  FileText, 
  CheckCircle, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react'

const SegmentoGarantia = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const produtos = [
    {
      nome: "Seguro Garantia de Execução",
      descricao: "Garante o cumprimento das obrigações contratuais em obras e serviços",
      icone: Building2,
      aplicacoes: ["Construção Civil", "Obras Públicas", "Prestação de Serviços"]
    },
    {
      nome: "Seguro Garantia de Licitante",
      descricao: "Assegura que o vencedor da licitação assinará o contrato",
      icone: FileText,
      aplicacoes: ["Licitações Públicas", "Concorrências", "Pregões"]
    },
    {
      nome: "Seguro Garantia Judicial",
      descricao: "Substitui depósitos judiciais em processos administrativos e cíveis",
      icone: Gavel,
      aplicacoes: ["Processos Trabalhistas", "Execuções Fiscais", "Recursos"]
    },
    {
      nome: "Seguro Garantia de Adiantamento",
      descricao: "Garante a correta utilização de valores pagos antecipadamente",
      icone: Shield,
      aplicacoes: ["Contratos de Fornecimento", "Obras com Antecipação", "Serviços"]
    }
  ]

  const faqItems = [
    {
      pergunta: "O que é seguro garantia?",
      resposta: "O seguro garantia é um tipo de apólice que tem como objetivo assegurar o cumprimento de um contrato. Ele é frequentemente utilizado em negociações comerciais, contratos de prestação de serviços e em processos licitatórios, garantindo que as obrigações estabelecidas no contrato serão cumpridas."
    },
    {
      pergunta: "Como funciona o seguro garantia?",
      resposta: "O seguro garantia funciona como um contrato tripartite, envolvendo três partes principais: o Tomador (empresa que contrata o seguro), o Segurado (empresa beneficiária) e a Seguradora (empresa que emite a apólice e assume o risco)."
    },
    {
      pergunta: "Quais as vantagens do seguro garantia?",
      resposta: "As principais vantagens incluem: preservação do capital de giro, acesso a oportunidades de licitações, maior credibilidade, custo-benefício superior a outras garantias e flexibilidade de modalidades."
    },
    {
      pergunta: "Qual a diferença entre seguro garantia e carta fiança?",
      resposta: "O seguro garantia é um produto de seguradora regulado pela SUSEP e não exige contragarantias bancárias, enquanto a carta fiança é um produto bancário que exige contragarantias como depósitos e avais, resultando em maior custo."
    },
    {
      pergunta: "Como é calculado o prêmio do seguro garantia?",
      resposta: "O prêmio é calculado com base no valor da garantia, prazo de vigência, tipo de modalidade, análise de risco do tomador e histórico de crédito da empresa."
    },
    {
      pergunta: "Quais documentos são necessários?",
      resposta: "São necessários: documentos da empresa (CNPJ, contrato social), demonstrações financeiras, certidões negativas, contrato principal ou edital, e documentos dos sócios/administradores."
    },
    {
      pergunta: "Quanto tempo leva para emitir uma apólice?",
      resposta: "O prazo varia conforme a complexidade: casos simples de 1 a 3 dias úteis, casos complexos de 5 a 10 dias úteis, e valores elevados até 15 dias úteis."
    },
    {
      pergunta: "O seguro garantia pode ser cancelado?",
      resposta: "Sim, pode ser cancelado quando as obrigações contratuais forem cumpridas, o contrato principal for rescindido, por acordo entre as partes ou por determinação judicial."
    }
  ]

  const diferenciais = [
    "30 anos de experiência em seguro garantia",
    "Análise de risco personalizada",
    "Agilidade na emissão de apólices",
    "Suporte técnico especializado",
    "Relacionamento direto com seguradoras",
    "Soluções para todos os portes de empresa"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-fb-blue-deep text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-inter font-bold text-4xl md:text-6xl mb-6">
              Seguro Garantia
            </h1>
            <p className="font-open-sans text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Nosso principal diferencial no mercado. Com 30 anos de expertise, oferecemos soluções completas em seguro garantia para projetos de todos os portes.
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
                <Link to="/marcar-reuniao">Falar com Especialista</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos e Modalidades */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Produtos e Modalidades
            </h2>
            <p className="font-open-sans text-lg text-gray-700 max-w-3xl mx-auto">
              Oferecemos todas as modalidades de seguro garantia, adaptadas às necessidades específicas de cada projeto e contrato.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {produtos.map((produto, index) => {
              const IconComponent = produto.icone
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-fb-blue-deep/10 p-3 rounded-lg">
                        <IconComponent className="h-8 w-8 text-fb-blue-deep" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-inter font-semibold text-xl text-fb-blue-deep mb-3">
                          {produto.nome}
                        </h3>
                        <p className="font-open-sans text-gray-700 mb-4">
                          {produto.descricao}
                        </p>
                        <div className="space-y-2">
                          <p className="font-inter font-medium text-sm text-gray-600">
                            Aplicações:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {produto.aplicacoes.map((aplicacao, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {aplicacao}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
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
              Esclarecemos as principais dúvidas sobre seguro garantia.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-inter font-semibold text-lg text-fb-blue-deep pr-4">
                        {item.pergunta}
                      </h3>
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-fb-blue-deep flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-fb-blue-deep flex-shrink-0" />
                      )}
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="font-open-sans text-gray-700 leading-relaxed">
                        {item.resposta}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Precisa de Seguro Garantia?
            </h2>
            <p className="font-open-sans text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Nossa equipe especializada está pronta para estruturar a solução ideal para seu projeto. Entre em contato e descubra como podemos ajudar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-fb-blue-deep hover:bg-fb-blue-deep/90 text-white font-inter font-semibold"
              >
                <Link to="/cotacao">
                  Solicitar Cotação <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-fb-blue-deep text-fb-blue-deep hover:bg-fb-blue-deep hover:text-white font-inter font-semibold"
              >
                <a href="https://wa.me/551144188329" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SegmentoGarantia

