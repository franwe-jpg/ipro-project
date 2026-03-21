import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import IPhones from '@/components/IPhones'
import Products from '@/components/Products'
import Canje from '@/components/Canje'
import Logistics from '@/components/Logistics'
import Reviews from '@/components/Reviews'
import MapSection from '@/components/MapSection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <IPhones />
      <Products />
      <Canje />
      <Logistics />
      <Reviews />
      <MapSection />
      <Contact />
      <Footer />
    </>
  )
}
