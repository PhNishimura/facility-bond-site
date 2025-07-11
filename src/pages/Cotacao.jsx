import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MessageCircle, Mail, Phone, CheckCircle } from 'lucide-react'

const Cotacao = () => {
  const faqItems = [
    {
      pergunta: "Quanto tempo leva para receber uma cotação?",
      resposta: "Normalmente respondemos em até 24/48 horas úteis. Casos mais complexos exigem uma avaliação mais detalhada, o que pode estender o tempo de resposta."
    },
    {
      pergunta: "Preciso fornecer muita documentação?",
      resposta: "Inicialmente, precisamos apenas das informações básicas. Documentação adicional será solicitada conforme a necessidade de cada caso."
    },
    {
      pergunta: "Vocês atendem empresas de todos os portes?",
      resposta: "Sim, atendemos desde pequenas empresas até grandes corporações, adaptando nossas soluções para cada necessidade."
    },
    {
      pergunta: "A cotação tem algum custo?",
      resposta: "Não, nossa cotação é totalmente gratuita e sem compromisso. Você só paga se decidir contratar nossos serviços."
    },
    {
      pergunta: "Posso solicitar cotação para múltiplos produtos?",
      resposta: "Sim, podemos estruturar soluções que combinam diferentes produtos para atender suas necessidades específicas."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-fb-blue-deep text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-inter font-bold text-4xl md:text-6xl mb-6">
              Faça sua Cotação
            </h1>
            <p className="font-open-sans text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Solicite uma cotação personalizada e descubra como podemos proteger seu negócio com soluções sob medida.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                <span>Cotação Gratuita</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                <span>Sem Compromisso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário Principal */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Formulário Pipefy */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-inter font-bold text-2xl text-fb-blue-deep mb-6">
                    Solicitar Cotação
                  </h2>
                  
                  {/* Iframe do Pipefy */}
                  <div className="w-full">
                    <iframe
                      src="https://app.pipefy.com/public/form/5vHeaoMi"
                      width="100%"
                      height="800"
                      frameBorder="0"
                      style={{
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                      }}
                      title="Formulário de Cotação - Facility & Bond"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <CheckCircle className="inline h-4 w-4 mr-2" />
                      Seus dados são protegidos e utilizados apenas para elaboração da cotação.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-8">
              <Card className="w-full">
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-lg text-fb-blue-deep mb-4">
                    Outras Formas de Contato
                  </h3>
                  
                  <div className="space-y-4">
                    <a 
                      href="https://wa.me/551144188329"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                    >
                      <MessageCircle className="h-6 w-6 text-green-600 mr-3" />
                      <div>
                        <p className="font-inter font-medium text-green-800">WhatsApp</p>
                        <p className="font-open-sans text-sm text-green-600">+55 11 4418-8329</p>
                      </div>
                    </a>

                    <a 
                      href="mailto:contato@facilitybond.com.br"
                      className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Mail className="h-6 w-6 text-blue-600 mr-3" />
                      <div>
                        <p className="font-inter font-medium text-blue-800">E-mail</p>
                        <p className="font-open-sans text-sm text-blue-600">contato@facilitybond.com.br</p>
                      </div>
                    </a>

                    <a 
                      href="tel:+551144188329"
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Phone className="h-6 w-6 text-gray-600 mr-3" />
                      <div>
                        <p className="font-inter font-medium text-gray-800">Telefone</p>
                        <p className="font-open-sans text-sm text-gray-600">+55 11 4418-8329</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full">
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-lg text-fb-blue-deep mb-4">
                    Por que escolher a Facility & Bond?
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="font-open-sans text-sm text-gray-700">
                        Experiência consolidada em seguros corporativos há quase três décadas
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="font-open-sans text-sm text-gray-700">
                        Soluções personalizadas para cada cliente
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="font-open-sans text-sm text-gray-700">
                        Atendimento consultivo e próximo
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="font-open-sans text-sm text-gray-700">
                        Parceria com principais seguradoras
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
              Tire suas dúvidas sobre o processo de cotação e nossos serviços.
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="bg-white">
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
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-fb-blue-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-inter font-bold text-3xl md:text-4xl mb-6">
              Pronto para começar?
            </h2>
            <p className="font-open-sans text-lg mb-8 max-w-3xl mx-auto text-gray-200">
              Nossa equipe de especialistas está pronta para criar uma solução personalizada para suas necessidades de proteção empresarial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-white text-fb-blue-deep hover:bg-gray-100 font-inter font-semibold"
              >
                <a href="https://wa.me/551144188329" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="bg-white text-fb-blue-deep hover:bg-gray-100 font-inter font-semibold"
              >
                <a href="mailto:contato@facilitybond.com.br">
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar E-mail
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cotacao