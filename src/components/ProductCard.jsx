
import { Link } from 'react-router-dom'
import { formatCurrency } from '../utils/formatCurrency'
import RatingStars from './RatingStars'

export default function ProductCard({ p }){
  return (
    <article className="card" style={{display:'grid',gap:'.6rem'}}>
      <img src={p.image} alt={p.name} style={{width:'100%',height:180,objectFit:'cover',borderRadius:8}}/>
      <div className="badge">{p.category}</div>
      <Link to={`/producto/${p.slug}`} style={{color:'white',fontWeight:700}}>{p.name}</Link>
      <div className="subtitle">{p.brand}</div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div className="price">{formatCurrency(p.price)}</div>
        <RatingStars value={p.rating} />
      </div>
      <Link className="btn" to={`/producto/${p.slug}`}>Ver detalle</Link>
    </article>
  )
}
