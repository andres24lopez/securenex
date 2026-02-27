
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="hero">
      <div className="container" style={{display:'grid',gridTemplateColumns:'1fr',gap:'1rem'}}>
        <div className="card" style={{display:'grid',gridTemplateColumns:'auto 1fr',gap:'1rem',alignItems:'center'}}>
          <img src="/cctv.svg" alt="CCTV"/>
          <div>
            <span className="badge">NUEVO</span>
            <h1>Protege lo que más importa</h1>
            <p className="subtitle">CCTV, alarmas, control de acceso y redes. Integración profesional y soporte local.</p>
            <div style={{display:'flex',gap:'.7rem',marginTop:'.6rem'}}>
              <Link className="btn" to="/productos">Ver productos</Link>
              <Link className="btn" style={{background:'#0ea5e9',color:'#00111a'}} to="/contacto">Cotizar</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
