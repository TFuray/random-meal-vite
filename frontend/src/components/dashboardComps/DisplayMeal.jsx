
const DisplayMeal = ({ randomMeal }) => {
  return (
    <>
      {randomMeal.map(meal => {
        return (
          <ul className="flex flex-col">
            <li className="flex justify-center" key={meal.idMeal}><h2 className="text-lg font-semibold">{meal.strMeal}</h2></li>
            <li className="flex justify-center"><img style={{ width: '350px' }} src={meal.strMealThumb} alt="meal thumbnail" /></li>
          </ul>

        )
      })}
    </>
  )
}

export default DisplayMeal