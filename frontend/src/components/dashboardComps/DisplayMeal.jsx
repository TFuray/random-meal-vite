

const DisplayMeal = ({ randomMeal }) => {

  return (
    <>
      {randomMeal.map(({ idMeal, strMeal, strInstructions, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20 }, index) => {
        return (
          <div className="hero bg-base-300 rounded">
            <div className="hero-content flex-col lg:flex-row">
              <img src={strMealThumb} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">{strMeal}</h1>
                <ul className="grid grid-cols-3 gap-2 place-items-start pt-6">
                  <li key='1'><span className="font-bold grid">{strIngredient1}</span> {strMeasure1}</li>
                  <li key='2'><span className="font-bold grid">{strIngredient2}</span> {strMeasure2}</li>
                  <li key='3'><span className="font-bold grid">{strIngredient3}</span> {strMeasure3}</li>
                  <li key='4'><span className="font-bold grid">{strIngredient4}</span> {strMeasure4}</li>
                  <li key='5'><span className="font-bold grid">{strIngredient5}</span> {strMeasure5}</li>
                  <li key='6'><span className="font-bold grid">{strIngredient6}</span> {strMeasure6}</li>
                  <li key='7'><span className="font-bold grid">{strIngredient7}</span> {strMeasure7}</li>
                  <li key='8'><span className="font-bold grid">{strIngredient8}</span> {strMeasure8}</li>
                  <li key='9'><span className="font-bold grid">{strIngredient9}</span> {strMeasure9}</li>
                  <li key='10'><span className="font-bold grid">{strIngredient10}</span> {strMeasure10}</li>
                  <li key='11'><span className="font-bold grid">{strIngredient11}</span> {strMeasure11}</li>
                  <li key='12'><span className="font-bold grid">{strIngredient12}</span> {strMeasure12}</li>
                  <li key='13'><span className="font-bold grid">{strIngredient13}</span> {strMeasure13}</li>
                  <li key='14'><span className="font-bold grid">{strIngredient14}</span> {strMeasure14}</li>
                  <li key='15'><span className="font-bold grid">{strIngredient15}</span> {strMeasure15}</li>
                  <li key='16'><span className="font-bold grid">{strIngredient16}</span> {strMeasure16}</li>
                  <li key='17'><span className="font-bold grid">{strIngredient17}</span> {strMeasure17}</li>
                  <li key='18'><span className="font-bold grid">{strIngredient18}</span> {strMeasure18}</li>
                  <li key='19'><span className="font-bold grid">{strIngredient19}</span> {strMeasure19}</li>
                  <li key='20'><span className="font-bold grid">{strIngredient20}</span> {strMeasure20}</li>
                </ul>
                <h2 className="flex mx-auto pt-6 w-4/5 text-center text-2xl font-bold">Instructions:</h2>
                <p className="flex mx-auto pb-6 w-4/5 text-start">{strInstructions}</p>
               
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default DisplayMeal