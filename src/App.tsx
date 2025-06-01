
import './App.css'
import Header from './components/common/Header'
import CustomCursor from './components/custom-trailing/custom-trailing'
import DownloadApp from './components/download-app/Download'
import Footer from './components/footer'
import Hero from './components/hero-section/Hero'
import OurServices from './components/our-services/our-services'
import ServicesInfoSection from './components/our-services/service-info-section'
import Pricing from './components/pricing/Pricing'

function App() {

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
