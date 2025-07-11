import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MessageCircle, Mail, Phone, CheckCircle, Users } from 'lucide-react';

// 1. Importe o PopupButton do Calendly
import { PopupButton } from 'react-calendly';

const MarcarReuniao = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    assunto: '',
    preferencia: '',
    observacoes: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const assuntos = [
    "Seguro Garantia",
    "Seguros Patrimoniais",
    "RC & RE (Risco Civil & Riscos de Engenharia)",
    "Benefícios",
    "Outro"
  ];

  const preferencias = [
    "Videoconferência",
    "Telefone"
  ];
  
  // Combina as respostas do formulário em um objeto para o Calendly.
  // IMPORTANTE: Ajuste 'a1', 'a2', 'a3' para corresponder à ordem das suas perguntas personalizadas no Calendly.
  const customAnswers = {
      a1: formData.telefone,   // Ex: a1 é a pergunta "Telefone"
      a2: formData.empresa,    // Ex: a2 é a pergunta "Empresa"
      // Combina os campos restantes em uma única resposta para facilitar.
      a3: `Assunto: ${formData.assunto || 'Não especificado'}\nPreferência: ${formData.preferencia || 'Não especificado'}\n\nObservações:\n${formData.observacoes || 'Nenhuma'}`
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-fb-blue-deep text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-inter font-bold text-4xl md:text-6xl mb-6">
              Marcar Reunião
            </h1>
            <p className="font-open-sans text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Agende uma conversa com nossos especialistas e descubra como podemos estruturar soluções personalizadas para seu negócio.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                <span>Consultoria Gratuita</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                <span>Uma trajetória de 27 anos de experiência</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                <span>Soluções Personalizadas</span>
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
                    Preencha para Agendar
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nome" className="font-inter font-medium text-fb-blue-deep">Nome Completo *</Label>
                        <Input id="nome" type="text" value={formData.nome} onChange={(e) => handleInputChange('nome', e.target.value)} className="mt-1" required/>
                      </div>
                      <div>
                        <Label htmlFor="empresa" className="font-inter font-medium text-fb-blue-deep">Empresa *</Label>
                        <Input id="empresa" type="text" value={formData.empresa} onChange={(e) => handleInputChange('empresa', e.target.value)} className="mt-1" required/>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="font-inter font-medium text-fb-blue-deep">E-mail *</Label>
                        <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} className="mt-1" required/>
                      </div>
                      <div>
                        <Label htmlFor="telefone" className="font-inter font-medium text-fb-blue-deep">Telefone *</Label>
                        <Input id="telefone" type="tel" value={formData.telefone} onChange={(e) => handleInputChange('telefone', e.target.value)} placeholder="(11) 99999-9999" className="mt-1" required/>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="assunto" className="font-inter font-medium text-fb-blue-deep">Assunto da Reunião *</Label>
                      <Select onValueChange={(value) => handleInputChange('assunto', value)}>
                        <SelectTrigger className="mt-1"><SelectValue placeholder="Selecione o assunto" /></SelectTrigger>
                        <SelectContent>
                          {assuntos.map((assunto) => (<SelectItem key={assunto} value={assunto}>{assunto}</SelectItem>))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="preferencia" className="font-inter font-medium text-fb-blue-deep">Preferência de Reunião</Label>
                      <Select onValueChange={(value) => handleInputChange('preferencia', value)}>
                        <SelectTrigger className="mt-1"><SelectValue placeholder="Como prefere realizar a reunião?" /></SelectTrigger>
                        <SelectContent>
                          {preferencias.map((pref) => (<SelectItem key={pref} value={pref}>{pref}</SelectItem>))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="observacoes" className="font-inter font-medium text-fb-blue-deep">Observações Adicionais</Label>
                      <Textarea id="observacoes" value={formData.observacoes} onChange={(e) => handleInputChange('observacoes', e.target.value)} placeholder="Conte-nos mais sobre suas necessidades ou preferências..." className="mt-1 min-h-[120px]"/>
                    </div>

                    <PopupButton
                      url="https://calendly.com/ti-facilitybond/30min"
                      rootElement={document.getElementById('root')}
                      text="Escolher Horário e Agendar"
                      disabled={!formData.nome || !formData.email || !formData.telefone || !formData.assunto}
                      prefill={{
                        name: formData.nome,
                        email: formData.email,
                        customAnswers: customAnswers
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all h-11 px-8 bg-fb-blue-deep text-white hover:bg-fb-blue-deep/90 disabled:pointer-events-none disabled:opacity-50"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Coluna da direita */}
            <div className="space-y-6">
              <Card className="w-full md:w-[300px] mx-auto">
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-lg text-fb-blue-deep mb-4">Outras Formas de Contato</h3>
                  <div className="space-y-4">
                    <a href="https://wa.me/551144188329" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                      <MessageCircle className="h-6 w-6 text-green-600 mr-3" />
                      <div>
                        <p className="font-inter font-medium text-green-800">WhatsApp</p>
                        <p className="font-open-sans text-sm text-green-600">+55 11 4418-8329</p>
                      </div>
                    </a>
                    <a href="mailto:contato@facilitybond.com.br" className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                      <Mail className="h-6 w-6 text-blue-600 mr-3" />
                      <div>
                        <p className="font-inter font-medium text-blue-800">E-mail</p>
                        <p className="font-open-sans text-sm text-blue-600 break-words">contato@facilitybond.com.br</p>
                      </div>
                    </a>
                    <a href="tel:+551144188329" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <Phone className="h-6 w-6 text-gray-600 mr-3" />
                      <div>
                        <p className="font-inter font-medium text-gray-800">Telefone</p>
                        <p className="font-open-sans text-sm text-gray-600">+55 11 4418-8329</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full md:w-[300px] mx-auto">
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-lg text-fb-blue-deep mb-4">O que esperar da reunião?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-fb-blue-deep mr-3 mt-0.5 flex-shrink-0" />
                      <p className="font-open-sans text-sm text-gray-700">Conversa com especialistas em seguros corporativos</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="font-open-sans text-sm text-gray-700">Análise personalizada das suas necessidades</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="font-open-sans text-sm text-gray-700">Propostas de soluções sob medida</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="font-open-sans text-sm text-gray-700">Orientações estratégicas para seu negócio</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-fb-blue-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-inter font-bold text-3xl md:text-4xl mb-6">
              Desde 1997 Protegendo Grandes Projetos
            </h2>
            <p className="font-open-sans text-lg mb-8 max-w-3xl mx-auto text-gray-200">
              Nossa expertise em seguros corporativos e projetos está à sua disposição. Vamos conversar sobre como podemos proteger e viabilizar seus projetos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-fb-blue-deep hover:bg-gray-100 font-inter font-semibold">
                <a href="https://wa.me/551144188329" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-fb-blue-deep hover:bg-gray-100 font-inter font-semibold">
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
  );
};

export default MarcarReuniao;