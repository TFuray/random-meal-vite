import { useDispatch, useSelector } from "react-redux"
import { saveMeal } from '../../features/meal/mealSlice'
import { toast } from 'react-toastify'

const ButtonSave = ({ randomMeal, clicked, setClicked }) => {
  const dispatch = useDispatch()
  const meal = JSON.stringify(randomMeal)
  const { user } = useSelector(state => state.auth)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!user) {
      toast.warn("Login To Do That", {
        position: toast.POSITION.TOP_CENTER
      })
    }
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
          Save this meal
        </button> :

          <button type="submit" onClick={() => handleClick()} className="btn btn-secondary btn-disabled flex justify-center space-x-2 ml-5">
            Meal already saved
          </button>}
      </form>


    </section>
  )
}

export default ButtonSave