
const MealCard = ({ meal }) => {
  return (
    <div className="card w-96 bg-neutral bg-opacity-50 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={meal.strMealThumb} alt="meal picture" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{meal.strMeal}</h2>
        <p></p>
        <div className="card-actions">
          <button className="btn btn-primary">View Recipe</button>
        </div>
      </div>
    </div>
  )
}

export default MealCard