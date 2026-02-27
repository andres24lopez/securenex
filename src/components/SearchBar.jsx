
export default function SearchBar({ value, onChange, placeholder='Buscar productos...' }){
  return (
    <input className="input" value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} />
  )
}
