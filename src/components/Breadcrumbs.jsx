
import { Link } from 'react-router-dom'

export default function Breadcrumbs({ items=[] }){
  return (
    <nav className="breadcrumbs" aria-label="Migas de pan">
      {items.map((it, idx) => (
        <span key={idx}>
          {it.to ? <Link to={it.to} style={{color:'#94a3b8'}}>{it.label}</Link> : <span>{it.label}</span>}
          {idx < items.length - 1 ? ' / ' : ''}
        </span>
      ))}
    </nav>
  )
}
