// NOVO: Importe o useEffect do React e o useLocation do react-router-dom
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
// NOVO: Importe a biblioteca do react-ga4
import ReactGA from 'react-ga4'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SobreNos from './pages/SobreNos'
import Segmentos from './pages/Segmentos'
import Cases from './pages/Cases'
import Cotacao from './pages/Cotacao'
import MarcarReuniao from './pages/MarcarReuniao'
import SegmentoGarantia from './pages/SegmentoGarantia'
import SegmentoPatrimonial from './pages/SegmentoPatrimonial'
import SegmentoRCRE from './pages/SegmentoRCRE'
import SegmentoBeneficios from './pages/SegmentoBeneficios'
import SegmentoOutros from './pages/SegmentoOutros'
import ScrollToTop from './components/ScrollToTop'
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton'

import './App.css'

// NOVO: Inicialize o Google Analytics com o seu ID
// ⚠️ Substitua 'G-JBLGP0SQYP' pelo seu ID de métricas do GA4!
ReactGA.initialize('G-JBLGP0SQYP');

// NOVO: Componente para rastrear as mudanças de rota
function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    // Envia um evento de pageview para o GA4
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]); // Este efeito roda toda vez que a rota 'location' muda

  return null; // Este componente não renderiza nada na tela
}


function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* NOVO: Adicione o componente de rastreamento aqui */}
      <RouteTracker />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/segmentos" element={<Segmentos />} />
            <Route path="/segmentos/garantia" element={<SegmentoGarantia />} />
            <Route path="/segmentos/patrimonial" element={<SegmentoPatrimonial />} />
            <Route path="/segmentos/rc-re" element={<SegmentoRCRE />} />
            <Route path="/segmentos/beneficios" element={<SegmentoBeneficios />} />
            <Route path="/segmentos/outros" element={<SegmentoOutros />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/cotacao" element={<Cotacao />} />
            <Route path="/marcar-reuniao" element={<MarcarReuniao />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <FloatingWhatsAppButton />
    </Router>
  )
}

export default App