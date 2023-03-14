import { useDispatch } from "react-redux"
import { saveMeal } from '../../features/meal/mealSlice'

const ButtonSave = ({ randomMeal, clicked, setClicked }) => {
  const dispatch = useDispatch()
  const meal = JSON.stringify(randomMeal)
  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(saveMeal({ meal }))
  }
  const handleClick = () => {
    setClicked(true)
  }

  return (
    <section>
      <form onSubmit={onSubmit}>
        <input
          className="hidden"
          type="text"
          name="meal"
          id="meal"
          value={meal}
          readOnly
        />
        {!clicked ? <button type="submit" onClick={() => handleClick()} className="btn btn-secondary flex justify-center space-x-2 ml-5">
          Save This Meal
        </button> :

          <button type="submit" onClick={() => handleClick()} className="btn btn-secondary btn-disabled flex justify-center space-x-2 ml-5">
          Meal already Saved
        </button>}
      </form>


    </section>
  )
}

export default ButtonSave