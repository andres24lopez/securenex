
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/formatCurrency'

export default function CartDrawer(){
  const { items, removeFromCart, updateQty, totals } = useCart()
  if(!items.length) return (
    <div className="card">
      <p>Tu carrito está vacío.</p>
      <Link className="btn" to="/productos">Explorar productos</Link>
    </div>
  )
  return (
    <div className="card" style={{display:'grid',gap:'1rem'}}>
      {items.map(i => (
        <div key={i.id} style={{display:'grid',gridTemplateColumns:'80px 1fr auto',gap:'1rem',alignItems:'center'}}>
          <img src={i.image} alt={i.name} style={{width:80,height:60,objectFit:'cover',borderRadius:6}}/>
          <div>
            <strong>{i.name}</strong>
            <div className="subtitle">{i.brand} · {formatCurrency(i.price)}</div>
            <div style={{marginTop:'.3rem'}}>
              <label>Cant. </label>
              <input type="number" min="1" max="99" value={i.qty} onChange={e=>updateQty(i.id, Number(e.target.value))} style={{width:64}}/>
            </div>
          </div>
          <div style={{display:'grid',gap:'.3rem',justifyItems:'end'}}>
            <div><strong>{formatCurrency(i.price * i.qty)}</strong></div>
            <button className="badge" onClick={()=>removeFromCart(i.id)}>Quitar</button>
          </div>
        </div>
      ))}
      <hr style={{borderColor:'#1f2937'}}/>
      <div style={{display:'grid',gap:'.3rem',justifyItems:'end'}}>
        <div>Subtotal: <strong>{formatCurrency(totals.subtotal)}</strong></div>
        <div>Impuestos: <strong>{formatCurrency(totals.taxes)}</strong></div>
        <div>Envío: <strong>{totals.shipping ? formatCurrency(totals.shipping) : 'Gratis'}</strong></div>
        <div style={{fontSize:'1.2rem'}}>Total: <strong>{formatCurrency(totals.total)}</strong></div>
        <Link className="btn" to="/checkout">Finalizar compra</Link>
      </div>
    </div>
  )
}
