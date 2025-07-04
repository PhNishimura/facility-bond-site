import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MessageCircle, Mail, Phone, CheckCircle, Send } from 'lucide-react'

const Cotacao = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    cnpj: '',
    telefone: '',
    email: '',
    segmento: '',
    produto: '',
    descricao: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui seria implementada a integração com CRM/gestão
    console.log('Dados do formulário:', formData)
    alert('Cotação enviada com sucesso! Entraremos em contato em breve.')
  }

  const segmentos = [
    "Garantias e Fianças",
    "Patrimônio e Operações", 
    "Capital Humano",
    "Riscos Especiais",
    "Projetos"
  ]

  const faqItems = [
    {
      pergunta: "Quanto tempo leva para receber uma cotação?",
      resposta: "Normalmente respondemos em até 24 horas úteis. Para casos mais complexos, pode levar até 48 horas para uma análise completa."
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
                <span>Resposta em 24h</span>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Formulário */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-inter font-bold text-2xl text-fb-blue-deep mb-6">
                    Solicitar Cotação
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nome" className="font-inter font-medium text-fb-blue-deep">
                          Nome Completo *
                        </Label>
                        <Input
                          id="nome"
                          type="text"
                          value={formData.nome}
                          onChange={(e) => handleInputChange('nome', e.target.value)}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="empresa" className="font-inter font-medium text-fb-blue-deep">
                          Empresa *
                        </Label>
                        <Input
                          id="empresa"
                          type="text"
                          value={formData.empresa}
                          onChange={(e) => handleInputChange('empresa', e.target.value)}
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cnpj" className="font-inter font-medium text-fb-blue-deep">
                          CNPJ *
                        </Label>
                        <Input
                          id="cnpj"
                          type="text"
                          value={formData.cnpj}
                          onChange={(e) => handleInputChange('cnpj', e.target.value)}
                          placeholder="00.000.000/0000-00"
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="telefone" className="font-inter font-medium text-fb-blue-deep">
                          Telefone *
                        </Label>
                        <Input
                          id="telefone"
                          type="tel"
                          value={formData.telefone}
                          onChange={(e) => handleInputChange('telefone', e.target.value)}
                          placeholder="(11) 99999-9999"
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="font-inter font-medium text-fb-blue-deep">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="segmento" className="font-inter font-medium text-fb-blue-deep">
                          Segmento de Interesse *
                        </Label>
                        <Select onValueChange={(value) => handleInputChange('segmento', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Selecione um segmento" />
                          </SelectTrigger>
                          <SelectContent>
                            {segmentos.map((segmento) => (
                              <SelectItem key={segmento} value={segmento}>
                                {segmento}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="produto" className="font-inter font-medium text-fb-blue-deep">
                          Produto Específico
                        </Label>
                        <Input
                          id="produto"
                          type="text"
                          value={formData.produto}
                          onChange={(e) => handleInputChange('produto', e.target.value)}
                          placeholder="Ex: Seguro Garantia, D&O, etc."
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="descricao" className="font-inter font-medium text-fb-blue-deep">
                        Descrição do Projeto/Necessidade
                      </Label>
                      <Textarea
                        id="descricao"
                        value={formData.descricao}
                        onChange={(e) => handleInputChange('descricao', e.target.value)}
                        placeholder="Descreva brevemente seu projeto ou necessidade de seguro..."
                        className="mt-1 min-h-[120px]"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-fb-blue-deep hover:bg-fb-blue-deep/90 text-white font-inter font-semibold"
                      size="lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Solicitação
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <Card>
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
                      href="tel:+5511999999999"
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

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-lg text-fb-blue-deep mb-4">
                    Por que escolher a Facility & Bond?
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="font-open-sans text-sm text-gray-700">
                        30 anos de expertise em seguros corporativos
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

