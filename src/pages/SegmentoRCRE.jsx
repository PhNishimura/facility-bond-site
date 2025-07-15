import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Building, CheckCircle, ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react'

const SegmentoRCRE = () => {
  const produtos = [
    {
      nome: "Responsabilidade Civil Geral",
      descricao: "Cobertura para danos causados a terceiros em decorrência das atividades da empresa, incluindo danos materiais e corporais."
    },
    {
      nome: "Responsabilidade Civil Profissional",
      descricao: "Proteção específica para profissionais liberais e empresas prestadoras de serviços contra erros e omissões."
    },
    {
      nome: "Riscos de Engenharia - Construção",
      descricao: "Cobertura para obras de construção civil, protegendo contra danos durante a execução do projeto."
    },
    {
      nome: "Riscos de Engenharia - Montagem",
      descricao: "Proteção para montagem de equipamentos e instalações industriais, cobrindo danos durante o processo."
    },
    {
      nome: "Quebra de Máquinas",
      descricao: "Cobertura para danos súbitos e imprevistos em máquinas e equipamentos industriais."
    }
  ]

  const faqItems = [
    {
      pergunta: "O que é Responsabilidade Civil?",
      resposta: "É o seguro que cobre danos causados involuntariamente a terceiros em decorrência das atividades da empresa segurada."
    },
    {
      pergunta: "Qual a diferença entre RC Geral e RC Profissional?",
      resposta: "RC Geral cobre danos decorrentes das atividades operacionais, enquanto RC Profissional cobre erros e omissões na prestação de serviços."
    },
    {
      pergunta: "O que são Riscos de Engenharia?",
      resposta: "São seguros específicos para obras de construção e montagem, cobrindo danos durante a execução dos projetos."
    },
    {
      pergunta: "Como funciona o seguro de Quebra de Máquinas?",
      resposta: "Cobre danos súbitos e imprevistos em máquinas e equipamentos, incluindo custos de reparo ou substituição."
    },
    {
      pergunta: "Quais são os principais riscos cobertos?",
      resposta: "Danos a terceiros, erros profissionais, acidentes em obras, quebra de equipamentos e responsabilidades contratuais."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-fb-blue-deep text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Building className="h-16 w-16 mx-auto mb-6 text-fb-gray-light" />
            <h1 className="font-inter font-bold text-4xl md:text-6xl mb-6">
              RC & Riscos de Engenharia
            </h1>
            <p className="font-open-sans text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-fb-gray-light">
              Proteção especializada para responsabilidade civil e riscos de engenharia, garantindo segurança em projetos complexos.
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
                <Link to="/marcar-reuniao">Marcar Reunião</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos e Serviços */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Nossos Produtos RC & Riscos de Engenharia
            </h2>
            <p className="font-open-sans text-lg text-fb-blue-deep max-w-3xl mx-auto">
              Soluções especializadas para proteger sua empresa contra responsabilidades e riscos técnicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {produtos.map((produto, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-fb-blue-deep/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-fb-blue-deep" />
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-lg text-fb-blue-deep mb-3">
                        {produto.nome}
                      </h3>
                      <p className="font-open-sans text-fb-blue-deep">
                        {produto.descricao}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-fb-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Perguntas Frequentes - RC & Riscos de Engenharia
            </h2>
            <p className="font-open-sans text-lg text-fb-blue-deep">
              Tire suas dúvidas sobre responsabilidade civil e riscos de engenharia.
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-lg text-fb-blue-deep mb-3">
                    {item.pergunta}
                  </h3>
                  <p className="font-open-sans text-fb-blue-deep">
                    {item.resposta}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-fb-blue-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-inter font-bold text-3xl md:text-4xl mb-6">
              Proteja sua empresa contra responsabilidades
            </h2>
            <p className="font-open-sans text-lg mb-8 max-w-3xl mx-auto text-fb-gray-light">
              Entre em contato conosco e descubra como podemos proteger sua empresa com soluções especializadas.
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

export default SegmentoRCRE

