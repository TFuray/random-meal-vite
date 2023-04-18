import { useState } from "react"
import SavedModal from "./SavedModal"

const MealCard = ({ meal, id }) => {
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
