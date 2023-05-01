import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Spinner from "../components/generalComps/Spinner"
import MealCard from "../components/savedMealComps/MealCard"
import { getSavedMeals, deleteMeal} from "../features/meal/mealSlice"

const SavedMeals = () => {
  const { meal } = useSelector((state) => state.meal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSavedMeals())
  }, [dispatch])

  if (!meal) {
    return <Spinner />
  }

  // const mealFilter = meal.map((meal) => {
  //   return JSON.parse(meal.meal.slice(1, -1))
  // })
  // console.log(mealFilter)

  return (
    <>
      <h1 className="text-center text-2xl font-bold m-10">Saved Meals</h1>

      <section>
        <div className="grid grid-col-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {meal.map((meal) => (
            <MealCard
              key={meal._id}
              savedMeal={meal}
              meal={JSON.parse(meal.meal.slice(1, -1))}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default SavedMeals
