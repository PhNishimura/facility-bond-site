import { FaWhatsapp } from 'react-icons/fa'

const FloatingWhatsAppButton = () => {
  // Substitua este número pelo WhatsApp da sua empresa
  const phoneNumber = '551144188329' 
  
  // Mensagem padrão opcional
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os seguros da Facility & Bond.')

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-transform duration-300 ease-in-out hover:scale-110"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}

// 👇 GARANTA QUE ESTA LINHA ESTEJA EXATAMENTE ASSIM NO FINAL DO ARQUIVO
export default FloatingWhatsAppButton;