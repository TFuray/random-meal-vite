import DisplayIngredients from "./DisplayIngredients"

const DisplayMeal = ({ randomMeal }) => {
  
  return (
    <>
      <ul className="grid grid-col">
        {randomMeal.map(meal => {
          return (
            <li className="grid justify-start ml-10 mt-10" key={meal.idMeal}><h2 className="text-lg font-semibold">{meal.strMeal}:</h2> <img style={{ width: '350px' }} src={meal.strMealThumb} alt="meal thumbnail" />
            </li>
          )
        })}
        
      </ul>
    </>
  )
}

export default DisplayMeal