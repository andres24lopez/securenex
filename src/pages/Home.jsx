
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import Testimonials from '../components/Testimonials'
import TrustBadges from '../components/TrustBadges'
import data from '../data/products.json'

export default function Home(){
  const featured = data.slice(0,6)
  return (
    <main>
      <Hero />
      <section className="container" style={{marginTop:'1rem'}}>
        <h2>Destacados</h2>
        <ProductGrid products={featured} />
      </section>
      <Testimonials />
      <TrustBadges />
    </main>
  )
}
