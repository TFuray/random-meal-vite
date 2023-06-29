import MealCard from "../savedMealComps/MealCard"

const SearchResponse = ({ data }) => {
  console.log(data)
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {data.map((meal) => (
          <MealCard
            key={meal._id}
            savedMeal={null}
            meal={meal}
          />
        ))}
      </div>
    </>
  )
}
export default SearchResponse
