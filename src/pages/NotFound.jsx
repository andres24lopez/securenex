
import { Link } from 'react-router-dom'
export default function NotFound(){
  return (
    <main className="container">
      <h1>Página no encontrada</h1>
      <Link className="btn" to="/">Volver al inicio</Link>
    </main>
  )
}
