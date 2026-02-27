
import { NavLink, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar(){
  const { totals } = useCart()
  return (
    <header className="header">
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem 0'}}>
        <Link to="/" style={{display:'flex',alignItems:'center',gap:'.7rem'}}>
          <img src="/logo.svg" alt="SecurePro" width="36" height="36"/>
          <strong>SecurePro</strong>
        </Link>
        <nav>
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/productos">Productos</NavLink>
          <NavLink to="/nosotros">Nosotros</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
          <NavLink to="/carrito">🛒 ({totals.count})</NavLink>
        </nav>
      </div>
    </header>
  )
}
