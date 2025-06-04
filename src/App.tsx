
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/common/Header'
import CustomCursor from './components/custom-trailing/custom-trailing'
import DownloadApp from './components/download-app/Download'
import Footer from './components/footer'
import Hero from './components/hero-section/Hero'
import OurServices from './components/our-services/our-services'
import ServicesInfoSection from './components/our-services/service-info-section'
import Pricing from './components/pricing/Pricing'
import { useEffect } from 'react';

function App() {



  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true     // only animate once
    });
  }, []);

  return (
    <>
      <CustomCursor />
      <Header />
      <Hero />

      <OurServices />
      <DownloadApp />
      <Pricing />
      <ServicesInfoSection />
      <Footer />

    </>
  )
}

export default App
