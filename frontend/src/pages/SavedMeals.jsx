import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSavedMeals } from '../features/meal/mealSlice'
import Spinner from '../components/generalComps/Spinner'
import MealCard from '../components/savedMealComps/MealCard'


const SavedMeals = () => {
  const { meal } = useSelector((state) => state.meal)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSavedMeals())
  }, [dispatch])

  if (!meal) {
    return <Spinner />
  }

  const mealFilter = meal.map((meal) => {
    return JSON.parse(meal.meal.slice(1, -1))
  })

  return (
    <>
      <h1 className='text-center text-2xl font-bold m-10'>Saved Meals</h1>

      <section>
        <div className="grid grid-col-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mealFilter.map(meal => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div> 
      </section>      
    </>
  )
}

export default SavedMeals