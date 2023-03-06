
const ButtonRandomMeal = ({onClick}) => {
  return (
    <div className="flex justify-center space-x-2">
      <button type="button" onClick={()=>onClick()} className="btn btn-primary">
        Random Meal
      </button>
    </div>

  )
}

export default ButtonRandomMeal