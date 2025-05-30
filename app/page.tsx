import Hero from '@/components/Hero'
import About from '@/components/About'
import Viewer from '@/components/Viewer'
import Gallery from '@/components/Gallery'
import TechStack from '@/components/TechStack'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="container-snap">
      <Hero />
      <About />
      <Viewer />
      <Gallery />
      <TechStack />
      <Footer />
    </main>
  )
}