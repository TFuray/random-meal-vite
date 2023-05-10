import FilledStar from "./FilledStar"
import Star from "./Star"

const StarRating = ({ meal, stars }) => {
  const empty = 5 - stars

  return (
    <ul className="flex">
      {[...Array(stars)].map((e, i) => (
        <li key={i}>
          <FilledStar />
        </li>
      ))}
      {[...Array(empty)].map((e, i) => (
        <li key={i}>
          <Star meal={meal} />
        </li>
      ))}
    </ul>
  )
}
export default StarRating
