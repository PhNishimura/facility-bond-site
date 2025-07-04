import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Zap, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react'

const SegmentoOutros = () => {
  const produtos = [
    {
      nome: "Cyber Risks - Proteção Digital",
      descricao: "Cobertura contra ataques cibernéticos, vazamento de dados, ransomware e outras ameaças digitais."
    },
    {
      nome: "D&O - Directors & Officers",
      descricao: "Proteção para diretores e administradores contra responsabilidades decorrentes de decisões empresariais."
    },
    {
      nome: "Seguro Ambiental",
      descricao: "Cobertura para danos ambientais e custos de remediação decorrentes das atividades da empresa."
    },
    {
      nome: "Seguro Agrícola",
      descricao: "Proteção para cultivos e atividades agropecuárias contra riscos climáticos e pragas."
    },
    {
      nome: "Seguros Especiais",
      descricao: "Coberturas customizadas para riscos específicos e únicos de cada negócio ou setor."
    }
  ]

  const faqItems = [
    {
      pergunta: "O que é seguro Cyber Risks?",
      resposta: "É uma cobertura que protege empresas contra perdas financeiras decorrentes de ataques cibernéticos, vazamento de dados e interrupção de sistemas."
    },
    {
      pergunta: "Quem precisa de seguro D&O?",
      resposta: "Empresas com diretores e administradores que tomam decisões estratégicas, especialmente sociedades anônimas e empresas de capital aberto."
    },
    {
      pergunta: "Como funciona o seguro ambiental?",
      resposta: "Cobre custos de limpeza, remediação e indenizações por danos ambientais causados pelas atividades da empresa segurada."
    },
    {
      pergunta: "Quais riscos são cobertos no seguro agrícola?",
      resposta: "Granizo, geada, seca, excesso de chuva, vendaval, pragas e doenças que possam afetar a produção agrícola."
    },
    {
      pergunta: "O que são seguros especiais?",
      resposta: "São coberturas desenvolvidas especificamente para riscos únicos ou emergentes que não se enquadram em produtos tradicionais."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-fb-blue-deep text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Zap className="h-16 w-16 mx-auto mb-6 text-fb-gray-light" />
            <h1 className="font-inter font-bold text-4xl md:text-6xl mb-6">
              Seguros Especiais
            </h1>
            <p className="font-open-sans text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-fb-gray-light">
              Soluções inovadoras para riscos emergentes e específicos, protegendo sua empresa contra ameaças modernas.
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
              Nossos Produtos Especiais
            </h2>
            <p className="font-open-sans text-lg text-fb-blue-deep max-w-3xl mx-auto">
              Coberturas inovadoras para proteger sua empresa contra riscos emergentes e específicos.
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
              Perguntas Frequentes - Seguros Especiais
            </h2>
            <p className="font-open-sans text-lg text-fb-blue-deep">
              Tire suas dúvidas sobre seguros especiais e coberturas inovadoras.
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
              Proteja-se contra riscos emergentes
            </h2>
            <p className="font-open-sans text-lg mb-8 max-w-3xl mx-auto text-fb-gray-light">
              Entre em contato conosco e descubra como podemos proteger sua empresa com soluções inovadoras.
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

export default SegmentoOutros

