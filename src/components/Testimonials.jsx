
export default function Testimonials(){
  const data = [
    { name: 'María G.', text: 'Instalación rápida y equipo de primera. Ahora monitoreo mi negocio desde el celular.' },
    { name: 'Carlos P.', text: 'Excelente atención y soporte post-venta. 100% recomendados.' },
    { name: 'Ana L.', text: 'La alarma dejó de sonar falsos positivos. ¡Duermo tranquila!' }
  ]
  return (
    <section className="container" style={{marginTop:'1rem'}}>
      <h2>Clientes satisfechos</h2>
      <div className="grid grid-3" style={{marginTop:'.6rem'}}>
        {data.map((t,i)=> (
          <div key={i} className="card">
            <p>“{t.text}”</p>
            <div className="subtitle">— {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
