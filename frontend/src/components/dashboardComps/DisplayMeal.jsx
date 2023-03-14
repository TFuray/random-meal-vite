const DisplayMeal = ({ randomMeal }) => {
  return (
    <>
      {randomMeal.map(({ idMeal, strMeal, strInstructions, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20 }) => {
        const ingredients = Array.from({ length: 20 }, (_, i) => ({ ingredient: eval(`strIngredient${i + 1}`), measure: eval(`strMeasure${i + 1}`) }))
          .filter(({ ingredient }) => ingredient)
          .slice(0, 20);
        return (
          <div className="hero bg-base-300 rounded" key={idMeal}>
            <div className="hero-content flex-col lg:flex-row">
              <img src={strMealThumb} className="max-w-sm rounded-lg mr-2 shadow-2xl" alt={`Image of ${strMeal}`} />
              <div>
                <h1 className="text-5xl font-bold">{strMeal}</h1>
                <ul className="grid grid-cols-3 gap-2 place-items-start pt-6">
                  {ingredients.map(({ ingredient, measure }, i) => (
                    <li key={i}>
                      <span className="font-bold grid">{ingredient}</span> {measure}
                    </li>
                  ))}
                </ul>
                <h2 className="flex pt-6 w-4/5 text-center text-2xl font-bold">Instructions:</h2>
                <p className="flex pb-6 w-4/5 text-start">{strInstructions}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DisplayMeal;