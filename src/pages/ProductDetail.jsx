
import { useParams } from 'react-router-dom'
import data from '../data/products.json'
import Breadcrumbs from '../components/Breadcrumbs'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/formatCurrency'
import RatingStars from '../components/RatingStars'
import { useState } from 'react'

export default function ProductDetail(){
  const { slug } = useParams()
  const product = data.find(p => p.slug === slug)
  const { addToCart } = useCart()
  const [qty, setQty] = useState(1)

  if(!product) return <main className="container"><p>Producto no encontrado.</p></main>
  return (
    <main className="container" style={{display:'grid',gap:'1rem'}}>
      <Breadcrumbs items={[{to:'/',label:'Inicio'},{to:'/productos',label:'Productos'},{label:product.name}]} />
      <div className="card" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
        <img src={product.image} alt={product.name} style={{width:'100%',height:360,objectFit:'cover',borderRadius:8}}/>
        <div style={{display:'grid',gap:'.6rem'}}>
          <div className="badge">{product.category}</div>
          <h1>{product.name}</h1>
          <div className="subtitle">Marca: {product.brand}</div>
          <div><RatingStars value={product.rating} /></div>
          <div className="price" style={{fontSize:'1.6rem'}}>{formatCurrency(product.price)}</div>
          <p className="subtitle">{product.description}</p>
          <ul>
            {product.features.map((f,i)=>(<li key={i}>• {f}</li>))}
          </ul>
          <div style={{display:'flex',gap:'.6rem',alignItems:'center'}}>
            <label>Cant.</label>
            <input type="number" min="1" max="99" value={qty} onChange={e=>setQty(Number(e.target.value))} style={{width:80}}/>
            <button className="btn" onClick={()=>addToCart(product, qty)}>Añadir al carrito</button>
          </div>
        </div>
      </div>
    </main>
  )
}
