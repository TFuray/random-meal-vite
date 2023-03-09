import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSavedMeals } from '../features/meal/mealSlice'
import Spinner from '../components/generalComps/Spinner'


const SavedMeals = () => {
  const { savedMeals } = useSelector((state) => state.getSavedMeals)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSavedMeals())
  }, [dispatch])

  if (!savedMeals) {
    return <Spinner />
  }

  return (
    <>
      <h1>Saved Meals</h1> 
    </>
  )
}

export default SavedMeals