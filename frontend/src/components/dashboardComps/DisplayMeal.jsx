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
                    <h1 className="text-3xl mb-10 font-bold">
                      {strMeal}{" "}
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
                  </div>
                  <Tabs>
                    <TabList>
                      <Tab>
                        <h2 className="text-lg">Ingredients</h2>
                      </Tab>
                      <Tab>
                        <h2 className="text-lg">Instructions</h2>
                      </Tab>
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
                            <li className="line-clamp-4 leading-relaxed text-lg">
                              {strInstructions}
                            </li>
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
