import DisplayIngredients from "./DisplayIngredients"

const DisplayMeal = ({ randomMeal }) => {

  return (
    <>

      <ul className="grid">
        {randomMeal.map(({ idMeal, strMeal, strInstructions, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20 }, index) => {
          return (
            <div>
              <ul className="grid grid-cols-4 place-items-center">
                <li className="grid col-span-4 place-content-center" key={idMeal}><h2 className="grid place-content-center text-3xl mb-5 mt-5 font-semibold">{strMeal}:</h2> <img className="" style={{ width: '350px' }} src={strMealThumb} alt="meal thumbnail" />
                </li>

                <li className="grid w-1/2 "><span className="font-bold grid">{strIngredient1}</span> {strMeasure1}</li>
                <li className="grid w-1/2 "><span className="font-bold grid">{strIngredient2}</span> {strMeasure2}</li>
                <li className="grid w-1/2 "><span className="font-bold grid">{strIngredient3}</span> {strMeasure3}</li>
                <li className="grid w-1/2 "><span className="font-bold grid">{strIngredient4}</span> {strMeasure4}</li>
                <li className="grid w-1/2 "><span className="font-bold grid">{strIngredient5}</span> {strMeasure5}</li>
                <li className="grid w-1/2 "><span className="font-bold grid">{strIngredient6}</span> {strMeasure6}</li>
                <li className="grid w-1/2 "><span className="font-bold grid">{strIngredient7}</span> {strMeasure7}</li>
                <li className="grid w-1/2 "><span className="font-bold grid">{strIngredient8}</span> {strMeasure8}</li>
                <li className="grid w-1/2 "><span className="font-bold grid">{strIngredient9}</span> {strMeasure9}</li>
                <li className="grid w-1/2 "><span className="font-bold grid">{strIngredient10}</span> {strMeasure10}</li>
                <li className="grid w-1/2 "><span className="font-bold grid">{strIngredient11}</span> {strMeasure11}</li>
                <li className="grid w-1/2 "><span className="font-bold grid">{strIngredient12}</span> {strMeasure12}</li>
                <li className="grid w-1/2 "><span className="font-bold grid">{strIngredient13}</span> {strMeasure13}</li>
                <li className="grid w-1/2 "><span className="font-bold grid">{strIngredient14}</span> {strMeasure14}</li>
                <li className="grid w-1/2 "><span className="font-bold grid">{strIngredient15}</span> {strMeasure15}</li>
                <li className="grid w-1/2 "><span className="font-bold grid">{strIngredient16}</span> {strMeasure16}</li>
                <li className="grid w-1/2 "><span className="font-bold grid">{strIngredient17}</span> {strMeasure17}</li>
                <li className="grid w-1/2 "><span className="font-bold grid">{strIngredient18}</span> {strMeasure18}</li>
                <li className="grid w-1/2 "><span className="font-bold grid">{strIngredient19}</span> {strMeasure19}</li>
                <li className="grid w-1/2 "><span className="font-bold grid">{strIngredient20}</span> {strMeasure20}</li>
              </ul>
                <p className="text-center w-1/3 ml-1/3">{strInstructions}</p>
            </div>
          )
        })}

      </ul>
    </>
  )
}

export default DisplayMeal