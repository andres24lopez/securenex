
export default function TrustBadges(){
  const items = [
    { label: 'Garantía 12 meses' },
    { label: 'Pagos 100% seguros' },
    { label: 'Soporte técnico local' },
    { label: 'Instalación profesional' }
  ]
  return (
    <div className="container" style={{marginTop:'1rem'}}>
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))'}}>
        {items.map((i,idx)=>(
          <div key={idx} className="card" style={{textAlign:'center'}}>
            <strong>{i.label}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}
