import { useState } from "react"
import { useDispatch } from "react-redux"
import { saveMeal } from '../../features/meal/mealSlice'
import { Axios } from "axios"

const ButtonSave = ({ randomMeal }) => {
  // const [meal, setMeal] = useState([])

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(saveMeal({ meal }))
  }

  return (
    <section>
      <form onSubmit={onSubmit}>
        <input
          // className="hidden"
          type="text"
          name="meal"
          id="meal"
          value={JSON.stringify(randomMeal)}
        />
        <button type="submit" className="btn btn-secondary flex justify-center space-x-2 ml-5">
          Save This Meal
        </button>
      </form>


    </section>
  )
}

export default ButtonSave