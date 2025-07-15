import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import ScrollToTop from './components/ScrollToTop' // Importe o novo componente
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton' // 1. Importe o novo componente

import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
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