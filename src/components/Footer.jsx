
export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container" style={{display:'grid',gap:'1rem'}}>
        <div style={{display:'flex',gap:'1rem',alignItems:'center'}}>
          <img src="/logo.svg" alt="SecurePro" width="28" height="28"/>
          <div>
            <strong>SecurePro</strong>
            <div className="subtitle">Seguridad electrónica para hogar y negocio.</div>
          </div>
        </div>
        <div className="subtitle">© {year} SecurePro. Todos los derechos reservados · <a href="#" style={{color:'#94a3b8'}}>Términos</a> · <a href="#" style={{color:'#94a3b8'}}>Privacidad</a></div>
      </div>
    </footer>
  )
}
