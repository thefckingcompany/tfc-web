import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import InstallPWA from './pages/InstallPWA';
import WebFeedback from './pages/WebFeedback';
import Privacy from './pages/Privacy';

import Legal from './pages/Legal';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/reservar" element={<Booking />} />
          <Route path="/equipo" element={<Team />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/blog" element={<div className="min-h-[60vh] flex items-center justify-center text-4xl font-oswald text-white">BLOG (Próximamente)</div>} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/instalar-app" element={<InstallPWA />} />
          <Route path="/mejorar-web" element={<WebFeedback />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
