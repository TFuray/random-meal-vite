import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteMeal } from "../../features/meal/mealSlice"
import SavedModal from "./SavedModal"

const MealCard = ({ meal, savedMeal }) => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [mealCard, setMealCard] = useState([meal])
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  // const onClick = () => {
  //   dispatch(deleteMeal(_id))
  // }

  return (
    <div className=" card w-96 bg-neutral bg-opacity-50 shadow-xl">
      <div className="static mt-2 mr-8 ">
        <div className="static">
          <figure className="pl-10 pt-10">
            <img
              src={meal.strMealThumb}
              alt="meal picture"
              className="rounded-xl"
            />
          </figure>
        </div>
        <div className="absolute top-0 right-0 pt-10 pr-5">
          <button
            onClick={() => dispatch(deleteMeal(savedMeal._id))}
            className="btn btn-circle hover:bg-red-600 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth=""
              stroke=""
              className="w-8 h-8 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

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
        isOpen={isOpen}
        closeModal={closeModal}
        meal={mealCard}
      />
    </div>
  )
}

export default MealCard
