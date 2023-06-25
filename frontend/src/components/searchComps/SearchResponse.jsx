const SearchResponse = ({ data }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {data.map((meal) => {
          return (
            <div className="card card-compact w-auto bg-info-content shadow-xl">
              <figure>
                <img
                  src={meal.strMealThumb}
                  alt="meal image"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title m-0">
                  {meal.strMeal} -
                  <span className="text-sm font-normal -m-0">{meal.strArea}
                  </span>
                </h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default SearchResponse
