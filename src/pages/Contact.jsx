
export default function Contact(){
  const submit = (e)=>{
    e.preventDefault()
    alert('¡Gracias! Te contactaremos pronto.')
  }
  return (
    <main className="container" style={{display:'grid',gap:'1rem'}}>
      <h1>Contacto</h1>
      <div className="card">
        <form onSubmit={submit} style={{display:'grid',gap:'.6rem'}}>
          <input className="input" placeholder="Nombre" required />
          <input className="input" type="email" placeholder="Correo" required />
          <input className="input" placeholder="Teléfono" required />
          <textarea className="input" placeholder="Cuéntanos tu necesidad" rows="5" required />
          <button className="btn">Enviar</button>
        </form>
      </div>
    </main>
  )
}
