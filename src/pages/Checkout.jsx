
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/formatCurrency'
import { useState } from 'react'

export default function Checkout(){
  const { items, totals, clearCart } = useCart()
  const [status, setStatus] = useState('idle')

  const submit = (e) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(()=>{
      setStatus('done')
      clearCart()
    }, 800)
  }

  if(status === 'done') return (
    <main className="container" style={{display:'grid',gap:'1rem'}}>
      <h1>¡Gracias por tu compra!</h1>
      <p className="subtitle">Te enviamos el resumen al correo. Nos pondremos en contacto para coordinar envío e instalación.</p>
    </main>
  )

  return (
    <main className="container" style={{display:'grid',gap:'1rem'}}>
      <h1>Checkout</h1>
      {!items.length ? <p>Tu carrito está vacío.</p> : (
        <div className="card" style={{display:'grid',gap:'1rem'}}>
          <form onSubmit={submit} style={{display:'grid',gap:'.6rem'}}>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'.6rem'}}>
              <input className="input" placeholder="Nombre" required/>
              <input className="input" placeholder="Apellido" required/>
            </div>
            <input className="input" type="email" placeholder="Correo" required/>
            <input className="input" placeholder="Teléfono" required/>
            <input className="input" placeholder="Dirección" required/>
            <select className="input" defaultValue="Tarjeta" required>
              <option>Tarjeta</option>
              <option>Transferencia</option>
              <option>Contraentrega</option>
            </select>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <div className="subtitle">Total</div>
              <strong>{formatCurrency(totals.total)}</strong>
            </div>
            <button className="btn" disabled={status==='loading'}>
              {status==='loading' ? 'Procesando…' : 'Pagar ahora'}
            </button>
          </form>
        </div>
      )}
    </main>
  )
}
