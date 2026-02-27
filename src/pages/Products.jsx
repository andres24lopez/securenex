
import { useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import ProductGrid from '../components/ProductGrid'
import data from '../data/products.json'

export default function Products(){
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('')
  const categories = Array.from(new Set(data.map(p => p.category)))

  const filtered = useMemo(()=>{
    return data.filter(p => (
      (!cat || p.category === cat) &&
      (p.name.toLowerCase().includes(q.toLowerCase()) || p.description.toLowerCase().includes(q.toLowerCase()))
    ))
  }, [q, cat])

  return (
    <main className="container" style={{display:'grid',gap:'1rem'}}>
      <h1>Productos</h1>
      <SearchBar value={q} onChange={setQ} />
      <CategoryFilter categories={categories} value={cat} onChange={setCat} />
      <ProductGrid products={filtered} />
    </main>
  )
}
