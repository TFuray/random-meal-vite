const DisplayMeal = ({ randomMeal }) => {
  return (
    <>
      {randomMeal.map(
        ({
          idMeal,
          strMeal,
          strInstructions,
          strMealThumb,
          strSource,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
          strIngredient11,
          strIngredient12,
          strIngredient13,
          strIngredient14,
          strIngredient15,
          strIngredient16,
          strIngredient17,
          strIngredient18,
          strIngredient19,
          strIngredient20,
          strMeasure1,
          strMeasure2,
          strMeasure3,
          strMeasure4,
          strMeasure5,
          strMeasure6,
          strMeasure7,
          strMeasure8,
          strMeasure9,
          strMeasure10,
          strMeasure11,
          strMeasure12,
          strMeasure13,
          strMeasure14,
          strMeasure15,
          strMeasure16,
          strMeasure17,
          strMeasure18,
          strMeasure19,
          strMeasure20,
        }) => {
          const ingredients = Array.from({ length: 20 }, (_, i) => ({
            ingredient: eval(`strIngredient${i + 1}`),
            measure: eval(`strMeasure${i + 1}`),
          }))
            .filter(({ ingredient }) => ingredient)
            .slice(0, 20)
          return (
            <div
              className="hero card shadow-2xl glass rounded-3xl"
              key={idMeal}
            >
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src={strMealThumb}
                  className="max-w-sm rounded-lg mr-2 shadow-2xl"
                  alt={`Image of ${strMeal}`}
                />
                <div>
                  <h1 className="text-5xl font-bold">
                    {strMeal}
                    <span className="inline-block ml-3 ">
                      <a
                        href={strSource}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="fill-current hover:fill-primary-content"
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        >
                          <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
                        </svg>
                      </a>
                    </span>
                  </h1>
                  <ul className="grid grid-cols-3 gap-2 place-items-start pt-6">
                    {ingredients.map(({ ingredient, measure }, i) => (
                      <li key={i}>
                        <span className="font-bold grid">{ingredient}</span>{" "}
                        {measure}
                      </li>
                    ))}
                  </ul>
                  <h2 className="flex pt-6 w-4/5 text-center text-2xl font-bold">
                    Instructions:
                  </h2>
                  <p className="flex pb-6 w-4/5 text-start line-clamp-4 hover:line-clamp-none">
                    {strInstructions}
                  </p>
                  <button className="text-info hover:text-blue-500">Show More</button>
                </div>
              </div>
            </div>
          )
        }
      )}
    </>
  )
}

export default DisplayMeal
