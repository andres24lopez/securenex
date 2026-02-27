
export default function CategoryFilter({ categories, value, onChange }){
  return (
    <div style={{display:'flex',gap:'.5rem',flexWrap:'wrap'}}>
      <button className="badge" onClick={()=>onChange('') } style={{borderColor: value===''?'#22c55e':'#1f2937', color: value===''?'#e5ffe9':'#94a3b8'}}>Todas</button>
      {categories.map(c => (
        <button key={c} className="badge" onClick={()=>onChange(c)} style={{borderColor: value===c?'#22c55e':'#1f2937', color: value===c?'#e5ffe9':'#94a3b8'}}>{c}</button>
      ))}
    </div>
  )
}
