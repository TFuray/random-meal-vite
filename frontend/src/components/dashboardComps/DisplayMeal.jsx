import DisplayIngredients from "./DisplayIngredients"

const DisplayMeal = ({ randomMeal }) => {

  return (
    <>

      <ul className="flex flex-col">
        {randomMeal.map(({ idMeal, strMeal, strInstructions, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20 }, index) => {
          return (
            <ul>
              <li className="flex flex-col justify-start ml-10 mt-10" key={idMeal}><h2 className="text-lg font-semibold">{strMeal}:</h2> <img style={{ width: '350px' }} src={strMealThumb} alt="meal thumbnail" />
              </li>

              <li className="flex justify-around w-1/3"><span className="font-bold flex justify-center">{strIngredient1}</span> {strMeasure1}</li>
              <li className="flex justify-around w-1/3"><span className="font-bold flex justify-center">{strIngredient2}</span> {strMeasure2}</li>
              <li className="flex justify-around w-1/3"><span className="font-bold flex justify-center">{strIngredient3}</span> {strMeasure3}</li>
              <li className="flex justify-around w-1/3"><span className="font-bold flex justify-center">{strIngredient4}</span> {strMeasure4}</li>
              <li className="flex justify-around w-1/3"><span className="font-bold flex justify-center">{strIngredient5}</span> {strMeasure5}</li>
              <li className="flex justify-around w-1/3"><span className="font-bold flex justify-center">{strIngredient6}</span> {strMeasure6}</li>
              <li className="flex justify-around w-1/3"><span className="font-bold flex justify-center">{strIngredient7}</span> {strMeasure7}</li>
              <li className="flex justify-around w-1/3"><span className="font-bold flex justify-center">{strIngredient8}</span> {strMeasure8}</li>
              <li className="flex justify-around w-1/3"><span className="font-bold flex justify-center">{strIngredient9}</span> {strMeasure9}</li>
              <li className="flex justify-around w-1/3"><span className="font-bold flex justify-center">{strIngredient10}</span> {strMeasure10}</li>
              <li className="flex justify-around w-1/3"><span className="font-bold flex justify-center">{strIngredient11}</span> {strMeasure11}</li>
              <li className="flex justify-around w-1/3"><span className="font-bold flex justify-center">{strIngredient12}</span> {strMeasure12}</li>
              <li className="flex justify-around w-1/3"><span className="font-bold flex justify-center">{strIngredient13}</span> {strMeasure13}</li>
              <li className="flex justify-around w-1/3"><span className="font-bold flex justify-center">{strIngredient14}</span> {strMeasure14}</li>
              <li className="flex justify-around w-1/3"><span className="font-bold flex justify-center">{strIngredient15}</span> {strMeasure15}</li>
              <li className="flex justify-around w-1/3"><span className="font-bold flex justify-center">{strIngredient16}</span> {strMeasure16}</li>
              <li className="flex justify-around w-1/3"><span className="font-bold flex justify-center">{strIngredient17}</span> {strMeasure17}</li>
              <li className="flex justify-around w-1/3"><span className="font-bold flex justify-center">{strIngredient18}</span> {strMeasure18}</li>
              <li className="flex justify-around w-1/3"><span className="font-bold flex justify-center">{strIngredient19}</span> {strMeasure19}</li>
              <li className="flex justify-around w-1/3"><span className="font-bold flex justify-center">{strIngredient20}</span> {strMeasure20}</li>
            </ul>
          )
        })}

      </ul>
    </>
  )
}

export default DisplayMeal