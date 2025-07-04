import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Building, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react'

const SegmentoPatrimonial = () => {
  const produtos = [
    {
      nome: "Riscos Nomeados e Operacionais",
      descricao: "Cobertura para riscos específicos que podem afetar as operações da empresa, incluindo incêndio, explosão, vendaval e outros eventos."
    },
    {
      nome: "Riscos de Engenharia",
      descricao: "Proteção para projetos de construção, montagem e obras de engenharia civil, cobrindo danos durante a execução."
    },
    {
      nome: "Responsabilidade Civil",
      descricao: "Cobertura para danos causados a terceiros em decorrência das atividades da empresa, incluindo danos materiais e corporais."
    },
    {
      nome: "Riscos Diversos",
      descricao: "Coberturas específicas para riscos particulares de cada negócio, adaptadas às necessidades específicas do cliente."
    },
    {
      nome: "Seguro Condomínio",
      descricao: "Proteção completa para condomínios residenciais e comerciais, cobrindo áreas comuns e responsabilidades."
    }
  ]

  const faqItems = [
    {
      pergunta: "O que é seguro patrimonial?",
      resposta: "O seguro patrimonial protege os bens da empresa contra diversos riscos, como incêndio, roubo, vendaval e outros eventos que possam causar danos materiais."
    },
    {
      pergunta: "Quais riscos são cobertos no seguro patrimonial?",
      resposta: "Os principais riscos cobertos incluem incêndio, explosão, queda de raio, vendaval, granizo, roubo, furto qualificado e danos elétricos, entre outros."
    },
    {
      pergunta: "Como é calculado o valor do seguro patrimonial?",
      resposta: "O valor é calculado com base no valor dos bens a serem segurados, tipo de atividade, localização, medidas de segurança e histórico de sinistros."
    },
    {
      pergunta: "O que é cobertura de lucros cessantes?",
      resposta: "É uma cobertura adicional que indeniza a perda de lucros decorrente da paralisação das atividades devido a sinistro coberto pela apólice."
    },
    {
      pergunta: "Qual a diferença entre valor de mercado e valor de reposição?",
      resposta: "Valor de mercado considera a depreciação do bem, enquanto valor de reposição garante a substituição por bem novo de mesma espécie e qualidade."
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
              Seguro Patrimonial
            </h1>
            <p className="font-open-sans text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-fb-gray-light">
              Proteção completa para os ativos da sua empresa, garantindo continuidade operacional e tranquilidade para o seu negócio.
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
              Nossos Produtos Patrimoniais
            </h2>
            <p className="font-open-sans text-lg text-fb-blue-deep max-w-3xl mx-auto">
              Oferecemos soluções completas para proteger o patrimônio da sua empresa contra diversos riscos.
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
              Perguntas Frequentes - Seguro Patrimonial
            </h2>
            <p className="font-open-sans text-lg text-fb-blue-deep">
              Tire suas dúvidas sobre seguros patrimoniais e proteção de ativos.
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
              Proteja seu patrimônio hoje mesmo
            </h2>
            <p className="font-open-sans text-lg mb-8 max-w-3xl mx-auto text-fb-gray-light">
              Entre em contato conosco e descubra como podemos proteger os ativos da sua empresa com soluções personalizadas.
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
                <a href="tel:+5511999999999" className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Ligar Agora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SegmentoPatrimonial

