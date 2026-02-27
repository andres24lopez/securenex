
export default function About(){
  return (
    <main className="container" style={{display:'grid',gap:'1rem'}}>
      <h1>Sobre nosotros</h1>
      <p className="subtitle">Somos especialistas en soluciones de seguridad desde 2012. Diseñamos, vendemos e instalamos CCTV, alarmas, control de acceso, cercas eléctricas y redes para hogares, comercios e industria.</p>
      <div className="grid grid-3">
        <div className="card"><strong>+1,500</strong><div className="subtitle">Instalaciones</div></div>
        <div className="card"><strong>24/7</strong><div className="subtitle">Monitoreo</div></div>
        <div className="card"><strong>ISO</strong><div className="subtitle">Buenas prácticas</div></div>
      </div>
    </main>
  )
}
