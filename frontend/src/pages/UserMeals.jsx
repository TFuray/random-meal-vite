import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Spinner from "../components/generalComps/Spinner"
import MealCard from "../components/savedMealComps/MealCard"
import { deleteMeal, getUserMeal } from "../features/meal/mealSlice"

const UserMeals = () => {
  const { meal } = useSelector((state) => state.meal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserMeal())
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
      <h1 className="text-center text-2xl font-bold m-10">User Meals</h1>

      <section>
        <div className="grid grid-col-1 content-center gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* {meal.map((meal) => (
            <MealCard
              key={meal._id}
              savedMeal={meal}
              meal={JSON.parse(meal.meal.slice(1, -1))}
            />
          ))} */}
          {meal.map((meal) => (
            <>
              <div className="card w-[80] bg-neutral shadow-xl image-full">
                <div className="card-body items-center text-center">
                  <div className="card-title">{meal.title}</div>

                  <p>{meal.ingredietns}</p>
                  <p>{meal.instructions}</p>
                  <p>{meal.description}</p>
                </div>
                <figure className="">
                  <img
                    // className=" w-1/2"
                    src={meal.photo}
                    alt=""
                  />
                </figure>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}

export default UserMeals
