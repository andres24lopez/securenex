
import ProductCard from './ProductCard'

export default function ProductGrid({ products }){
  if(!products?.length) return <div>No hay productos disponibles.</div>
  return (
    <div className="grid grid-3">
      {products.map(p => <ProductCard key={p.id} p={p} />)}
    </div>
  )
}
