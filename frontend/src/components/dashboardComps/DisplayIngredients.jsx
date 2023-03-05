
const DisplayIngredients = ({randomMeal}) => {
  return (
    <ul>
      <li className="font-semibold">Ingredients:</li>
      {randomMeal.forEach(element => {
        if (randomMeal['strIngredient' + element] != '') {
          return <li>{randomMeal['strIngredient' + element]}</li>
        }
      })} 
    </ul>
  )
}

export default DisplayIngredients