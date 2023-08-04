import { useState } from "react"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import "react-tabs/style/react-tabs.css"

const DisplayMeal = ({ randomMeal }) => {
  const [showMore, setShowMore] = useState(false)
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
            <div className="mx-auto px-4">
              <div className=" flex ">
                <div className="grid flex-shrink-0 place-items-center my-20 lg:pr-6">
                  <div className="carousel max-w-[400px] rounded-xl">
                    <div
                      id="slide1"
                      className="carousel-item relative"
                    >
                      <img
                        src={strMealThumb}
                        className="w-[400px] h-[500px] object-cover"
                        alt={`Image of ${strMeal}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="divider lg:divider-horizontal" />
                <div className="flex w-[500px] flex-col justify-start mt-14">
                  <div className="">
                    <h1 className="text-3xl mb-10 font-bold">{strMeal}</h1>
                  </div>
                  <Tabs>
                    <TabList>
                      <Tab><h2 className="text-lg">Ingredients</h2></Tab>
                      <Tab><h2 className="text-lg">Instructions</h2></Tab>
                    </TabList>

                    <TabPanel>
                      <ul className="grid grid-cols-3 gap-2 place-items-start pt-6">
                        {ingredients.map(({ ingredient, measure }, i) => (
                          <li key={i}>
                            <span className="font-bold grid">{ingredient}</span>{" "}
                            {measure}
                          </li>
                        ))}
                      </ul>
                    </TabPanel>
                    <TabPanel>
                      {!showMore ? (
                        <>
                          <ul className="">
                            <li className="line-clamp-4 leading-relaxed text-lg">{strInstructions}</li>
                          </ul>
                          <button
                            onClick={() => setShowMore(!showMore)}
                            className="text-info hover:text-blue-500"
                          >
                            Show More
                          </button>
                        </>
                      ) : (
                        <>
                          <p className="leading-relaxed text-lg">
                            {strInstructions}
                          </p>
                          <button
                            onClick={() => setShowMore(!showMore)}
                            className="text-info hover:text-blue-500"
                          >
                            Show Less
                          </button>
                        </>
                      )}
                    </TabPanel>
                  </Tabs>
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
