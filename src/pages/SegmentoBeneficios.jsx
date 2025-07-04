import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Users, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react'

const SegmentoBeneficios = () => {
  const produtos = [
    {
      nome: "Saúde Corporativa",
      descricao: "Planos de saúde empresariais com cobertura nacional e internacional, incluindo assistência médica e hospitalar."
    },
    {
      nome: "Vida e Acidentes Pessoais",
      descricao: "Proteção financeira para colaboradores e suas famílias em caso de morte ou invalidez por acidente."
    },
    {
      nome: "Assistência de Saúde",
      descricao: "Serviços de assistência médica domiciliar, telemedicina e suporte em emergências de saúde."
    },
    {
      nome: "Previdência Privada",
      descricao: "Planos de aposentadoria complementar para garantir o futuro financeiro dos colaboradores."
    },
    {
      nome: "Seguro Viagem Corporativo",
      descricao: "Cobertura completa para viagens de negócios, incluindo assistência médica e cancelamento."
    }
  ]

  const faqItems = [
    {
      pergunta: "Quais são os benefícios de oferecer seguro saúde aos funcionários?",
      resposta: "Além de ser um diferencial competitivo para atrair talentos, o seguro saúde melhora a produtividade, reduz o absenteísmo e demonstra cuidado com o bem-estar dos colaboradores."
    },
    {
      pergunta: "Como funciona o seguro de vida empresarial?",
      resposta: "O seguro de vida empresarial oferece proteção financeira aos beneficiários do colaborador em caso de morte, além de coberturas por invalidez permanente."
    },
    {
      pergunta: "O que é previdência privada empresarial?",
      resposta: "É um plano de aposentadoria complementar oferecido pela empresa, que permite ao colaborador formar uma reserva para o futuro com vantagens fiscais."
    },
    {
      pergunta: "Quais coberturas estão incluídas no seguro viagem corporativo?",
      resposta: "Inclui assistência médica, odontológica, farmacêutica, cancelamento de viagem, extravio de bagagem e assistência jurídica no exterior."
    },
    {
      pergunta: "Como escolher o melhor plano de saúde para a empresa?",
      resposta: "Deve-se considerar o perfil dos colaboradores, rede credenciada, tipos de cobertura, custo-benefício e qualidade do atendimento da operadora."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-fb-blue-deep text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="h-16 w-16 mx-auto mb-6 text-fb-gray-light" />
            <h1 className="font-inter font-bold text-4xl md:text-6xl mb-6">
              Benefícios Corporativos
            </h1>
            <p className="font-open-sans text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-fb-gray-light">
              Soluções completas em benefícios para cuidar do bem-estar dos seus colaboradores e fortalecer sua empresa.
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
              Nossos Produtos de Benefícios
            </h2>
            <p className="font-open-sans text-lg text-fb-blue-deep max-w-3xl mx-auto">
              Oferecemos uma gama completa de benefícios para cuidar do bem-estar dos seus colaboradores.
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
              Perguntas Frequentes - Benefícios Corporativos
            </h2>
            <p className="font-open-sans text-lg text-fb-blue-deep">
              Tire suas dúvidas sobre benefícios corporativos e bem-estar dos colaboradores.
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
              Cuide dos seus colaboradores hoje mesmo
            </h2>
            <p className="font-open-sans text-lg mb-8 max-w-3xl mx-auto text-fb-gray-light">
              Entre em contato conosco e descubra como podemos criar um pacote de benefícios personalizado para sua empresa.
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

export default SegmentoBeneficios

