
export default function RatingStars({ value=5 }){
  const stars = Array.from({length:5}).map((_,i)=> (
    <span key={i} className="star">{i < Math.round(value) ? '★' : '☆'}</span>
  ))
  return <span aria-label={`Calificación: ${value} de 5`}>{stars}</span>
}
