import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteMeal } from "../../features/meal/mealSlice"
import SavedModal from "./SavedModal"

const MealCard = ({ meal, id }) => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [mealCard, setMealCard] = useState([meal])

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <div className="card w-96 bg-neutral bg-opacity-50 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={meal.strMealThumb}
          alt="meal picture"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{meal.strMeal}</h2>
        <p></p>
        <div className="card-actions">
          <button
            onClick={openModal}
            className="btn btn-primary"
          >
            View Recipe
          </button>
          <button className="btn btn-circle bg-transparent hover:bg-red-600 ml-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width=""
              stroke=""
              className="w-8 h-8 stroke-red-600 hover:stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <SavedModal
        id={id}
        isOpen={isOpen}
        closeModal={closeModal}
        meal={mealCard}
      />
    </div>
  )
}

export default MealCard
